import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { TaskDto, GetAllParameters } from './task.dto';
import { TaskService } from './task.service';

@Controller('task')
export class TaskController {
  constructor(private readonly taskService: TaskService) {}

  @Post()
  createTask(@Body() task: TaskDto) {
    this.taskService.createTask(task);
  }

  @Get('/:id')
  getTaskById(@Param('id') id: string) {
    return this.taskService.getTaskById(id);
  }

  @Get()
  getAllTasks(@Query() params: GetAllParameters): TaskDto[] {
    return this.taskService.getAllTasks(params);
  }

  @Put()
  updateTask(@Body() task: TaskDto) {
    this.taskService.updateTask(task);
  }

  @Delete('/:id')
  deleteTask(@Param('id') id: string) {
    return this.taskService.deleteTask(id);
  }
}
