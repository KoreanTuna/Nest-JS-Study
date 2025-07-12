import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PostsModule } from './posts/posts.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PostsModel } from './posts/entities/posts.entity';

@Module({
  imports: [
    PostsModule,
    TypeOrmModule.forRoot({
      type: 'postgres', // 데이터베이스 타입,
      host: '127.0.0.1',
      port: 5432, // 데이터베이스 포트
      username: 'postgres', // 데이터베이스 사용자명
      password: 'postgres', // 데이터베이스 비밀번호
      database: 'postgres', // 데이터베이스 이름
      entities: [PostsModel],
      synchronize: true, // 개발 환경에서만 사용, 프로덕션에서는 false로 설정
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
