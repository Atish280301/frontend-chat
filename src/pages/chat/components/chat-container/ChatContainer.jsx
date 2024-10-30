//frontend/src/pages/chat/components/chat-container/ChatContainer.jsx
import React from "react";
import { ChatHeader } from "./components/chat-header/ChatHeader";
import { MessageBar } from "./components/message-bar/MessageBar";
import { MessageContainer } from "./components/message-container/MessageContainer";
export const ChatContainer = () => {
    return (
        <>
            <div className="fixed top-0 h-[100vh] w-[100vw] bg-[#1c1d25] flex flex-col md:static md:flex-1">
                <ChatHeader />
                <MessageContainer />
                <MessageBar />
            </div>
        </>
    );
}