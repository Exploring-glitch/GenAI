import express from 'express'
const authRouter = express.Router()

authRouter.post("/signup", userSignup)
authRouter.post("/login", userLogin)
authRouter.post("/logout", userLogout)


export default authRouter;