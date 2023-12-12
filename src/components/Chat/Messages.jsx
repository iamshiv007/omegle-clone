import React, { useEffect, useRef } from 'react'
import { useChat } from '../../contextApi/ChatContext'
import { socket } from '../../Socket'
import html2canvas from 'html2canvas';
import styled from 'styled-components';

const Messages = () => {
    const { userId, isSearching, setIsSearching, receiver, messages, setMessages, isTyping, message } = useChat()

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
        <MessagesContainer id='savedchat' className='messagesContainer' ref={messagesRef}>
            {!isSearching && !receiver && receiver !== "" && (
                <>
                    <WelcomeText className='welcomeText'>Omegle : talk to strangers</WelcomeText>
                    <StartButton className='startBtnSmall' onClick={newChat}>Start a new conversation</StartButton>
                </>
            )}

            {receiver && <p className='connectedText'>You’re now chatting with a random stranger. Say Stand WITH THE CHINESE PEOPLE AGAINST THE CCP!</p>}
            {messages.map((message, index) => (
                <div key={index} className={message?.stranger ? "strangerWrapper" : "youWrapper"}>
                    <MessageBox className={message?.stranger ? "strangerBox" : "youBox"}>
                        <p className='messageBy' style={{ color: message?.stranger ? "red" : "blue", fontWeight: "bold" }}>
                            {message?.stranger ? "Stranger :" : "You :"}
                        </p>
                        <p>{message?.stranger ? message.stranger : message.you}</p>
                    </MessageBox>
                </div>
            ))
            }

            {isTyping && <TypingText>Stranger is typing...</TypingText>}

            {isSearching && <p className='loadingText loadingTextMobile'>Connecting to server...</p>}
            {isSearching && <p className='loadingText loadingTextDesktop'>Looking for someone you can chat with...</p>}
            {
                !isSearching && !receiver && receiver === "" &&
                <>
                    <StrangerDisconnected className='disconnectText disconnectedTextMobile'>Stranger has disconnected.</StrangerDisconnected>
                    <StrangerDisconnectedDesktop className='disconnectText disconnectedTextDesktop'>Your conversational partner has disconnected</StrangerDisconnectedDesktop>
                    <SaveLogWrapper className='disconnectText2 disconnectText2Mobile'>
                        <CommonInterestsText style={{}}><span><input type={"checkbox"} /></span> Find strangers with common interests <Link>Settings</Link></CommonInterestsText>
                        <SaveLogButton onClick={takeScreenshot}>Great chat? Save the log!</SaveLogButton>
                    </SaveLogWrapper>

                    <SaveLogoWrapperDesktop className='disconnectText2 disconnectText2Desktop'>
                        <button onClick={newChat}>Start a new conversation</button>
                        <p>or</p>
                        <Link onClick={takeScreenshot}>save this log</Link>
                        <p>or</p>
                        <Link>send us feedback</Link>
                    </SaveLogoWrapperDesktop>
                </>
            }
        </MessagesContainer >
    )
}

export default Messages

const MessagesContainer = styled.div({
    padding: "10px",
    height: "71vh",
    overflowY: "scroll"
})

const WelcomeText = styled.p({
    marginBottom: "10px"
})

const StartButton = styled.button({
    width: "fit-content"
})

const MessageBox = styled.div({
    fontSize: "18px",
    marginBottom: "10px",
    display: "flex",
    gap: "5px"
})

const TypingText = styled.p({
    marginTop: "5px"
})

const StrangerDisconnected = styled.p({
    color: 'gray',
    fontWeight: "500",
    margin: '15px 0 10px 0'
})

const StrangerDisconnectedDesktop = styled.p({
    color: 'gray',
    fontWeight: "500",
    margin: '15px 0 10px 0'
})

const SaveLogWrapper = styled.div({
    flexDirection: "column"
})

const CommonInterestsText = styled.p({
    fontSize: "15px", textAlign: "center"
})

const Link = styled.span({
    color: "blue",
    textDecoration: "underline",
    cursor: "pointer"
})

const SaveLogButton = styled.p({
    fontSize: "14px",
    fontWeight: "600",
    padding: "10px",
    marginTop: "8px",
    background: "#ff8a29",
    borderRadius: "3px",
    cursor: "pointer"
})

const SaveLogoWrapperDesktop = styled.div({
    gap: "5px"
})