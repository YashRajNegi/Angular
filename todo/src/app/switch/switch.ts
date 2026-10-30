import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-switch',
  imports: [CommonModule],
  templateUrl: './switch.html',
  styleUrl: './switch.css',
})
export class Switch {
  color = "green";

  updateColor(newColor : string){
    this.color = newColor;
  }
}
 