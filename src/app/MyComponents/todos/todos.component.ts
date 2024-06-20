import { Component } from '@angular/core';
import { Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { Todo } from '../../Todo';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { TodoItemComponent } from '../todo-item/todo-item.component';
import { AddTodoComponent } from '../add-todo/add-todo.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-todos',
  standalone: true,
  imports: [CommonModule, FormsModule,TodoItemComponent,AddTodoComponent,RouterLink],
  templateUrl: './todos.component.html',
  styleUrl: './todos.component.css'
})
export class TodosComponent {
  todos: Todo[] = [];
  isBrowser: boolean;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    this.isBrowser = isPlatformBrowser(this.platformId);

    if (this.isBrowser) {
      const localItem = localStorage.getItem('todos');
      this.todos = localItem ? JSON.parse(localItem) : [];
    }
  }
  showAddTodo: boolean = false;
  deleteAllTodos() {
    this.todos = [];
    localStorage.setItem('todos', JSON.stringify(this.todos));
  }
  deleteTodo(todo: Todo) {
    const index = this.todos.indexOf(todo);
    if (index > -1) {
      this.todos.splice(index, 1);
      if (this.isBrowser) {
        localStorage.setItem('todos', JSON.stringify(this.todos));
      }
    }
  }

  addTodo(todo: Todo) {
    this.todos.push(todo);
    if (this.isBrowser) {
      localStorage.setItem('todos', JSON.stringify(this.todos));
    }
  }
  toggleTodo(todo: Todo) {
    const index = this.todos.indexOf(todo);
    if (index > -1) {
      this.todos[index].active=!this.todos[index].active; 
    }
    if (this.isBrowser) {
      localStorage.setItem('todos', JSON.stringify(this.todos));
    }
  }
}
