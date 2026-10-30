import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

  handleBtn() {
    console.log('Button clicked!');
    this.otherFunc();
  }

  otherFunc(){
    console.log('Other function called!');
  }
}

