import {
  HttpException,
  HttpStatus,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { GetAllParameters, TaskDto } from './task.dto';

@Injectable()
export class TaskService {
  private tasks: TaskDto[] = [];

  createTask(task: TaskDto) {
    this.tasks.push(task);
    console.log(this.tasks);
  }

  getTaskById(id: string): TaskDto {
    const foundTask = this.tasks.filter((task) => task.id === id);

    if (foundTask) {
      for (const task of foundTask) {
        return task;
      }
    }

    throw new NotFoundException(`Task with id ${id} not found!`);
  }

  getAllTasks(params: GetAllParameters): TaskDto[] {
    return this.tasks.filter((task) => {
      let match = true;

      if (params.title != undefined && !task.title.includes(params.title)) {
        match = false;
      }

      if (params.status != undefined && !task.status.includes(params.status)) {
        match = false;
      }

      return match;
    });
  }

  updateTask(task: TaskDto) {
    let taskIndex = this.tasks.findIndex((taskObj) => taskObj.id === task.id);

    if (taskIndex >= 0) {
      this.tasks[taskIndex] = task;

      return;
    }

    throw new HttpException(
      `Task with id ${task.id} not found!`,
      HttpStatus.BAD_REQUEST,
    );
  }

  deleteTask(id: string) {
    let taskIndex = this.tasks.findIndex((task) => task.id === id);

    if (taskIndex >= 0) {
      this.tasks.splice(taskIndex, 1);
      return;
    }

    throw new HttpException(
      `Task with id ${id} not found!`,
      HttpStatus.BAD_REQUEST,
    );
  }
}
