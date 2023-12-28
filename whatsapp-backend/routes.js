import express from "express";
import MessageController from "./controllers/messageController.js";

const router = express.Router();

router.get("/", (req, res) => {
  res.send("All setup working!!");
});
router.post("/messages/new", MessageController.messageCreator);
router.get("/messages/sync", MessageController.messageFinder);

export default router;
