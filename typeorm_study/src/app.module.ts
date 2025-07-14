import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModel } from './entities/user.entity';
import { StudentModel, TeacherModel } from './entities/person_entity';
import {
  AirplaneModel,
  BookModel,
  CarModel,
  ComputerModel,
  SingleBaseModel,
} from './entities/Inheritance.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([UserModel, StudentModel, TeacherModel]),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: '127.0.0.1',
      port: 5432,
      username: 'postgres',
      password: 'postgres',
      database: 'typeormstudy',
      entities: [
        UserModel,
        StudentModel,
        TeacherModel,
        BookModel,
        CarModel,
        SingleBaseModel,
        ComputerModel,
        AirplaneModel,
      ],
      synchronize: true,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
