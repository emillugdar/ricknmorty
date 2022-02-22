import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { LoaderService } from './loader.service';

@Injectable({
  providedIn: 'root'
})

export class InterceptorService implements HttpInterceptor {
  requestsCount = 0;
  constructor(private loaderService: LoaderService) { }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    this.requestsCount++;
    this.loaderService.show();
    return next.handle(req).pipe(
      finalize(() => {
        this.requestsCount--;
        if (!this.requestsCount)
          this.loaderService.hide()
      })
    )
  }
}
