import Messages from '../models/dbMessages.js'

const MessageController = async (req, res)=>{
    const dbMessage = req.body;

    Messages.create(dbMessage).then((err, data)=>{
        if(err){ 
            res.status(500).send(err);
        }
        else{ 
            res.status(201).send(data)
        }
    })
}

export default MessageController;