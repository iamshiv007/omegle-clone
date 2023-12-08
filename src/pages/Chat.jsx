import React from 'react'
import { Helmet } from 'react-helmet';
import Messages from '../components/Chat/Messages';
import MessageInput from '../components/Chat/MessageInput';
import { useChat } from '../contextApi/ChatContext';

const Chat = () => {
    const { receiver } = useChat()

    return (
        <>
            {receiver && receiver !== "" ?
                <Helmet>
                    <title>Omegle: Connected to stranger</title>
                </Helmet> :
                <Helmet>
                    <title>Omegle: Talk to strangers!</title>
                </Helmet>
            }
            <Messages />
            <MessageInput />
        </>

    )
}

export default Chat