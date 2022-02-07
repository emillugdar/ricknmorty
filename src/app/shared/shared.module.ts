import { NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule, MatIconRegistry } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatGridListModule } from '@angular/material/grid-list';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatTable, MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { NgxPaginationModule } from 'ngx-pagination';
import { MatBadgeModule } from '@angular/material/badge';
import { MatChipsModule } from '@angular/material/chips';
import { MatDialogModule } from '@angular/material/dialog';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

import {
  LoaderComponent,
  ToolbarComponent,
  CharacterCardComponent,
  CharactersDialogComponent
} from './components/index';

import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
const components = [
  LoaderComponent,
  ToolbarComponent,
  CharacterCardComponent,
  CharactersDialogComponent
]

const modules = [
  CommonModule,
  MatToolbarModule,
  MatIconModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatTooltipModule,
  MatGridListModule,
  FlexLayoutModule,
  MatTableModule,
  MatPaginatorModule,
  NgxPaginationModule,
  MatBadgeModule,
  MatChipsModule,
  MatDialogModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  RouterModule];

@NgModule({
  imports: [...modules],
  declarations: [components],
  exports: [modules, components]
})
export class SharedModule { }
