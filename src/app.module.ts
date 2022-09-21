import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { configService } from './config/config.service';
import { User } from './model/user.entity';
import { UsersModule } from './users.dto.ts/users.module';
@Module({
  imports: [
    TypeOrmModule.forRoot(
      // configService.getTypeOrmConfig()
      {
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: '123',
      database: 'b8StudentListDashboard',
      entities: [User],
      synchronize: true,
      // entities: [User],
    }
    ),
    UsersModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
