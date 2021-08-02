import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
@Component({
  selector: 'user-form',
  template:
    '<label>Name</label><input id="name" [formControl]="name" /><p>{{name.value}}</p>'
})
export class UserFormComponent {
  name = new FormControl('');
}
