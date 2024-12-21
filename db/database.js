// pass : wCLhugy9MtwaIkkL
// username : parvezmahmudaa100
// mongoURI : mongodb+srv://parvezmahmudaa100:wCLhugy9MtwaIkkL@cluster0.xador.mongodb.net/

import mongoose from "mongoose";


const connectDB = async ()=>{
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log('MongoDB Connected : ');
    } catch (error) {
        console.log(error)
    }
}

export default connectDB;