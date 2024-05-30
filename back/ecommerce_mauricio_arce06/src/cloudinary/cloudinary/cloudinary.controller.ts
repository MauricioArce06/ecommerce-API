import {
  Body,
  Controller,
  FileTypeValidator,
  MaxFileSizeValidator,
  Param,
  ParseFilePipe,
  ParseUUIDPipe,
  Patch,
  Put,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { CloudinaryService } from './cloudinary.service';

@Controller('files')
export class CloudinaryController {
  constructor(private readonly CloudinaryService: CloudinaryService) {}

  @Patch('uploadImage/:id')
  @UseInterceptors(FileInterceptor('file'))
  upload(
    @UploadedFile(
      new ParseFilePipe({
        validators: [
          new MaxFileSizeValidator({
            maxSize: 200 * 1024,
            message: 'El archivo tiene q ser menos a 200KB',
          }),
          new FileTypeValidator({ fileType: /(jpg|jpeg|png|gif)$/i }),
        ],
      }),
    )
    file: Express.Multer.File,
    @Param('id', ParseUUIDPipe) id: string,
  ) {
    return this.CloudinaryService.uploadFile(file, id);
  }
}
