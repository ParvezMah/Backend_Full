import { User } from "../models/user";

async (req, res)=> {
    try {
        const {fullname, email, password}=req.body;
        if(!fullname || !email || !password){
            return res.status(403).json({
                success: false,
                message:"All fields are required.",
            })
        }

        // finding the user is existed or not
        const user = await User.findOne(email);
        if(user){
            return res.status(403).json({
                success: false,
                message:"this email id already registered.",
            })
        }

        await User.create({
            fullname,
            email,
            password
        })

        return res.status(201).json({
            success: true,
            message: "Account has created successfully",
        })
        
    } catch (error) {
        
    }
}