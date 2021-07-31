import { User } from './user.model';
import { Input, OnInit, Component } from '@angular/core';
import { TestService } from '../service/test.service';
@Component({
  selector: 'user-cmp',
  template: '<h1>User Full Name: {{name}}</h1>'
})
export class UserComponent implements OnInit {
  @Input() user: User;
  name: string;
  public constructor(private testService: TestService) {}
  ngOnInit() {
    this.name = this.user.firstName + ' ' + this.user.lastName;
  }
}
