import { TodoAppService } from './../todo-app.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo-app',
  templateUrl: './todo-app.component.html',
  styleUrls: ['./todo-app.component.css']
})
export class TodoAppComponent implements OnInit {
  Title: string = "TodoApp";
  newTodo: string = ""
  Todos = [];


  constructor(private _todos: TodoAppService) { }

  ngOnInit() {
   this._todos.getTodos()
   .subscribe(data => this.Todos = data)
  }

  addTodo() {
    let rand1 = Math.floor(Math.random()* 100 + 10);
    let rand2 = Math.floor(Math.random()* 1000 + 10);
    let generateid = rand1 * rand2
    let newTodoObj = { id: generateid , title: this.newTodo, completed: false }

    this.Todos.unshift(newTodoObj)
    this.newTodo = " "
  }

  deleteTodo(event) {
    let updatedTodos = this.Todos.filter(value => {
      return value.id != event.target.id
    })

    this.Todos = updatedTodos
  }
  toggleComplete(event) {
    let updatedTodos = this.Todos.map(value => {
      if (event.id == value.id) {
        value.completed = !value.completed
      }
    })

  }

}
