import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'user-form',
  template:
    '<label>Name</label><input id="name" [formControl]="name" /><p>{{ name.value }}</p>  <button type="submit" [disabled]="!name.valid">Submit</button><p>{{ name.valid }}</p><p>{{ name.status }}</p>'
})
export class UserFormComponent {
  name = new FormControl('', Validators.required);
}
