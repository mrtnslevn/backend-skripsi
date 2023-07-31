// import { InjectRepository } from '@nestjs/typeorm';
// import { Upload } from './entities/upload.entity';
// import { Repository } from 'typeorm';
import {
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Res,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { UploadService } from './upload.service';
import { FileInterceptor } from '@nestjs/platform-express';
//import { Upload } from './entities/upload.entity';
import { diskStorage } from 'multer';
import { of } from 'rxjs';
import { Response } from 'express';

// @Controller()
// export class AppController {
//   constructor(private readonly appService: AppService) {}

//   @Get()
//   getHello(): string {
//     return this.appService.getHello();
//   }
// }
// filename: (req, file, cb) => {
//       const fileName: string =
//         path.parse(file.originalname).name.replace(/\s/g, '') + uuid4;
//
//       cb(null, `${fileName}${extension}`);
//     },
export const storage = {
  storage: diskStorage({
    destination: './uploads',
    filename: function (req, file, cb) {
      let fileExt = '';
      if (file.mimetype.indexOf('jpeg') > -1) {
        fileExt = 'jpg';
      } else if (file.mimetype.indexOf('png') > -1) {
        fileExt = 'png';
      }
      const originalName = file.originalname.split('.')[0];
      // const fileName: string =
      //   path.parse(file.originalname).name.replace(/\s/g, '') + uuid4;
      // const extension = path.parse(file.originalname).ext;
      const uniquesuffix = new Date() + '-' + Math.round(Math.random() * 1e9);
      cb(null, originalName + '-' + uniquesuffix + '.' + fileExt);
    },
  }),
};
@Controller('upload')
export class UploadController {
  constructor(private readonly uploadService: UploadService) {}

  //   @Post()
  //   @UseInterceptors(FileInterceptor('upload'))
  //   uploadFile(@UploadedFile() upload: Upload) {
  //     return this.uploadService.createUpload(upload);
  //   }

  //   @Post()
  //   @UseInterceptors(
  //     FileInterceptor('file', {
  //       storage: diskStorage({
  //         destination: './uploads',
  //         filename: (req, file, cb) => {
  //           const filename: string = path
  //             .parse(file.originalname)
  //             .name.replace(/\s/g, '');
  //           const extension: string = path.parse(file.originalname).ext;

  //           cb(null, `${filename}${extension}`);
  //         },
  //       }),
  //     }),
  //   )
  //   uploadFile(@UploadedFile() file): Observable<object> {
  //     return of({ imagePath: file.path });
  //   }

  @Post()
  @UseInterceptors(FileInterceptor('image', storage))
  uploadFile(@UploadedFile() file) {
    // return of({ file: file });
    //return of({ imagePath: file.path });
    // return this.uploadService.createUpload({
    //   name: file.filename,
    //   dateCreated: Date.now(),
    // });
    //return of({ path:  });
    const date = new Date();
    return this.uploadService.createUpload({
      name: file.filename,
      dateCreated: date,
      dateUpdated: undefined,
      id: 0,
    });
  }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.userService.findOne(+id);
  // }

  @Get(':imageId')
  async getOneBy(@Param('imageId') imageId: string, @Res() res: Response) {
    // const search = this.uploadService.getUpload(+id);
    // return of({ data: d, search });
    try {
      const getImage = this.uploadService.getUpload(+imageId);
      console.log((await getImage).name);
      res.send(getImage);
    } catch (err) {
      console.log(err);
      res.status(400).send({ error: 'image not found' });
    }
  }

  @Get()
  getUpload() {
    return this.uploadService.getUploads();
  }

  @Delete(':id')
  deleteUpload(@Param('id') id: string) {
    this.uploadService.deleteUpload(+id);
    return of({ delete: 'sucessful ' });
  }

  //   async createUpload(upload: Upload): Promise<Upload> {
  //     return this.UploadRepository.save(upload);
  //   }

  //   async getUpload(id: number): Promise<Upload> {
  //     return this.UploadRepository.findOneBy({ id });
  //   }

  //   async deleteUpload(id: number): Promise<void> {
  //     await this.UploadRepository.delete(id);
  //   }
}
