import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {Event} from './event/event';
import { Input} from './input/input';
import { Array } from './array/array';

@Component({
  selector: 'app-root',
  imports: [ Event, Input,Array],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  count= 0;

  // handleIncrement() {
  //   this.count++;
  // }
  
  // handleDecrement() {
  //   this.count--;
  // }

  // handleReset() {
  //   this.count = 0;
  // }

  handleCounter(val:string){
    if(val === 'increment'){
      this.count++;
    } else if(val === 'decrement'){
      if(this.count > 0){
        this.count--;
      }
    } else {
      this.count = 0;
    }
  }
}
