import * as fs from 'node:fs/promises';
import path from 'node:path';
import { error, success } from '../utils/Response';
import formidable from 'formidable';
import * as dotenv from 'dotenv';
dotenv.config();

const UploadController = {
  uploadMultipleFiles: async (req, res) => {
    const form = formidable({});
    form.parse(req, (err, fields, files) => {
      if (!files) {
        return error(res, null, 'No files uploaded');
      }
      const newURL = [];
      files.file?.forEach(async (file) => {
        const targetPath = path.join(global.__basedir, `../public/uploads/${file.size + '_' + file.originalFilename}`);
        newURL.push({
          url: `http://localhost:3001/file/${file.size + '_' + file.originalFilename}`,
          name: file.size + '_' + file.originalFilename,
        });
        await fs.copyFile(file.filepath, targetPath);
        await fs.unlink(file.filepath);
      });
      if (newURL.length > 0) {
        return success(res, newURL, 'Files uploaded successfully');
      } else {
        return error(res, null, 'Error to push file!');
      }
    });
  },
  dropFile: async (req, res) => {
    const { fileName } = req.body;
    if (!fileName) {
      return error(res, null, 'No file name provided');
    }
    try {
      const resData = await fs.unlink(path.join(global.__basedir, `../public/uploads/${fileName}`));
      return success(res, resData, 'File deleted successfully');
    } catch (err) {
      return error(res, err, 'File not found or error server!');
    }
  },
};

export default UploadController;
