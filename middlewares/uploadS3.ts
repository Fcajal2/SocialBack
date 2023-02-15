import { S3Client } from "@aws-sdk/client-s3";
import multer from "multer";
import multerS3 from "multer-s3";

const s3 = new S3Client({
  region: "sa-east-1",
  credentials: {
    accessKeyId: "AKIAUEWSILHSNJ7CB24X",
    secretAccessKey: "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",
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
