/// <reference types="multer" />
import { CloudinaryService } from './cloudinary.service';
export declare class CloudinaryController {
    private readonly CloudinaryService;
    constructor(CloudinaryService: CloudinaryService);
    upload(file: Express.Multer.File, id: string): Promise<{
        message: string;
        updatedProduct: string | {
            message: string;
        };
    }>;
}
