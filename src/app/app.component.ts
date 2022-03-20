import { Component, ElementRef, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { TodoService } from './todo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  @ViewChild('taskInputRef') taskInputRef!: ElementRef<HTMLInputElement>;

  constructor(public todoService: TodoService) {}

  onSubmit(form: NgForm): void {
    if (form.invalid) {
      return;
    }

    const { newTask } = form.value;
    this.todoService.add(newTask);
  }
}
