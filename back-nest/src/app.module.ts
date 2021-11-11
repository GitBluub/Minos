import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { User } from './user/models/user.model';
import { UserController } from './user/user.controller';
import { UserModule } from './user/user.module';
import { DatabaseModule } from './database/database.module';
import { DataType } from 'sequelize-typescript';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    ConfigModule.forRoot({isGlobal: true}),
    DatabaseModule,
    UserModule,
    AuthModule,
  ],
  controllers: [AppController, UserController],
  providers: [AppService],
  exports: [DatabaseModule, UserModule],
})
export class AppModule {}
