import { NgModule } from '@angular/core';
import { BetterService } from '../service/better.service';
import { TestService } from '../service/test.service';
@NgModule({
  providers:[{provide: TestService, useClass: BetterService}]
})
export class CustomCommonModule {}
