const express = require("express");
const router = new express.Router();
const controller = require("../controllers/usersControllers");
const upload = require("../multer/storageConfig")

// routes
router.post("/user/register",upload.single("user"),controller.userpost);
router.get("/user/details",controller.userget);
router.get("/user/:id",controller.singleuserget);
router.put("/user/edit/:id", upload.single("user"),controller.useredit);
router.delete("/user/edit/:id", controller.userdelete);
router.put("/user/status/:id",controller.userstatus);
router.get("/userexports", controller.userexports)

module.exports =  router ;