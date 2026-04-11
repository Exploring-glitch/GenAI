
export const userSignupController = async (req, res) => {
    try {
        const { username, email, password } = req.body

        if (!username || !email ||!password) {
            res.status(400).json({
                message: "Please provide your details to continue"
            })
        }

        const userExist = await findUserByEmail(email)
        if (userExist) {
            res.status(409).json({
                message: "User already exists with this email address!"
            })
        }


    }
    catch (err) {
        console.log("Error signing up. Error: ", err)
    }
}

export const userLoginController = async (req, res) => {
    try {

    }
    catch (err) {
        console.log("Error signing up. Error: ", err)
    }
}

export const userLogoutController = async (req, res) => {
    try {

    }
    catch (err) {
        console.log("Error signing up. Error: ", err)
    }
}