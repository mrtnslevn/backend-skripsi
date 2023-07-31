/// <reference types="multer" />
import { UploadService } from './upload.service';
import { Response } from 'express';
export declare const storage: {
    storage: import("multer").StorageEngine;
};
export declare class UploadController {
    private readonly uploadService;
    constructor(uploadService: UploadService);
    uploadFile(file: any): Promise<import("./entities/upload.entity").Upload>;
    getOneBy(imageId: string, res: Response): Promise<void>;
    getUpload(): Promise<import("./entities/upload.entity").Upload[]>;
    deleteUpload(id: string): import("rxjs").Observable<{
        delete: string;
    }>;
}
