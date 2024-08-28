import { Injectable } from '@angular/core';
import { TODOS } from '../interfaces/todos';

@Injectable({
  providedIn: 'root',
})
export class TodosService {
  todos: TODOS[] = [
    { 
      id:1,
      taskName: 'Test',
      description: 'Dummy Description',
      deadline: '12/09/2023',
    },
    {
      id:2,
      taskName: 'Learn Angular',
      description: 'Learn Angular Shibangi',
      deadline: '12/09/2024',
    },
  ];

  addTodo(todo: TODOS): void {
    this.todos.push(todo);
  }

  delete(id: string | number){
    this.todos = this.todos.filter((todo)=>todo.id !== id)
  }

  edit(){
    
  }

}