import { Component } from '@angular/core';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-ngfor',
  imports: [NgFor],
  templateUrl: './ngfor.html',
  styleUrl: './ngfor.css',
})
export class Ngfor {

  // students = ["Anil","Sam","Riya","Sunil", "Asha", "Kiran", "Divya"];

  studentData = [
    {
      name:"Anil",
      age:20,
      city:"Delhi",
      subjects: ["Maths", "DSA", "CN"]
    },
    {
      name:"Sam",
      age:21,
      city:"Mumbai",
      subjects: ["Maths", "CN", "OOPS"]
    },
    {
      name:"Riya",
      age:22,
      city:"Kolkata",
      subjects: ["Discrete Maths", "DBMS", "OOPS"]
    },
    {
      name:"Sunil",
      age:23,
      city:"Chennai",
      subjects: ["Advanced Maths", "OS", "Computer graphics"]
    },
    {
      name:"Asha",
      age:24,
      city:"Bangalore",
      subjects: ["Maths", "Science", "English"]
    },
    {
      name:"Kiran",
      age:25,
      city:"Hyderabad",
      subjects: ["OS", "CN", "DSA"]
    },
    {
      name:"Divya",
      age:26,
      city:"Pune",
      subjects: ["DBMS", "CN", "OOPS"]
    }
  ]
}