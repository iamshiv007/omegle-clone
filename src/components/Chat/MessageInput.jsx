import React, { useEffect } from 'react'
import { useChat } from '../../contextApi/ChatContext';
import { socket } from '../../Socket';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const MessageInput = () => {
    const { userId, onlineUsers, isSearching, setIsSearching, receiver, setReceiver, setMessages, isSending, setIsSending, message, setMessage, setIsTyping } = useChat()

    const newChat = () => {
        setIsSearching(true)
        setMessages([])
        socket.emit("pairing-user", userId, (error) => {
            return
        })
        return () => {
            socket.off("pairing-user");
        };
    }

    const sendMessage = () => {
        if (isSending) return
        if (message === "") return
        setIsSending(true)
        socket.emit("send-message", receiver, message, () => {
            setMessage("")
        })
    }

    const disconnectChat = () => {
        if (receiver) {
            socket.emit("chat-close", receiver, () => {
                setReceiver("")
                setIsTyping(false)
                setMessage("")
            })
        } else {
            socket.emit("unpairing-user", userId, () => {
                setIsSearching(false)
            })
        }
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

    const navigate = useNavigate()

    useEffect(() => {
        if (userId && onlineUsers.find((user) => user.userId === userId)) {
            newChat()
        } else {
            navigate("/")
        }
    }, []);

    return (
        <InputWrapper className='messageInputWrapper'>
            {receiver || isSearching ?
                <Button className="stopBtn" onClick={disconnectChat}>
                    Stop
                </Button> :
                <Button className="newBtn" onClick={newChat} disabled={isSearching}>
                    New
                </Button>
            }
            <Input type='text' placeholder='Type  your message...' className='inputBox' onChange={(e) => {
                setMessage(e.target.value)
                typingHandle(e)
            }} value={message} onKeyDown={(e) => handleKeyPress(e)} disabled={!receiver} />
            <SendButton className='sendBtn' onClick={sendMessage}
                disabled={!receiver || isSending}>
                Send
            </SendButton>
        </InputWrapper>
    )
}

export default MessageInput

const InputWrapper = styled.div({
    display: 'flex',
    gap: "5px"
})

const Button = styled.button({
    fontSize: "20px",
    fontWeight: "500",
    minWidth: "fit-content",
    width: "7%",
    padding: "16px",
    border: "1px solid #CCC",
    borderRadius: "2px"
})

const Input = styled.input({
    fontSize: "18px",
    padding: "16px",
    width: "80%",
    borderRadius: "2px"
})

const SendButton = styled.button({
    fontSize: '20px',
    width: "7%",
    padding: "16px",
    border: "1px solid #b3aeae",
    borderRadius: "2px"
})