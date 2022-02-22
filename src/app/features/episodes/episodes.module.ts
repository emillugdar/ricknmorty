import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { EpisodesComponent } from './episodes.component';
import { EpisodesService } from './episodes.service';

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild([{
      path: '',
      component: EpisodesComponent,
    }]),
  ],
  declarations: [
    EpisodesComponent
  ],
  providers: [
    EpisodesService
  ]
})
export class EpisodesModule {}
