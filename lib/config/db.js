import mongoose from "mongoose";

export const ConnectDB = async () =>{
    await mongoose.connect('mongodb+srv://kaushik08:karenkay08.@cluster0.aba8hyp.mongodb.net/blog-app');
    console.log("DB Connected");
}