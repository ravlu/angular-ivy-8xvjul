import { Component } from '@angular/core';
import { TestService } from '../service/test.service';

@Component({
  selector: 'cmp-customer',
  template: '<h1>{{name}}<h1>',
  providers: [TestService]
})
export class CustomerComponent {
  name: string;
  public constructor(private testService: TestService) {
    this.name = 'Favan Srivastava';
    this.testService.name = this.name;
    this.testService.logger();
  }
}
