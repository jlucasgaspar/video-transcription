import path from 'path';
import crypto from 'crypto';
import { env } from './env';
import { upload } from '../protocols/IMulter';

const tempFolder = path.resolve(__dirname, '..', '..', '..', 'tmp');

const uploadConfig =  {
    driver: env.STORAGE_DRIVER,
    tempFolder: tempFolder,
    multer: {
        storage: upload.diskStorage({
            destination: tempFolder,
            filename: (request, file, callback) => {
                const fileHash = crypto.randomBytes(10).toString('hex');
                const fileName = `${fileHash} - ${file.originalname}`;
    
                return callback(null, fileName);
            }
        })
    },

    config: {
        disk: {},
        aws: {
            bucket: 'aws-bucket-name'
        }
    }
}

export { uploadConfig };