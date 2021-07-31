import { Component } from '@angular/core';
import { TestService } from '../service/test.service';

@Component({
  selector: 'cmp-customer',
  template: '<h1>{{name}}<h1>'
})
export class CustomerComponent {
  name: string;
  public constructor(private testService: TestService) {
    this.name = 'Favan Srivastava';
  }
}
