const { Router } = require("express");
const { registerUser } = require("../controllers/user.controllers");

const userRouter = Router();

userRouter.route("/register").post(registerUser);

module.exports = { userRouter };
