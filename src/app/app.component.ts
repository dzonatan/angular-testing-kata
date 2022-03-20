import { Component, ElementRef, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { TodoItem } from './app.models';

export const TASK_COLLECTION_KEY = 'taskCollection';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  todoList: TodoItem[] = [];
  newTask = '';

  @ViewChild('newTaskInputRef') newTaskInputRef!: ElementRef<HTMLInputElement>;

  ngOnInit(): void {
    this.load();
  }

  add(form: NgForm): void {
    if (form.invalid) {
      return;
    }

    const newTask: TodoItem = { title: this.newTask, done: false };
    this.todoList = [...this.todoList, newTask];
    this.newTask = '';
    this.newTaskInputRef.nativeElement.focus();
    this.save();
  }

  remove(index: number): void {
    this.todoList = this.todoList.filter((_, i) => i !== index);
    this.save();
  }

  toggle(index: number, status: boolean): void {
    const todoItem = this.todoList.find((_, i) => i === index);
    todoItem!.done = status;
    this.save();
  }

  private load(): void {
    this.todoList = JSON.parse(
      localStorage.getItem(TASK_COLLECTION_KEY) ?? '[]'
    );
  }

  private save(): void {
    localStorage.setItem(TASK_COLLECTION_KEY, JSON.stringify(this.todoList));
  }
}
