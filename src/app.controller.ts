import {
  Controller,
  Get,
  Post,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { AppService } from './app.service';
import { FileInterceptor } from '@nestjs/platform-express';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post('uploadss')
  @UseInterceptors(FileInterceptor('image'))
  uploadFile(@UploadedFile() file) {
    console.log(file);
    //return of({ imagePath: file.path });
  }
}
