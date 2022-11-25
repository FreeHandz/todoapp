import { Component, Input, OnInit } from '@angular/core';

export interface TodoCard {
  title: string;
  description: string;
}

@Component({
  selector: 'app-todo-card',
  templateUrl: './todo-card.component.html',
  styleUrls: ['./todo-card.component.scss']
})
export class TodoCardComponent implements OnInit {

  @Input() card: TodoCard = {
    description: '',
    title: ''
  };

  constructor() { }

  ngOnInit(): void {
  }

}
