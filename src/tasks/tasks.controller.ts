import { TaskService } from './shared/task.service';
import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { Task } from './shared/task';

@Controller('tasks')
export class TasksController {

    constructor(private TaskService: TaskService) {}

    @Get() //decorator do NestJS
    async getAll() : Promise<Task[]>{
        return this.TaskService.getAll();
    }

    @Get(':id') 
    async getById(@Param('id') id:string) : Promise<Task>{
        return this.TaskService.getById(id);
    }

    @Post()
    async create(@Body() task: Task): Promise<Task>{
        return this.TaskService.create(task);
    }

    @Put(':id')
    async update(@Param('id') id: string, @Body() task: Task): Promise<Task>{
        return this.TaskService.update(id ,task); 
    }

    @Delete(':id')
    async delete(@Param('id') id: string){
        this.TaskService.delete(id);
    }
}
