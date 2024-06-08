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
import { ApiBearerAuth, ApiTags, ApiBody, ApiConsumes } from '@nestjs/swagger';
import { fileUploadDto } from './fileUploadDto';

@ApiTags('Upload Files')
@Controller('files')
export class CloudinaryController {
  constructor(private readonly CloudinaryService: CloudinaryService) {}

  @ApiBearerAuth()
  @Patch('uploadImage/:id')
  @UseGuards(headerAuthorization)
  @UseInterceptors(FileInterceptor('file'))
  @ApiConsumes('multipart/form-data')
  @ApiBody({
    description: 'Imagen a subir(solo formatos .jpg, .jpeg, .png, .gif)',
    type: fileUploadDto,
  })
  upload(
    @UploadedFile(
      new ParseFilePipe({
        validators: [
          new FileTypeValidator({ fileType: /(jpg|jpeg|png|gif)$/i }),
          new MaxFileSizeValidator({
            maxSize: 200 * 1024,
            message: 'El archivo tiene q ser menos a 200KB',
          }),
        ],
      }),
    )
    file: Express.Multer.File,
    @Param('id', ParseUUIDPipe) id: string,
  ) {
    return this.CloudinaryService.uploadFile(file, id);
  }
}
