import { Component, OnInit } from '@angular/core';
import { Info } from 'src/app/core/info.interface';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { CharactersDialogComponent } from 'src/app/shared/components/characters-dialog/characters-dialog.component';
import { Episode, EpisodesService } from './episodes.service';
import { Character, CharactersService } from '../characters/characters.service';

@Component({
  selector: 'app-episodes',
  templateUrl: './episodes.component.html',
  styleUrls: ['./episodes.component.css']
})

export class EpisodesComponent implements OnInit {
  public episodes: Episode[] = [];
  public info!: Info;
  public page: number = 1;
  public itemsPerPage: number = 10;
  displayedColumns: string[] = ['id', 'name', 'air_date', 'episode', 'created', 'totchars', 'characters'];
  dataSource: any = null;

  constructor(private episodesService: EpisodesService,
              private charactersService: CharactersService,
              public dialog: MatDialog,) {}

  ngOnInit(): void {
    this.loadEpisodes();
  }

  loadEpisodes() {
    this.episodesService.getEpisodes(this.page, this.itemsPerPage)
      .subscribe((data: { info: Info, results: Episode[] }) => {
        this.info = data.info;
        this.episodes = data.results;
        this.dataSource = new MatTableDataSource<Episode>(this.episodes);
      })
  }

  pageChanged($event: number) {
    this.page = $event;
    this.loadEpisodes();
  }

  openCharactersDialog(episode: Episode) {
    this.charactersService.getCharactersByIds(episode.charactersIds)
      .subscribe((data: Character[]) => {
        let characters = episode.charactersIds.length > 1 ? data : [data];
        this.dialog.open(CharactersDialogComponent, { data: { place: episode.name, characters: characters } });
      })
  }
}
