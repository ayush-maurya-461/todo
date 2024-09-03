import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TodosForm } from "./components/todos-form/todos-form.component"
import { TodosList } from './components/todos-list/todos-list.component';
import { FormsModule } from '@angular/forms';
import { TodosService } from './services/todos.service';

@NgModule({
  declarations: [
    AppComponent,
    TodosList,
    TodosForm
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  // providers: [
  //   TodosService
  // ],
  bootstrap: [AppComponent]
})
export class AppModule { }
