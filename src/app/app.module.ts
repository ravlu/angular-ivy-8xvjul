import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { UserModule } from './user/user.module';
import { CommonModule } from '@angular/common';
import { CustomerComponent } from './customer/customer.component';
import {
  ComplexComponent,
  ComplexExtComponent,
  LowerService,
  UpperService
} from './complex.component';

@NgModule({
  imports: [BrowserModule, FormsModule, UserModule],
  declarations: [
    AppComponent,
    HelloComponent,
    CustomerComponent,
    ComplexExtComponent,
    ComplexComponent
  ],
  providers: [UpperService, LowerService],
  bootstrap: [AppComponent]
})
export class AppModule {}
