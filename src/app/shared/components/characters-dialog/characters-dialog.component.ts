import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-characters-dialog',
  templateUrl: './characters-dialog.component.html',
  styleUrls: ['./characters-dialog.component.css']
})

export class CharactersDialogComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {}
}
