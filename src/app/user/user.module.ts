import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CustomCommonModule } from '../common/custom-common.module';
import { UserFormComponent } from './user-form.component';
import { UserComponent } from './user.component';
@NgModule({
  imports: [CustomCommonModule, ReactiveFormsModule],
  declarations: [UserComponent, UserFormComponent],
  exports: [UserComponent, UserFormComponent]
})
export class UserModule {}
