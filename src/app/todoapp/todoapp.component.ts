import { animate, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { fade, shakeLeft } from '../Animations/fade';

@Component({
  selector: 'app-todoapp',
  templateUrl: './todoapp.component.html',
  styleUrls: ['./todoapp.component.css'],
  animations: [fade, shakeLeft]
})
export class TodoappComponent implements OnInit {

  todoList = ["Angular", "Node ", "javascript"];
  taskName: string;

  constructor() { }

  ngOnInit(): void {

  }

  addItemIntoList() {
    this.todoList.push(this.taskName);
    this.taskName = "";
  }
  removeItemFromList(i) {
    this.todoList.splice(i, 1)
  }
}
