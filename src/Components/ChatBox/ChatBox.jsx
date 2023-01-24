/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import "./ChatBox.css"
import ChatBoxItem from './ChatBoxItem'

const ChatBox = () => {

    const [showChatBox, setShowChatBox] = useState(true)

    const handleChatBox = () => {
        setShowChatBox(!showChatBox)
    }

    return (
        <div className="chat_box" style={{ height: showChatBox == false ? "auto" : 500 }}>
            <div className="chat_box_header"  onClick={handleChatBox}>
                Chat Box
            </div>

            <div style={{display: showChatBox ? "block" : "none"}}>
            <ChatBoxItem/>
            <ChatBoxItem/>
            <ChatBoxItem/>
            </div>
        </div>
    )
}

export default ChatBox