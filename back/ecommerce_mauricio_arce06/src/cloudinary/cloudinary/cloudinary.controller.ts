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
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { CloudinaryService } from './cloudinary.service';
import { headerAuthorization } from 'src/auth/guard/AuthGuard';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Upload Files')
@Controller('files')
export class CloudinaryController {
  constructor(private readonly CloudinaryService: CloudinaryService) {}

  @Patch('uploadImage/:id')
  @UseGuards(headerAuthorization)
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
