import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Character, CharactersService } from '../characters.service';

@Component({
  selector: 'app-character-view',
  templateUrl: './character-view.component.html',
  styleUrls: ['./character-view.component.css']
})

export class CharacterViewComponent implements OnInit {
  public characterId!: number | null;
  public selectedCharacter!: Character;

  constructor(
    private route: ActivatedRoute,
    private charactersService: CharactersService,
    private router: Router) {}

  ngOnInit(): void {
    let receivedCharacter = history.state.data;
    if (receivedCharacter) {
      this.selectedCharacter = receivedCharacter;
    }
    else {
      this.characterId = +this.route.snapshot.paramMap.get('id')!;
      if (+this.characterId) {
        this.loadCharacter(this.characterId);
      }
      else {
        this.router.navigate(['characters']);
      }
    }
  }

  loadCharacter(id: number) {
    this.charactersService.getCharacterById(id)
      .subscribe(Character => {
        this.selectedCharacter = Character;
      })
  }
}
