import express from "express";
import MessageController from "./controllers/messageController.js";

const router = express.Router();

router.get("/", (req,res)=>{
    res.send("All setup working!!")
})
router.post("/messages/new", MessageController);

export default router;