import { Component, EventEmitter, Output } from "@angular/core";
import { TODOS } from "src/app/interfaces/todos";
import { TodosService } from "src/app/services/todos.service";

@Component({
    selector:'todos-list',
    templateUrl:'./todos-list.component.html',
    styleUrls: ['./todos-list.component.css'],
    // providers:[TodosService]
})
export class TodosList{
    @Output() emitTodo : EventEmitter<TODOS> = new EventEmitter<TODOS>();

    todosList: TODOS[] = [];

    constructor(private todosService: TodosService){
        this.todosList = todosService.todos;
    }

    deleteTodo(id: string | number){
        this.todosService.delete(id);
        this.todosList = this.todosService.todos;
    }


    editTodo(todo: TODOS){
        this.emitTodo.emit(todo)
    }
}