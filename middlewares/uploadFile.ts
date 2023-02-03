import multer from "multer";

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "public");
  },
  filename: function (req, file, cb) {
    const [ext] = file.originalname.split(".").slice(-1);
    const fieldname = new Date().getTime();
    cb(null, `${fieldname}.${ext}`);
  },
});

const uploadFile = multer({ storage: storage });

export default uploadFile;
