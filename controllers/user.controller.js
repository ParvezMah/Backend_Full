import { User } from "../models/user.js";
import bcrypt from "bcrypt";

export const register = async (req, res)=> {
    try {
        const {fullname, email, password}=req.body;
        if(!fullname || !email || !password){
            return res.status(403).json({
                success: false,
                message:"All fields are required.",
            })
        }

        // finding the user is existed or not
        const user = await User.findOne({email});
        if(user){
            return res.status(403).json({
                success: false,
                message:"this email id already registered.",
            })
        }
        const hashedPassword = await bcrypt.hash(password, 10)

        await User.create({
            fullname,
            email,
            password: hashedPassword
        })

        return res.status(201).json({
            success: true,
            message: "Account has created successfully",
        })
        
    } catch (error) {
        console.log("Error is Register Logic : ", error)
    }
}


export const login = async (req, res)=>{
    try {
        const {email, password} = req.body;
        if(!email || !password){
            return res.status(403).json({
                success: false,
                message: "All fields are required."
            })
        }

        // finding the user is existed or not
        const user = await User.findOne({email});
        if(!user){
            return res.status(403).json({
                success: false,
                message:"Incorrect email.",
            })
        }

        const isPasswordMatch = await bcrypt.compare(password, user.password);
        if(!isPasswordMatch){
            return res.status(403).json({
                success: false,
                message:"Incorrect password.",
            })
        }

        return res.status(201).json({
            success: true,
            message: `Welcome Back ${user.fullname}`
        })
    } catch (error) {
        console.log("Error is Login Logic : ", error)
    }
}
