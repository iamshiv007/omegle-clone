import React, { useState } from 'react'
import { IoClose } from 'react-icons/io5'
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const TermsModal = ({ setIsTermsModal }) => {
    const [check1, setCheck1] = useState(false);
    const [check2, setcheck2] = useState(false);
    const navigate = useNavigate()

    const navigateToChat = () => {
        navigate("/chat")
    }

    return (
        <ModalBackground>
            <Modal className='termsBox'>
                <ModalCloseWrapper>
                    <ModalClose onClick={() => setIsTermsModal(false)}><IoClose /></ModalClose>
                </ModalCloseWrapper>
                <InputWrapper>
                    <span>
                        <input className='modalInput' type="checkbox" checked={check1} onChange={() => setCheck1(!check1)} />
                    </span>
                    <CheckBoxLabel className='modalText'>
                        <strong>
                            OUR AGE RESTRICTIONS HAVE CHANGED.YOU MUST BE 18 OR OLDER TO USE OMEGLE.</strong>Persons under the age of 18 <strong>may not</strong> use Omegle.See our updated <Link>Terms of Service</Link> for more info.<strong>By checking the box you acknowledge and represent that you comply with these age restrictions.</strong>
                    </CheckBoxLabel>
                </InputWrapper>
                <InputWrapper style={{ marginTop: "15px" }}>
                    <span>
                        <input className='modalInput' type="checkbox" checked={check2} onChange={() => setcheck2(!check2)} />
                    </span>
                    <CheckBoxLabel className='modalText'>By checking the box you acknowledge that you have reviewed and agree to be bound by Omegle's <Link>Terms of Service, Privacy Policy,</Link> and <Link>Community Guidelines.</Link></CheckBoxLabel>
                </InputWrapper>
                <SubmitButtonWrapper>
                    <Button className='confirmBtn' onClick={navigateToChat} disabled={!check1 || !check2}>Confirm & continue</Button>
                </SubmitButtonWrapper>
            </Modal>
        </ModalBackground>
    )
}

export default TermsModal

const ModalBackground = styled.div({
    width: "100%",
    height: "100vh",
    background: "rgba(0, 0, 0, 0.4)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: 'fixed',
    top: "0",
    left: "0",
    overflow: "hidden"
})

const Modal = styled.div({
    padding: "35px 20px",
    height: "fit-content",
    background: "white",
    borderRadius: "30px"
})

const ModalCloseWrapper = styled.div({
    display: "flex",
    flexDirection: "row-reverse",
    position: "relative"
})

const ModalClose = styled.button({
    color: 'gray',
    fontSize: "26px",
    background: "transparent",
    border: "none",
    position: "absolute",
    top: "-25px",
    right: "-10px"
})

const InputWrapper = styled.div({
    display: "flex",
    gap: "10px"
})

const CheckBoxLabel = styled.span({
    fontSize: "15px"
})

const Link = styled.span({
    color: 'blue',
    textDecoration: "underline"
})

const SubmitButtonWrapper = styled.div({
    marginTop: "20px",
    display: "flex",
    flexDirection: "row-reverse"
})

const Button = styled.button({
    fontSize: "25px"
})