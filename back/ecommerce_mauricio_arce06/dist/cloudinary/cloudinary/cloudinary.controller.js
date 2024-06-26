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
exports.CloudinaryController = void 0;
const openapi = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
const platform_express_1 = require("@nestjs/platform-express");
const cloudinary_service_1 = require("./cloudinary.service");
const AuthGuard_1 = require("../../auth/guard/AuthGuard");
const swagger_1 = require("@nestjs/swagger");
const fileUploadDto_1 = require("./fileUploadDto");
let CloudinaryController = class CloudinaryController {
    constructor(CloudinaryService) {
        this.CloudinaryService = CloudinaryService;
    }
    upload(file, id) {
        return this.CloudinaryService.uploadFile(file, id);
    }
};
exports.CloudinaryController = CloudinaryController;
__decorate([
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.Patch)('uploadImage/:id'),
    (0, common_1.UseGuards)(AuthGuard_1.headerAuthorization),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('file')),
    (0, swagger_1.ApiConsumes)('multipart/form-data'),
    (0, swagger_1.ApiBody)({
        description: 'Imagen a subir(solo formatos .jpg, .jpeg, .png, .gif)',
        type: fileUploadDto_1.fileUploadDto,
    }),
    openapi.ApiResponse({ status: 200 }),
    __param(0, (0, common_1.UploadedFile)(new common_1.ParseFilePipe({
        validators: [
            new common_1.FileTypeValidator({ fileType: /(jpg|jpeg|png|gif)$/i }),
            new common_1.MaxFileSizeValidator({
                maxSize: 200 * 1024,
                message: 'El archivo tiene q ser menos a 200KB',
            }),
        ],
    }))),
    __param(1, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", void 0)
], CloudinaryController.prototype, "upload", null);
exports.CloudinaryController = CloudinaryController = __decorate([
    (0, swagger_1.ApiTags)('Upload Files'),
    (0, common_1.Controller)('files'),
    __metadata("design:paramtypes", [cloudinary_service_1.CloudinaryService])
], CloudinaryController);
//# sourceMappingURL=cloudinary.controller.js.map