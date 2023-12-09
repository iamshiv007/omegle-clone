import React, { useState } from 'react'
import { useChat } from '../../contextApi/ChatContext';
import { socket } from '../../Socket';

const MessageInput = () => {
    const { userId, isSearching, setIsSearching, receiver, setReceiver, setMessages, isSending, setIsSending, message, setMessage, setIsTyping } = useChat()

    const newChat = () => {
        setIsSearching(true)
        setMessages([])
        socket.emit("pairing-user", userId, (error) => {
            if (error) {
                return alert(error);
            }
        })
        return () => {
            socket.off("pairing-user");
        };
    }

    const sendMessage = () => {
        if (message === "") return
        setIsSending(true)
        socket.emit("send-message", receiver, message, () => {
            setMessage("")
        })
        setMessages((prev) => [...prev, { you: message }])
        setIsSending(false)
    }

    const disconnectChat = () => {
        socket.emit("chat-close", receiver, () => {
            setReceiver("")
            setIsTyping(false)
            setMessage("")
        })
    }

    const handleKeyPress = (e) => {
        if (e.key === "Enter") {
            sendMessage()
        }
    }

    const typingHandle = (e) => {
        if (e.target.value !== "") {
            socket.emit("typing", receiver)
        } else {
            socket.emit("typing stop", receiver)
        }
    }

    return (
        <div className='messageInputWrapper' style={{ display: 'flex', gap: "5px" }}>
            {receiver ?
                <button className="stopBtn" style={{ fontSize: "20px", fontWeight: "500", minWidth: "fit-content", width: "7%", padding: "16px", borderRadius: "2px", cursor: "pointer" }} onClick={disconnectChat}>
                    Stop
                </button> :
                <button className="newBtn" style={{ fontSize: "20px", fontWeight: "500", minWidth: "fit-content", width: "7%", padding: "16px", border: "1px solid #ECE8E8", borderRadius: "2px" }} onClick={newChat} disabled={isSearching}>
                    New
                </button>
            }
            <input type='text' placeholder='Type  your message...' className='inputBox' style={{ fontSize: "18px", padding: "16px", width: "80%", borderRadius: "2px" }} onChange={(e) => {
                setMessage(e.target.value)
                typingHandle(e)
            }} value={message} onKeyDown={(e) => handleKeyPress(e)} disabled={!receiver || isSending} />
            <button className='sendBtn' style={{ fontSize: '20px', width: "7%", padding: "16px", border: "1px solid #b3aeae", borderRadius: "2px" }} onClick={sendMessage}
                disabled={!receiver || isSending}>
                Send
            </button>
        </div>
    )
}

export default MessageInput