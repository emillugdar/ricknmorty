import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, OnInit } from '@angular/core';
import { delay } from 'rxjs';
import { LoaderService } from 'src/app/core/loader.service';
@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.css']
})
export class LoaderComponent implements OnInit {
  color = 'primary';
  value = 50;
  isLoading = true;
  constructor(private loaderService: LoaderService) {
  }

  ngOnInit(): void {
    this.loaderService.isLoading.subscribe((result) => {
      this.isLoading = result;
    })
  }
}
