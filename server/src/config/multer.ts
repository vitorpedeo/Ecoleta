import multer from 'multer';
import path from 'path';
import crypto from 'crypto';

const storage = multer.diskStorage({
  destination: path.resolve(__dirname, '..', '..', 'uploads', 'profile'),
  filename: (req, file, cb) => {
    const hash = crypto.randomBytes(6).toString('hex');

    const fileName = `${hash}-${file.originalname}`;

    cb(null, fileName);
  },
});

const fileFilter = (req: any, file: any, cb: any) => {
  const allowedTypes = ['image/png', 'image/jpg', 'image/jpeg'];

  if (allowedTypes.includes(file.mimetype)) {
    cb(null, true);
  } else {
    cb(null, false);
  }
};

const upload = multer({ storage, fileFilter });

export default upload;
