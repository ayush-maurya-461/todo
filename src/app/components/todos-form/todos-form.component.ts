import { Component, Input } from "@angular/core";
import { NgForm } from "@angular/forms";
import { TODOS } from "src/app/interfaces/todos";
import { TodosService } from "src/app/services/todos.service";

@Component({
    selector:'todos-form',
    templateUrl:'./todos-form.component.html',
    styleUrls: ['./todos-form.component.css']
})
export class TodosForm{

    @Input() data!: TODOS;

    constructor(private todosService: TodosService){}

    saveForm(form: NgForm){
        const data: TODOS = {
            id: new Date().getTime(),
            taskName: form.value.taskName,
            description: form.value.description,
            deadline: form.value.deadline
        }

        this.todosService.addTodo(data)
        form.reset();
    }

    clearForm(form: NgForm){
        form.reset();
    }

}