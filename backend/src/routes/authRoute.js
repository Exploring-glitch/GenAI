import express from 'express'
import { userLoginController, userLogoutController, userSignupController } from '../controller/authController.js'
const authRouter = express.Router()

authRouter.post("/signup", userSignupController)
authRouter.post("/login", userLoginController)
authRouter.post("/logout", userLogoutController)


export default authRouter;                                                                              