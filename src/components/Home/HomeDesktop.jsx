import React from 'react'
import styled from 'styled-components'
import usaFlag from "../../assets/usaFlag.jpg";

const HomeDesktop = ({ setIsTermsModal }) => {
    return (
        <DesktopHome className='homeDesktop'>
            <NoAppNeedText>You don't need an app to use Omegle on your phone or tablet! The web site works great on mobile.
            </NoAppNeedText>
            <ImageWrapper>
                <Image src={usaFlag} alt="USA Flag" />
            </ImageWrapper>

            <AboutOmegleText>
                Omegle (oh-meg-ull) is a great way to meet new friends. When you use Omegle, we pick someone else at random and let you talk one-on-one. To help you stay safe, chats are anonymous unless you tell someone who you are (not suggested!), and you can stop a chat at any time. Predators have been known to use Omegle, so please be careful.
            </AboutOmegleText>
            <SameInteretsText>
                If you prefer, you can add your interests, and Omegle will look for someone who's into some of the same things as you instead of someone completely random.
            </SameInteretsText>

            <AgeLimitText>By using Omegle, you accept the terms at the bottom.You must be 18 + or 13 + with parental permission.
            </AgeLimitText>

            <VideoMonitoringBox>
                <VideoMonitoringText>Video is monitored.Keep it clean!
                </VideoMonitoringText>
                <UnmoderatedSection>
                    <AgeText>18+:</AgeText>
                    <UnmoderatedSectionText>{`(Adult) (Unmoderated Section)`}</UnmoderatedSectionText>
                </UnmoderatedSection>
            </VideoMonitoringBox>

            <HomeBottom>
                <div>
                    <InputLabel>What do you wanna talk about?</InputLabel>
                    <Input type='text' placeholder='Add your interests(optional)' disabled />
                </div>

                <div>
                    <ButtonsLabel>Start Chating:</ButtonsLabel>
                    <ButtonsWrapper>
                        <Button className='textBtn' onClick={() => setIsTermsModal(true)}>Text</Button>
                        <p>or</p>
                        <Button className='videoBtn' disabled={true}>Video</Button>
                    </ButtonsWrapper>
                </div>
            </HomeBottom>

            <CollegeStudentBox>
                <PlayIcon>▶️</PlayIcon>
                <p><strong>College student</strong> chat</p>
            </CollegeStudentBox>
        </DesktopHome >
    )
}

export default HomeDesktop

const DesktopHome = styled.div({
    width: "720px",
    padding: "10px",
    margin: "15px auto",
    border: "1px solid #CCC",
    borderRadius: "10px",
    overflow: "hidden"
})


const NoAppNeedText = styled.p({
    fontSize: "14px",
    textAlign: "center",
    fontWeight: "600"
})

const ImageWrapper = styled.div({
    display: "flex",
    justifyContent: "center"
})

const Image = styled.img({
    height: "170px",
    width: "350px",
    margin: "20px 0",
    background: "rgba(0, 0, 1, 0.01)",
    objectFit: "cover"
})

const AboutOmegleText = styled.p({
    fontSize: "16px",
    lineHeight: "24px"
})

const SameInteretsText = styled.p({
    fontSize: "16px",
    lineHeight: "24px",
    marginTop: "10px"
})

const AgeLimitText = styled.p({
    fontSize: "11px",
    textAlign: "center",
    fontWeight: "500",
    marginTop: "15px"
})

const VideoMonitoringBox = styled.div({
    width: "fit-content",
    padding: "10px 40px",
    margin: "20px auto",
    background: "#BFDEFF",
    borderRadius: "5px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: "10px"
})

const VideoMonitoringText = styled.p({
    fontSize: "24px",
    fontWeight: "600"
})

const UnmoderatedSection = styled.div({
    display: "flex",
    gap: "10px"
})

const AgeText = styled.strong({
    fontSize: "12px"
})

const UnmoderatedSectionText = styled.p({
    color: "blue",
    fontSize: "12px",
    textDecoration: "underline"
})

const HomeBottom = styled.div({
    marginBottom: "10px",
    display: 'flex',
    justifyContent: "space-between"
})

const InputLabel = styled.div({
    marginBottom: "5px",
    textAlign: "center",
    fontSize: "18px"
})

const Input = styled.input({
    textAlign: "center",
    fontSize: "19px",
    padding: "14px",
    width: "330px",
    border: "1px solid #CCC",
    borderRadius: "2px",
    cursor: "not-allowed"
})

const ButtonsLabel = styled.p({
    marginBottom: "5px",
    textAlign: "center",
    fontSize: "18px"
})

const ButtonsWrapper = styled.div({
    display: "flex",
    gap: "10px",
    alignItems: "center"
})

const Button = styled.button({
    fontSize: "20px",
    color: "white",
    fontWeight: "500",
    width: "120px",
    padding: "14px",
    border: "none",
    borderRadius: "4px"
})

const CollegeStudentBox = styled.div({
    padding: "8px",
    width: "330px",
    background: "rgb(238, 238, 238)",
    border: "1px solid rgb(204, 204, 204)",
    borderRadius: "8px",
    display: "flex",
    justifyContent: "space-around",
    position: "relative"
})

const PlayIcon = styled.p({
    position: "absolute",
    left: "20px",
    top: "2px"
})