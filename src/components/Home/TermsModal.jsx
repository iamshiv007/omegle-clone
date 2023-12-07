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
        <div style={{ width: "100%", height: "100vh", background: "rgba(0, 0, 0, 0.2)", display: "flex", justifyContent: "center", alignItems: "center", position: 'fixed', top: "0", left: "0", overflow: "hidden" }}>
            <div className='termsBox' style={{ padding: "20px", background: "white", borderRadius: "10px" }}>
                <div style={{ display: "flex", flexDirection: "row-reverse", position: "relative" }}>
                    <button style={{ fontSize: "20px", background: "white", border: "none", position: "absolute", top: "-10px" }} onClick={() => setIsTermsModal(false)}><IoClose /></button>
                </div>
                <div style={{ display: 'flex', gap: "15px" }}>
                    <div>
                        <input type="checkbox" style={{ marginTop: "5px", width: "18px", height: "18px" }} checked={check1} onChange={() => setCheck1(!check1)} />
                    </div>
                    <span>
                        By checking the box you acknowledge that you have reviewed and agree to be bound by Omegle's <a href="/"> Terms of Service, Privacy Policy </a>, and <a href="/">Community Guidelines.</a>
                    </span>
                </div>
                <div style={{ marginTop: "15px", display: 'flex', gap: "15px" }}>
                    <div>
                        <input type="checkbox" style={{ marginTop: "5px", width: "18px", height: "18px" }} checked={check2} onChange={() => setcheck2(!check2)} />
                    </div>
                    <span>You must be 18+ or 13+ to use Omegle. If you are between 13 and 18 years of age, you may only use Omegle with the permission and under the supervision of your legal guardian. Persons under the age of 13 <strong>may not</strong> use Omegle. See our <a href="/">Terms of Service</a> for more info. <strong>By checking the box you acknowledge and represent that you comply with these age restrictions.</strong></span>
                </div>
                <div style={{ marginTop: "10px", display: "flex", flexDirection: "row-reverse" }}>
                    <button className='confirmBtn' style={{ fontSize: "20px" }} onClick={navigateToChat} disabled={!check1 || !check2}>Confirm & continue</button>
                </div>
            </div>
        </div>
    )
}

export default TermsModal