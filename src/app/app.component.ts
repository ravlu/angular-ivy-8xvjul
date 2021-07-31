import { Component, VERSION } from '@angular/core';
import { User } from './user/user.model';
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;
  users: User[] = [new User('Ravi', 'Kambham'), new User('Suhas', 'Ravva')];
}
