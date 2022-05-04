import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TasksModule } from './tasks/tasks.module';

@Module({
  imports: [
    TasksModule,
    MongooseModule.forRoot('mongodb+srv://user:password@cluster0.1dodq.mongodb.net/test?retryWrites=true&w=majority')
],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
