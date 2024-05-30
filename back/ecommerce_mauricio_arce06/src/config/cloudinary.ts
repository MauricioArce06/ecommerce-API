import { v2 } from 'cloudinary';
import * as dotenv from 'dotenv';
import {
  CLOUDINARY_API_KEY,
  CLOUDINARY_API_SECRET,
  CLOUDINARY_CLOUD_NAME,
} from './envCon';

export const CloudinaryConfig = {
  provide: 'cloudinary',
  useFactory: () => {
    return v2.config({
      api_key: CLOUDINARY_API_KEY,
      cloud_name: CLOUDINARY_CLOUD_NAME,
      api_secret: CLOUDINARY_API_SECRET,
    });
  },
};
