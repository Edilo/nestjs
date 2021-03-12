import { Module } from '@nestjs/common';
import { TaskController } from './modules/controllers/task.controller';
import { TaskService } from './modules/services/task.service';

@Module({
  imports: [],
  controllers: [TaskController],
  providers: [TaskService],
})
export class AppModule {}
