import { Component, OnInit } from '@angular/core';
import { LoaderService } from 'src/app/core/loader.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent {
  isLoading = true;
  constructor(private loaderService: LoaderService) {
    this.loaderService.isLoading.subscribe((result) => {
      this.isLoading = result;
    })
  }
}
