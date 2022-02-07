import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'characters',
    pathMatch: 'full'
  },
  {
    path: 'characters',
    loadChildren: () => import('./features/characters/characters.module').then((m) => m.CharactersModule)
  },
  {
    path: 'episodes',
    loadChildren: () => import('./features/episodes/episodes.module').then((m) => m.EpisodesModule)
  },
  {
    path: 'locations',
    loadChildren: () => import('./features/locations/locations.module').then((m) => m.LocationsModule)
  },
  {
    path: '**',
    redirectTo: 'characters'
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
