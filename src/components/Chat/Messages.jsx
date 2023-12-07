import React, { useEffect, useRef } from 'react'
import { useChat } from '../../contextApi/ChatContext'
import { socket } from '../../Socket'
import html2canvas from 'html2canvas';

const Messages = () => {
    const { userId, isSearching, setIsSearching, receiver, messages, setMessages, isTyping } = useChat()

    const newChat = () => {
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

    const takeScreenshot = () => {
        const element = document.getElementById('savedchat'); // Replace 'elementToCapture' with the ID of the element you want to capture

        html2canvas(element).then((canvas) => {
            const screenshot = canvas.toDataURL('image/png');
            const downloadLink = document.createElement('a');

            // Set the href attribute with the data URL
            downloadLink.href = screenshot;

            // Set the download attribute with a desired file name
            downloadLink.download = 'screenshot.png';

            // Append the link to the body
            document.body.appendChild(downloadLink);

            // Trigger a click on the link to initiate the download
            downloadLink.click();

            // Remove the link from the body after download
            document.body.removeChild(downloadLink);
            // Now you can save or display the screenshot as needed
        });
    };

    const messagesRef = useRef()

    useEffect(() => {
        if (messagesRef.current) {
            messagesRef.current.scrollTop = messagesRef.current.scrollHeight;
        }
    }, [messages]);


    return (
        <div id='savedchat' className='messagesContainer' style={{ padding: "10px", height: "71vh", overflowY: "scroll" }} ref={messagesRef}>
            {!isSearching && !receiver && receiver !== "" && (
                <>
                    <p className='welcomeText' style={{ marginBottom: "10px" }}>Omegle : talk to strangers</p>
                    <button className='startBtnSmall' style={{ width: "fit-content" }} onClick={newChat}>Start a new conversation</button>
                </>
            )}

            {messages.length === 0 && !isTyping && receiver && <p className='connectedText'>You’re now chatting with a random stranger. Say Stand WITH THE CHINESE PEOPLE AGAINST THE CCP!</p>}
            {messages.map((message, index) => (
                <div key={index} className={message?.stranger ? "strangerWrapper" : "youWrapper"}>
                    <div className={message?.stranger ? "strangerBox" : "youBox"} style={{ fontSize: "18px", marginBottom: "10px", display: "flex", gap: "5px" }}>
                        <p className='messageBy' style={{ color: message?.stranger ? "red" : "blue", fontWeight: "bold" }}>
                            {message?.stranger ? "Stranger :" : "You :"}
                        </p>
                        <p>{message?.stranger ? message.stranger : message.you}</p>
                    </div>
                </div>
            ))
            }

            {receiver && isTyping && <p style={{ marginTop: "5px" }}>Stranger is typing...</p>}

            {isSearching && <p className='loadingText'>Looking for someone you can chat with...</p>}
            {!isSearching && !receiver && receiver === "" &&
                <>
                    <p className='disconnectText' style={{ color: 'gray', fontWeight: "500", margin: '15px 0 10px 0' }}>Your conversational partner has disconnected</p>
                    <div className='disconnectText2' style={{ display: 'flex', gap: "5px" }}>
                        <button onClick={newChat}>Start a new conversation</button>
                        <p>or</p>
                        <p style={{ color: "blue", textDecoration: "underline", cursor: "pointer" }}>save this log</p>
                        <p>or</p>
                        <p style={{ color: "blue", textDecoration: "underline" }}>send us feedback</p>
                    </div>
                </>}
        </div >
    )
}

export default Messages