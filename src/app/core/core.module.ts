import { NgModule, Optional, SkipSelf } from '@angular/core';
import { InterceptorService } from './interceptor.service';
import { LoaderService } from './loader.service';
import { HTTP_INTERCEPTORS } from "@angular/common/http";

@NgModule({
  imports: [],
  providers: [
    InterceptorService,
    LoaderService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: InterceptorService,
      multi: true
    }
  ],
})

export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error('CoreModule is already loaded. Import it in the AppModule only');
    }
  }
}
