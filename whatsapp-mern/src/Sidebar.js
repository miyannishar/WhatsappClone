import React from "react";
import "./Sidebar.css";
import Chat from "./Chat";
import ChatIcon from "@mui/icons-material/Chat";
import RefreshIcon from "@mui/icons-material/Refresh";
import { Avatar, IconButton } from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { SearchOutlined } from '@mui/icons-material';
import SidebarChat from "./SidebarChat"

function Sidebar() {
  return (
    <div className="sidebar">

      <div className="sidebar__header">
        <Avatar src="https://yt3.googleusercontent.com/ytc/AIf8zZSTZ037wgdJwUkc-Ho_MA4J_BBLUGFT7G2nA9ZVMA=s176-c-k-c0x00ffffff-no-rj" />
        <div className="sidebar__headerRight">
          <IconButton>
            <RefreshIcon />
          </IconButton>

          <IconButton>
            <ChatIcon />
          </IconButton>

          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </div>
      </div>

      <div className="sidebar__search">
        <div className="sidebar__searchContainer">
            <SearchOutlined />
            <input placeholder="Search for any text" type="text" />
        </div>
      </div>

      <div className="sidebar__chats">
        <SidebarChat />
        <SidebarChat />
        <SidebarChat />
      </div>


    </div>
  );
}

export default Sidebar;
