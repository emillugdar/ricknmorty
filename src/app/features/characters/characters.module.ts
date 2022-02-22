import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { CharacterViewComponent } from './character-view/character-view.component';
import { CharactersComponent } from './characters.component';
import { CharactersService } from './characters.service';

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild([{
      path: '',
      children: [
        {
          path: '',
          component: CharactersComponent,
        },
        {
          path: ':id',
          component: CharacterViewComponent,
        }
      ]
    }]),
  ],
  declarations: [
    CharactersComponent,
    CharacterViewComponent
  ],
  providers: [
    CharactersService
  ]
})

export class CharactersModule {}
