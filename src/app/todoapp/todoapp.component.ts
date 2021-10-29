
import { animate, animateChild, group, query, stagger, style, transition, trigger, useAnimation } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { fade, animateTodo, slide, bounceOutLeftAnimation } from '../Animations/fade';

@Component({
  selector: 'app-todoapp',
  templateUrl: './todoapp.component.html',
  styleUrls: ['./todoapp.component.css'],
  animations: [
    trigger('todoCustomAnimation', [
      transition(':enter', [
        style({
          opacity: 0
        }),
        animate(500),
      ]),
      transition(':leave', [
        style({
          backgroundColor: 'red'
        }),
        animate(1000),
        useAnimation(bounceOutLeftAnimation)
      ])
    ]),
    animateTodo,
    trigger('todosAnimations', [

      transition(':enter', [
        group([
          query('#todoEnterBox', [
            style({ transform: 'translateY(-40px)' }),
            animate(1000),
          ]),
          query('@animateTodo', stagger(200, animateChild())

          )
        ])

      ])

    ])
  ]
})
export class TodoappComponent implements OnInit {

  todoList = ["Creating Reusable Animations",
    "Parameterize animations ", "Animations callbacks"
    , "Gaurav Baviskar", "Javascript", "Mean Stack"];
  taskName: string;

  constructor() { }

  ngOnInit(): void {

  }

  addItemIntoList() {
    try {
      if (this.taskName) {
        this.todoList = [this.taskName, ...this.todoList];
        this.taskName = "";
      }
      else {
        return;
      }
    } catch (error) {
      console.log("Got Error while adding Item into List", error.message);
    }

  }
  removeItemFromList(i) {
    this.todoList.splice(i, 1)
  }
}
