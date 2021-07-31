import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { UserModule } from './user/user.module';
import { CommonModule } from '@angular/common';
import { CustomerComponent } from './customer/customer.component';

@NgModule({
  imports: [BrowserModule, FormsModule, UserModule, CommonModule],
  declarations: [AppComponent, HelloComponent, CustomerComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
