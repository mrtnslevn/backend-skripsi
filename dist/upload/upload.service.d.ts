import { Upload } from './entities/upload.entity';
import { Repository } from 'typeorm';
export declare class UploadService {
    private readonly UploadRepository;
    constructor(UploadRepository: Repository<Upload>);
    getUploads(): Promise<Upload[]>;
    createUpload(upload: Upload): Promise<Upload>;
    getUpload(id: number): Promise<Upload>;
    deleteUpload(id: number): Promise<void>;
}
