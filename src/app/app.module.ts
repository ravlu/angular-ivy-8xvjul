import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { UserModule } from './user/user.module';
import { CustomCommonModule } from './common/custom-common.module';
import { CustomerComponent } from './customer/customer.component';
import { CommonModule } from '@angular/common';
@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    UserModule,
    CustomCommonModule,
    CommonModule
  ],
  declarations: [AppComponent, HelloComponent, CustomerComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
