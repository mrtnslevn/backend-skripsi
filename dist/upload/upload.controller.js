"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UploadController = exports.storage = void 0;
const common_1 = require("@nestjs/common");
const upload_service_1 = require("./upload.service");
const platform_express_1 = require("@nestjs/platform-express");
const multer_1 = require("multer");
const rxjs_1 = require("rxjs");
exports.storage = {
    storage: (0, multer_1.diskStorage)({
        destination: './uploads',
        filename: function (req, file, cb) {
            let fileExt = '';
            if (file.mimetype.indexOf('jpeg') > -1) {
                fileExt = 'jpg';
            }
            else if (file.mimetype.indexOf('png') > -1) {
                fileExt = 'png';
            }
            const originalName = file.originalname.split('.')[0];
            const uniquesuffix = new Date() + '-' + Math.round(Math.random() * 1e9);
            cb(null, originalName + '-' + uniquesuffix + '.' + fileExt);
        },
    }),
};
let UploadController = class UploadController {
    constructor(uploadService) {
        this.uploadService = uploadService;
    }
    uploadFile(file) {
        const date = new Date();
        return this.uploadService.createUpload({
            name: file.filename,
            dateCreated: date,
            dateUpdated: undefined,
            id: 0,
        });
    }
    async getOneBy(imageId, res) {
        try {
            const getImage = this.uploadService.getUpload(+imageId);
            console.log((await getImage).name);
            res.send(getImage);
        }
        catch (err) {
            console.log(err);
            res.status(400).send({ error: 'image not found' });
        }
    }
    getUpload() {
        return this.uploadService.getUploads();
    }
    deleteUpload(id) {
        this.uploadService.deleteUpload(+id);
        return (0, rxjs_1.of)({ delete: 'sucessful ' });
    }
};
__decorate([
    (0, common_1.Post)(),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('image', exports.storage)),
    __param(0, (0, common_1.UploadedFile)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], UploadController.prototype, "uploadFile", null);
__decorate([
    (0, common_1.Get)(':imageId'),
    __param(0, (0, common_1.Param)('imageId')),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], UploadController.prototype, "getOneBy", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], UploadController.prototype, "getUpload", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], UploadController.prototype, "deleteUpload", null);
UploadController = __decorate([
    (0, common_1.Controller)('upload'),
    __metadata("design:paramtypes", [upload_service_1.UploadService])
], UploadController);
exports.UploadController = UploadController;
//# sourceMappingURL=upload.controller.js.map