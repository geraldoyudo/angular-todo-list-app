import { Component } from '@angular/core';
import { Todo } from './todo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'todo-list-app';
  todo: string;
  todoList: Todo[] = [];
  
  addTodo(){
    let todoItem: Todo = new Todo();
    todoItem.text = this.todo;
    this.todoList.push(todoItem);
    this.todo = "";
  }

  toggleDone(todo:Todo){
    todo.done = !todo.done;
  }
}
