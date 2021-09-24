import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todoapp',
  templateUrl: './todoapp.component.html',
  styleUrls: ['./todoapp.component.css']
})
export class TodoappComponent implements OnInit {

  todoList = ["Angular", "Angular", "Angular"];
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
