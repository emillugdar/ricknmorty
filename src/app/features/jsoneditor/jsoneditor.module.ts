import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { JsoneditorComponent } from './jsoneditor.component';
import { SchemaErrorsComponent } from './schema-errors/schema-errors.component';

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild([{
      path: '',
      component: JsoneditorComponent,
    }])
  ],
  declarations: [
    JsoneditorComponent,
    SchemaErrorsComponent,
  ],
  providers: []
})

export class JsoneditorModule { }

