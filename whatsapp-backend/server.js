// importing
import express from "express";
import connectToMongo from "./config/db.js";
import router from "./routes.js";
import cors from "cors";
import Pusher from "pusher";
import mongoose from "mongoose";

// app config
const app = express();
const port = process.env.PORT || 9000;
app.use(cors());
app.use(express.json());

const db = mongoose.connection;
db.once("open", () => {
  console.log("DB Connected!");

  const msgCollection = db.collection("messagecontents");
  const changeStream = msgCollection.watch();

  changeStream.on("change", (change) => {
    console.log(change);

    if (change.operationType === "insert") {
      const messageDetails = change.fullDocument;
      pusher.trigger("messages", "inserted", {
        name: messageDetails.user,
        message: messageDetails.message,
      });
    } else {
      console.log("Error Triggering Pusher");
    }
  });
});

const pusher = new Pusher({
  appId: "1731130",
  key: "e17179d1fc72da69a2d5",
  secret: "2cca6b0a3d78db83a2a1",
  cluster: "us2",
  useTLS: true,
});



//middlewares

//database config
connectToMongo();

//?????

//api routes
app.use("/api/v1/", router);

//listen

app.listen(port, () => {
  console.log(`Listening to the port ${port}`);
});
