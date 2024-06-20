import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Todo } from '../../Todo';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-todo-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './todo-item.component.html',
  styleUrl: './todo-item.component.css'
})
export class TodoItemComponent {
  @Input() cptodo!:Todo;
  @Input() i!:number;
  @Output() todoDelete: EventEmitter<Todo>=new EventEmitter();
  @Output() todoCheckbox: EventEmitter<Todo>=new EventEmitter();

  onClick(todo:Todo ){
    this.todoDelete .emit(todo);
    console.log("haha")
  }
  onCheckboxClick(todo:Todo){
    this.todoCheckbox .emit(todo);
  }
}
