import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './user/user.module';
import { User } from './user/entities/user.entity';
import { MulterModule } from '@nestjs/platform-express';
import { UploadModule } from './upload/upload.module';
import { Upload } from './upload/entities/upload.entity';
import { mixinJsonModule } from './mixin-json/mixin-json.module';
import { universitiesModule } from './universities/universities.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      username: 'root',
      password: null,
      database: 'nestjsTesting',
      entities: [User, Upload],
      synchronize: false,
    }),
    universitiesModule,
    UserModule,
    UploadModule,
    mixinJsonModule,
    MulterModule.register({
      dest: './uploads',
    }),
    // ServeStaticModule.forRoot({
    //   rootPath: join(__dirname, '..', 'files'),
    // }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
