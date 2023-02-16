import { S3Client } from "@aws-sdk/client-s3";
import multer from "multer";
import multerS3 from "multer-s3";

const s3 = new S3Client({
  region: process.env.AWS_region as string,
  credentials: {
    accessKeyId: process.env.AWS_id as string,
    secretAccessKey: process.env.AWS_secret as string,
  },
});

const uploadS3 = multer({
  storage: multerS3({
    s3: s3,
    bucket: "social-crombie",
    metadata: function (req, file, cb) {
      cb(null, { fieldName: file.fieldname });
    },
    key: function (req, file, cb) {
      const [ext] = file.originalname.split(".").slice(-1);
      const fieldname = new Date().getTime();
      cb(null, `${fieldname}.${ext}`);
    },
  }),
});

export default uploadS3;
