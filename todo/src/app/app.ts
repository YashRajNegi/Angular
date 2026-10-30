import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Ngfor } from './ngfor/ngfor'
import { Ngiff } from './ngiff/ngiff';
import { Switch } from './switch/switch';

@Component({
  selector: 'app-root',
  imports: [FormsModule, Ngfor, Ngiff, Switch],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

  todo = "";
  taskList:{id:number, task:string}[]= []

  addTask(){
    this.taskList.push({id: this.taskList.length + 1, task: this.todo});
    this.todo = "";
  }

  deleteTask(id: number){
    this.taskList = this.taskList.filter(task => task.id !== id);
  }

}


