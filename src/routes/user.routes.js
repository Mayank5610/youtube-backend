const { Router } = require("express");
const { registerUser } = require("../controllers/user.controllers");
const upload = require("../middlewares/multer.middlewares");

const userRouter = Router();

userRouter.route("/register").post(
  upload.fields([
    {
      name: "avatar",
      maxCount: 1,
    },
    {
      name: "coverImage",
      maxCount: 1,
    },
  ]),
  registerUser
);

module.exports = { userRouter };
