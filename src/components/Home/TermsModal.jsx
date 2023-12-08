import React, { useState } from 'react'
import { IoClose } from 'react-icons/io5'
import { useNavigate } from 'react-router-dom';

const TermsModal = ({ setIsTermsModal }) => {
    const [check1, setCheck1] = useState(false);
    const [check2, setcheck2] = useState(false);
    const navigate = useNavigate()

    const navigateToChat = () => {
        navigate("/chat")
    }

    return (
        <div style={{ width: "100%", height: "100vh", background: "rgba(0, 0, 0, 0.4)", display: "flex", justifyContent: "center", alignItems: "center", position: 'fixed', top: "0", left: "0", overflow: "hidden" }}>
            <div className='termsBox' style={{ padding: "35px 20px", height: "fit-content", background: "white", borderRadius: "30px" }}>
                <div style={{ display: "flex", flexDirection: "row-reverse", position: "relative" }}>
                    <button style={{ color: 'gray', fontSize: "26px", background: "transparent", border: "none", position: "absolute", top: "-25px", right: "-10px" }} onClick={() => setIsTermsModal(false)}><IoClose /></button>
                </div>
                <div style={{ display: "flex", gap: "10px" }}>
                    <span>
                        <input type="checkbox" style={{ margin: "0px 10px 10px 0px", width: "25px", height: "25px" }} checked={check1} onChange={() => setCheck1(!check1)} />
                    </span>
                    <span style={{ fontSize: "15px", lineHeight: "22px" }}>
                        <strong>
                            OUR AGE RESTRICTIONS HAVE CHANGED.YOU MUST BE 18 OR OLDER TO USE OMEGLE.</strong>Persons under the age of 18 <strong>may not</strong> use Omegle.See our updated <span style={{ color: 'blue', textDecoration: "underline" }}>Terms of Service</span> for more info.<strong>By checking the box you acknowledge and represent that you comply with these age restrictions.</strong>
                    </span>
                </div>
                <div style={{ marginTop: "15px", display: "flex", gap: "10px" }}>
                    <span>
                        <input type="checkbox" style={{ width: "50px", height: "50px", margin: "0px 10px 0 0", width: "25px", height: "25px" }} checked={check2} onChange={() => setcheck2(!check2)} />
                    </span>
                    <span style={{ fontSize: "15px", lineHeight: "22px" }}>By checking the box you acknowledge that you have reviewed and agree to be bound by Omegle's <span style={{ color: 'blue', textDecoration: "underline" }}>Terms of Service, Privacy Policy,</span> and <span style={{ color: 'blue', textDecoration: "underline" }}>Community Guidelines.</span></span>
                </div>
                <div style={{ marginTop: "20px", display: "flex", flexDirection: "row-reverse" }}>
                    <button className='confirmBtn' style={{ fontSize: "25px" }} onClick={navigateToChat} disabled={!check1 || !check2}>Confirm & continue</button>
                </div>
            </div>
        </div>
    )
}

export default TermsModal