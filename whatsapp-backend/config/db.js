import mongoose from "mongoose";
const uri = "mongodb+srv://miyannishar786:123@cluster0.xvigefs.mongodb.net/";

const connectToMongo = async ()=>{
    const res = await mongoose.connect(uri)
    if(res){
        console.log("Connected successfully to the database")
    }
}

export default connectToMongo