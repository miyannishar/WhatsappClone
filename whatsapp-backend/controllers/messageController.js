import Messages from "../models/dbMessages.js";

class MessageController {
  static messageCreator = async (req, res) => {
    const dbMessage = req.body;

    try {
      const createMessage = await Messages.create(dbMessage);
      return res.status(201).json(createMessage);
    } catch (error) {
      return res.status(400).json({ message: error.message });
    }
  };

  static messageFinder = async (req, res) => {
    try {
      const allMessages = await Messages.find();
      return res.status(200).json(allMessages);
    } catch (error) {
      return res.status(400).json({ message: error.message });
    }
  };
}

export default MessageController;
