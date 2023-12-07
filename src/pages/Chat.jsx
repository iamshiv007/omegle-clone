import React from 'react'
import { Helmet } from 'react-helmet';
import Messages from '../components/Chat/Messages';
import MessageInput from '../components/Chat/MessageInput';
import { useChat } from '../contextApi/ChatContext';
import Socket from '../Socket';

const Chat = () => {
    const { receiver } = useChat()

    return (
        <>
            {receiver && receiver !== "" ?
                <Helmet>
                    <title>Omegle: Connected to stranger</title>
                </Helmet> :
                <Helmet>
                    <title>Omegle: Talk to strangers</title>
                </Helmet>
            }
            <Socket/>
            <Messages />
            <MessageInput />
        </>

    )
}

export default Chat