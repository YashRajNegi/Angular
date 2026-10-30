import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  FormsModule,
  Validators
} from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [ReactiveFormsModule, FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

  userForm = new FormGroup({
    name: new FormControl('', Validators.required),

    email: new FormControl('', [
      Validators.required,
      Validators.email
    ]),

    password: new FormControl('', [
      Validators.required,
      Validators.minLength(6)
    ])
  });

  users: {
    id: number;
    name: string;
    email: string;
  }[] = [];

  search = '';

  onSubmit() {

    if (this.userForm.invalid) {
      this.userForm.markAllAsTouched();
      return;
    }

    const formValue = this.userForm.value;

    const newUser = {
      id: Date.now(),
      name: formValue.name!,
      email: formValue.email!
    };

    this.users.push(newUser);

    this.userForm.reset();
  }

  deleteUser(id: number) {
    this.users = this.users.filter(user => user.id !== id);
  }

  get filteredUsers() {
    const searchValue = this.search.toLowerCase();

    return this.users.filter(user =>
      user.name.toLowerCase().includes(searchValue) ||
      user.email.toLowerCase().includes(searchValue)
    );
  }
}