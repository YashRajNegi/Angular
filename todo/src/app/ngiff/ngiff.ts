import { Component } from '@angular/core';
import { NgIf } from '@angular/common';



@Component({
  selector: 'app-ngiff',
  imports: [NgIf],
  templateUrl: './ngiff.html',
  styleUrl: './ngiff.css',
})
export class Ngiff {
  
  block = 0;

  updateBlock(){
    this.block = this.block +1;
    if(this.block == 3){
      this.block = 0;
    }
  }

}