import { Routes } from '@angular/router';
import { TodosComponent } from './MyComponents/todos/todos.component';
import { AboutComponent } from './MyComponents/about/about.component';
import { AddTodoComponent } from './MyComponents/add-todo/add-todo.component';

export const routes: Routes = [
    { path: '',component: TodosComponent},
    { path: 'about',component: AboutComponent},
];
