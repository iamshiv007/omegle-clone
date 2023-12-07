import React, { useState } from 'react'
import TermsModal from '../components/Home/TermsModal';
import usaFlag from "../assets/usaFlag.jpg"

const Home = () => {
    const [isTermsModal, setIsTermsModal] = useState(false);

    return (

        <div className='home' style={{
            padding: "10px", borderRadius: "10px", overflow: "hidden"
        }}>
            <p style={{ textAlign: "center" }}>You don't need an app to use Omegle on your phone or tablet! The web site works great on mobile.
            </p>
            <div style={{ display: "flex", justifyContent: "center" }}>
                <img className='homeImage' src={usaFlag} alt="USA Flag" style={{ margin: "20px 0", background: "rgba(0, 0, 1, 0.01)", objectFit: "cover" }} />
            </div>

            <div style={{ width: "100%" }}>
                <p>
                    Omegle (oh-meg-ull) is a great way to meet new friends. When you use Omegle, we pick someone else at random and let you talk one-on-one. To help you stay safe, chats are anonymous unless you tell someone who you are (not suggested!), and you can stop a chat at any time. Predators have been known to use Omegle, so please be careful.
                </p>
                <p style={{ marginTop: "10px" }}>
                    If you prefer, you can add your interests, and Omegle will look for someone who's into some of the same things as you instead of someone completely random.
                </p>
            </div>

            <p style={{ fontSize: "12px", textAlign: "center", fontWeight: "600", marginTop: "10px" }}>By using Omegle, you accept the terms at the bottom.You must be 18 + or 13 + with parental permission.
            </p>

            <div style={{ width: "fit-content", padding: "10px 40px", margin: "20px auto", background: "#BFDEFF", borderRadius: "5px", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", gap: "10px" }} >
                <p style={{ fontSize: "24px", fontWeight: "600" }}>Video is monitored.Keep it clean!
                </p>
                <div style={{ display: "flex", gap: "10px" }}>
                    <p style={{ fontSize: "12px" }}>18+:</p>
                    <p style={{ color: "blue", fontSize: "12px", textDecoration: "underline" }}>(Adult)</p>
                    <p style={{ color: "blue", fontSize: "12px", textDecoration: "underline" }}>(Unmoderated Section)</p>
                </div>
            </div>

            <div className='homeBtnWrapper' style={{ marginBottom: "10px", justifyContent: "space-between" }}>
                <div>
                    <p style={{ marginBottom: "5px", textAlign: "center", fontSize: "20px" }}>What do you wanna talk about?</p>
                    <input className='homeInput' type='text' placeholder='Add your interests(optional)' style={{ textAlign: "center", fontSize: "18px", padding: "16px", border: "1px solid #ECE8E8", borderRadius: "2px", cursor: "not-allowed" }} disabled />
                </div>

                <div>
                    <p style={{ marginBottom: "5px", textAlign: "center", fontSize: "20px" }}>Start Chating:</p>
                    <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
                        <button className='textBtn' style={{ fontSize: "20px", color: "white", fontWeight: "500", width: "120px", padding: "16px", border: "1px solid #ECE8E8", borderRadius: "2px" }} onClick={() => setIsTermsModal(true)}>Text</button>
                        <p>or</p>
                        <button className='videoBtn' style={{ fontSize: "20px", color: "white", fontWeight: "500", width: "120px", padding: "16px", border: "1px solid #ECE8E8", borderRadius: "2px", cursor: "not-allowed" }} disabled={true}>Video</button>
                    </div>
                </div>
            </div>

            {isTermsModal && <TermsModal setIsTermsModal={setIsTermsModal} />}
        </div >

    )
}

export default Home