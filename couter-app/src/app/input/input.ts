import { Component } from '@angular/core';

@Component({
  selector: 'app-input',
  imports: [],
  templateUrl: './input.html',
  styleUrl: './input.css',
})
export class Input {
  name="";
  displayName = "";

  getName(event: Event){
    const name = (event.target as HTMLInputElement).value;
    this.name = name;
  }

  showName(){
    this.displayName = this.name;
  }
}
