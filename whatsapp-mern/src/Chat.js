import React from "react";
import "./Chat.css";
import { Avatar, IconButton } from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import SearchIcon from "@mui/icons-material/Search";
import AttachFileIcon from "@mui/icons-material/AttachFile";
// import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions";
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';
import MicIcon from '@mui/icons-material/Mic';

function Chat() {
  return (
    <div className="chat">
      <div className="chat__header">
        <Avatar src="https://yt3.googleusercontent.com/ytc/AIf8zZSTZ037wgdJwUkc-Ho_MA4J_BBLUGFT7G2nA9ZVMA=s176-c-k-c0x00ffffff-no-rj" />

        <div className="chat__headerInfo">
          <h3>Room Name</h3>
          <p>Last Seen 3 hours ago</p>
        </div>

        <div className="sidebar__headerRight">
          <IconButton>
            <SearchIcon />
          </IconButton>

          <IconButton>
            <AttachFileIcon />
          </IconButton>

          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </div>
      </div>

      <div className="chat__body">
        <p className="chat__message">
          <span className="chat__name">Nishar</span>
          This is a message
          <span className="chat__timestamp">{new Date().toUTCString()}</span>
        </p>
        <p className="chat__message chat__receiver">
          <span className="chat__name">Nishar</span>
          This is a message
          <span className="chat__timestamp">{new Date().toUTCString()}</span>
        </p>
        <p className="chat__message">
          <span className="chat__name">Nishar</span>
          This is a message
          <span className="chat__timestamp">{new Date().toUTCString()}</span>
        </p>
      </div>

      <div className="chat__footer">
        <IconButton>
          <InsertEmoticonIcon />
        </IconButton>
        <form>
          <input placeholder="Type a message" type="text" />
          <button type="submit"> Send a message</button>
        </form>
          <MicIcon/>
      </div>
    </div>
  );
}

export default Chat;
