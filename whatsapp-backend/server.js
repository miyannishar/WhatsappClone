// importing
import express from 'express'
import connectToMongo from './config/db.js'
import router from './routes.js'
import cors from "cors"

// app config
const app = express()
const port = process.env.PORT || 9000
app.use(cors())
app.use(express.json());


//middlewares


//database config
connectToMongo();


//?????


//api routes
app.use("/api/v1/", router);


//listen

app.listen(port, ()=>{
    console.log(`Listening to the port ${port}`)
});