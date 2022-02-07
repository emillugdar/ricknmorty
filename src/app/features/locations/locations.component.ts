import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { CharactersDialogComponent } from 'src/app/shared/components/characters-dialog/characters-dialog.component';
import { LocationsService, Location } from './locations.service';
import { Character, CharactersService } from '../characters/characters.service';
import { Info } from 'src/app/core/info.interface';

@Component({
  selector: 'app-locations',
  templateUrl: './locations.component.html',
  styleUrls: ['./locations.component.css']
})
export class LocationsComponent implements OnInit {
  public locations: Location[] = [];
  public info!: Info;
  public page: number = 1;
  public itemsPerPage: number = 10;
  public charactersInLocation!: Character[]
  displayedColumns: string[] = ['id', 'name', 'type', 'dimension', 'created', 'totchars', 'characters'];
  dataSource: any = null;

  constructor(private locationsService: LocationsService, public dialog: MatDialog,
    private charactersService: CharactersService) { }

  ngOnInit(): void {
    this.loadLocations();
  }

  loadLocations() {
    this.locationsService.getLocations(this.page, this.itemsPerPage)
      .subscribe((data: { info: Info, results: Location[] }) => {
        this.info = data.info;
        this.locations = data.results;
        this.dataSource = new MatTableDataSource<Location>(this.locations);
      })
  }
  pageChanged($event: number) {
    this.page = $event;
    this.loadLocations();
  }
  openCharactersDialog(location: Location) {
    this.charactersService.getCharactersByIds(location.residentsIds)
      .subscribe((data: Character[]) => {
        let characters = location.residentsIds.length > 1 ? data : [data];
        this.dialog.open(CharactersDialogComponent, { data: { place: location.name, characters: characters } });
      })

  }
}
