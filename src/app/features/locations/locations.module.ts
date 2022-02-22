import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { LocationsComponent } from './locations.component';
import { LocationsService } from './locations.service';

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild([{
      path: '',
      component: LocationsComponent,
    }])
  ],
  declarations: [
    LocationsComponent,
  ],

  providers: [
    LocationsService
  ]
})

export class LocationsModule {}

