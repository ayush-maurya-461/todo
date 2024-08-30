import { Component } from '@angular/core';
import { TODOS } from './interfaces/todos';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'todos';
  todo: TODOS = {
    id: '',
    taskName: '',
    description: '',
    deadline: new Date().toDateString(),
  };

  passToForm(data: TODOS){
    this.todo = {...data};
  }

}
