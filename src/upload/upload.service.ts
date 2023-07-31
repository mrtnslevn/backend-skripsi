import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Upload } from './entities/upload.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UploadService {
  constructor(
    @InjectRepository(Upload)
    private readonly UploadRepository: Repository<Upload>,
  ) {}

  async getUploads(): Promise<Upload[]> {
    return this.UploadRepository.find();
  }

  async createUpload(upload: Upload): Promise<Upload> {
    return this.UploadRepository.save(upload);
  }

  async getUpload(id: number): Promise<Upload> {
    return this.UploadRepository.findOneBy({ id });
  }

  async deleteUpload(id: number): Promise<void> {
    await this.UploadRepository.delete(id);
  }
}
