import { Component } from '@angular/core';

@Component({
  selector: 'app-array',
  imports: [],
  templateUrl: './array.html',
  styleUrl: './array.css',
})
export class Array {

  users = ["John", "Jane", "Doe", "Smith"];

  student = [{
    name : 'john', age : 20 , rollNo : 101},
  {name : 'jane', age : 21 , rollNo : 102},
  {name : 'doe', age : 22 , rollNo : 103},
  {name : 'smith', age : 23 , rollNo : 104}

  ]


  getName(name:string){
    alert(name);
  }
}
