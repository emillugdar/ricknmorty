
import { Component, OnInit } from '@angular/core';
import { Info } from 'src/app/core/info.interface';
import { Character, CharactersService } from './characters.service';
@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})
export class CharactersComponent implements OnInit {
  public characters: Character[] = [];
  public info!: Info;
  public page: number = 1;
  public itemsPerPage: number = 12;
  constructor(private charactersService: CharactersService) { }

  ngOnInit(): void {
    this.loadCharacters();
  }



  loadCharacters() {
    this.charactersService.getCharacters(this.page, this.itemsPerPage)
      .subscribe((data: { info: Info, results: Character[] }) => {
        this.info = data.info;
        this.characters = data.results;
      })
  }
  pageChanged($event: number) {
    this.page = $event;
    this.loadCharacters();
  }

}
