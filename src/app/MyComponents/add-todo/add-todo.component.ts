import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Todo } from '../../Todo';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-add-todo',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './add-todo.component.html',
  styleUrl: './add-todo.component.css'
})
export class AddTodoComponent {
  title!: string;
  desc!: string;
  @Output() todoAdd: EventEmitter<Todo>=new EventEmitter();
  
  constructor(){}

  onSubmit(){
    if (!this.title) {
      
      return; // Do not proceed if title is empty
    }
    const todo={
      sno:8,
      title: this.title,
      desc: this.desc,
      active: true,
    }
    this.todoAdd.emit(todo);
    this.title = '';
    this.desc = '';
  }
}
