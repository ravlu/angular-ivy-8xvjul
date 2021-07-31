import { NgModule } from '@angular/core';
import { CustomCommonModule } from '../common/custom-common.module';
import { UserComponent } from './user.component';
@NgModule({
  imports: [CustomCommonModule],
  declarations: [UserComponent],
  exports: [UserComponent]
})
export class UserModule {}
