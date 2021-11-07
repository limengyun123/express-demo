var express = require("express");
var fs = require("fs");
var multer = require("multer");
var router = express.Router();

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.send("respond with a resource");
});

router.post(
  "/upload",
  multer({ dest: "tmp/" }).single("file"),
  function (req, res, next) {
    console.log("/upload", req.file);
    res.send("上传成功！");
  }
);

module.exports = router;
