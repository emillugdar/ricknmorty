import { NgModule, Optional, SkipSelf } from '@angular/core';
import { InterceptorService } from './interceptor.service';
import { LoaderService } from './loader.service';

@NgModule({
  imports: [],
  providers: [
    InterceptorService,
    LoaderService
  ],
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error('CoreModule is already loaded. Import it in the AppModule only');
    }
  }
}
