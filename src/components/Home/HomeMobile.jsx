import React from 'react'
import styled from 'styled-components'

const HomeMobile = ({ setIsTermsModal }) => {
    return (
        <MobileHome className='mobileHome'>
            <VideoDescText>Mobile video chat is an experimental new feature. Video is monitored, so keep it clean!
            </VideoDescText>
            <AdultSite>Go to <Link>an adult site</Link> if that's what you want, and you are 18 or older.</AdultSite>
            <ButtonWrapper>
                <Button className='textBtn' onClick={() => setIsTermsModal(true)}>Start a chat</Button>
                <Button className='videoBtn'>video</Button>
            </ButtonWrapper>

            <div>
                <InputLabel>Meet strangers with your interests!</InputLabel>
                <Input type="text" placeholder='Add your interests (optional)' disabled />
            </div>

            <CollegeStudentBox>
                <PlayIcon>►</PlayIcon>
                <p><strong>College student</strong> chat</p>
            </CollegeStudentBox>

            <AboutOmegleText>
                Omegle (omegul) is a great way to meet new friends, even while practicing social distancing. When you use Omegle, you are paired randomly with another person to talk one-on-one. If you prefer, you can add your interests and you'll be randomly paired with someone who selected
                some of the same interests
            </AboutOmegleText>
        </MobileHome>
    )
}

export default HomeMobile

const MobileHome = styled.div({
    marginTop: "16px",
    border: "1px solid #CCC"
})

const VideoDescText = styled.div({
    textAlign: "center",
    lineHeight: "22px",
    padding: "8px 0"
})

const AdultSite = styled.div({
    textAlign: "center",
    lineHeight: "22px",
    padding: "8px 0"
})

const Link = styled.span({
    color: "blue",
    textDecoration: "underline"
})

const ButtonWrapper = styled.div({
    padding: "8px 0",
    display: "flex",
    justifyContent: "center"
})

const Button = styled.div({
    fontSize: "20px",
    color: "white",
    fontWeight: "500",
    padding: "10px 25px",
    border: "1px solid #ECE8E8",
    borderRadius: "4px"
})

const InputLabel = styled.div({
    textAlign: "center",
    paddingTop: "10px",
    paddingBottom: "5px"
})

const Input = styled.div({
    fontSize: "15px",
    width: "98%",
    padding: "8px 4px",
    border: "1px solid #dddada",
    borderRadius: "5px"
})

const CollegeStudentBox = styled.div({
    padding: "4px",
    marginTop: "10px",
    background: "rgb(238, 238, 238)",
    display: "flex",
    justifyContent: "center",
    border: "1px solid rgb(204, 204, 204)",
    borderRadius: "5px",
    position: "relative"
})

const PlayIcon = styled.p({
    position: "absolute",
    left: "10px",
    top: "0px"
})

const AboutOmegleText = styled.div({
    lineHeight: "22px",
    padding: "10px",
    marginTop: "10px"
})