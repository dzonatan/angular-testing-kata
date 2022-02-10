import { Injectable } from '@angular/core';
import { TodoItem } from './app.models';

export const TASK_COLLECTION_KEY = 'taskCollection';

@Injectable({ providedIn: 'root' })
export class TodoService {
  private _todoList: TodoItem[] | null = null;

  get todoList(): TodoItem[] {
    if (!this._todoList) {
      this.load();
    }
    return this._todoList!;
  }

  set todoList(value: TodoItem[]) {
    this._todoList = value;
  }

  add(title: string): void {
    const newTask: TodoItem = { title, done: false };
    this.todoList = [...this.todoList, newTask];
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
