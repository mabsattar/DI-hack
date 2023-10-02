// pages/chat.js
import React from "react";
import ChatApp from '../components/ChatApp';



function Chat() {
  return (
    <div>
      <h1 class="text-black text-lg">Chats</h1>
      <ChatApp /> {/* Render the Chat component */}
    </div>
  );
}

export default Chat;