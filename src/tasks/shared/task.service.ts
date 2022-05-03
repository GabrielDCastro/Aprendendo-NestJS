/* eslint-disable @typescript-eslint/no-empty-function */
import { Injectable } from '@nestjs/common';
import { Task } from './task';

@Injectable()
export class TaskService {
  
  tasks: Task[] = [
    {id:1, description: 'teste', completed: false}
  ]

  getAll() {
    return this.tasks;
  }

  getById(id: number){
    const task = this.tasks.find((value) => value.id == id);
    return task;
  }

  create(task: Task){
    let lastId = 0;
    if (this.tasks.length > 0){
      lastId = this.tasks[this.tasks.length - 1].id;
    }
    task.id = lastId + 1;
    this.tasks.push(task);

    return task;
  }

  update(task: Task){
    const TaskArray = this.getById(task.id);
    if(TaskArray){
      TaskArray.description = task.description;
      TaskArray.completed = task.completed;
    }
    return TaskArray;
  }

  delete(id: number){
    const index = this.tasks.findIndex((value) => value.id == id);
    this.tasks.splice(index, 1);
  }
}
