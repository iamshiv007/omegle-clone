import React, { useState } from 'react'
import TermsModal from '../components/Home/TermsModal';
import usaFlag from "../assets/usaFlag.jpg"

const Home = () => {
    const [isTermsModal, setIsTermsModal] = useState(false);

    return (
        // desktop
        <>
            <div className='homeDesktop' style={{
                width: "720px",
                padding: "10px", margin: "15px auto", border: "1px solid #CCC",
                borderRadius: "10px", overflow: "hidden"
            }}>
                <p style={{ fontSize: "14px", textAlign: "center", fontWeight: "600" }}>You don't need an app to use Omegle on your phone or tablet! The web site works great on mobile.
                </p>
                <div style={{ display: "flex", justifyContent: "center" }}>
                    <img src={usaFlag} alt="USA Flag" style={{ height: "170px", width: "350px", margin: "20px 0", background: "rgba(0, 0, 1, 0.01)", objectFit: "cover" }} />
                </div>

                <div style={{ width: "100%" }}>
                    <p style={{ fontSize: "16px", lineHeight: "24px" }}>
                        Omegle (oh-meg-ull) is a great way to meet new friends. When you use Omegle, we pick someone else at random and let you talk one-on-one. To help you stay safe, chats are anonymous unless you tell someone who you are (not suggested!), and you can stop a chat at any time. Predators have been known to use Omegle, so please be careful.
                    </p>
                    <p style={{ fontSize: "16px", lineHeight: "24px", marginTop: "10px" }}>
                        If you prefer, you can add your interests, and Omegle will look for someone who's into some of the same things as you instead of someone completely random.
                    </p>
                </div>

                <p style={{ fontSize: "11px", textAlign: "center", fontWeight: "500", marginTop: "15px" }}>By using Omegle, you accept the terms at the bottom.You must be 18 + or 13 + with parental permission.
                </p>

                <div style={{ width: "fit-content", padding: "10px 40px", margin: "20px auto", background: "#BFDEFF", borderRadius: "5px", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", gap: "10px" }} >
                    <p style={{ fontSize: "24px", fontWeight: "600" }}>Video is monitored.Keep it clean!
                    </p>
                    <div style={{ display: "flex", gap: "10px" }}>
                        <strong style={{ fontSize: "12px" }}>18+:</strong>
                        <p style={{ color: "blue", fontSize: "12px", textDecoration: "underline" }}>(Adult)</p>
                        <p style={{ color: "blue", fontSize: "12px", textDecoration: "underline" }}>(Unmoderated Section)</p>
                    </div>
                </div>

                <div style={{ marginBottom: "10px", display: 'flex', justifyContent: "space-between" }}>
                    <div>
                        <p style={{ marginBottom: "5px", textAlign: "center", fontSize: "18px" }}>What do you wanna talk about?</p>
                        <input type='text' placeholder='Add your interests(optional)' style={{ textAlign: "center", fontSize: "19px", padding: "14px", width: "330px", border: "1px solid #CCC", borderRadius: "2px", cursor: "not-allowed" }} disabled />
                    </div>

                    <div>
                        <p style={{ marginBottom: "5px", textAlign: "center", fontSize: "18px" }}>Start Chating:</p>
                        <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
                            <button className='textBtn' style={{ fontSize: "20px", color: "white", fontWeight: "500", width: "120px", padding: "14px", border: "none", borderRadius: "4px" }} onClick={() => setIsTermsModal(true)}>Text</button>
                            <p>or</p>
                            <button className='videoBtn' style={{ fontSize: "20px", color: "white", fontWeight: "500", width: "120px", padding: "14px", border: "none", borderRadius: "4px", cursor: "not-allowed" }} disabled={true}>Video</button>
                        </div>
                    </div>
                </div>

                <div style={{ padding: "8px", width: "330px", background: "rgb(238, 238, 238)", border: "1px solid rgb(204, 204, 204)", borderRadius: "8px", display: "flex", justifyContent: "space-around", position: "relative" }}>
                    <p style={{ position: "absolute", left: "20px", top: "2px" }}>▶️</p>
                    <p><strong>College student</strong> chat</p>
                </div>
            </div >


            {/* mobile */}
            <div className='mobileHome' style={{ marginTop: "16px", border: "1px solid #CCC" }}>
                <div>
                    <p style={{ textAlign: "center", lineHeight: "22px", padding: "8px 0" }}>Mobile video chat is an experimental new feature. Video is monitored, so keep it clean!
                    </p>
                    <p style={{ textAlign: "center", lineHeight: "22px", padding: "8px 0" }}>Go to <span style={{ color: "blue", textDecoration: "underline" }}>an adult site</span> if that's what you want, and you are 18 or older.</p>
                    <div style={{ padding: "8px 0", display: "flex", justifyContent: "center" }}>
                        <button className='textBtn' style={{ fontSize: "20px", color: "white", fontWeight: "500", padding: "10px 25px", border: "1px solid #ECE8E8", borderRadius: "4px" }} onClick={() => setIsTermsModal(true)}>Start a chat</button>
                        <button className='videoBtn' style={{ fontSize: "20px", color: "white", fontWeight: "500", padding: "10px 25px", border: "1px solid #ECE8E8", borderRadius: "4px", cursor: "not-allowed" }}>video</button>
                    </div>
                </div>

                <div>
                    <p style={{ textAlign: "center", paddingTop: "10px", paddingBottom: "5px" }}>Meet strangers with your interests!</p>
                    <input type="text" placeholder='Add your interests (optional)' style={{ fontSize: "15px", width: "98%", padding: "8px 4px", border: "1px solid #dddada", borderRadius: "5px" }} />
                </div>

                <div style={{ padding: "4px", marginTop: "10px", background: "rgb(238, 238, 238)", display: "flex", justifyContent: "center", border: "1px solid rgb(204, 204, 204)", borderRadius: "5px", position: "relative" }}>
                    <p style={{ position: "absolute", left: "10px", top: "0px" }}>►</p>
                    <p><strong>College student</strong> chat</p>
                </div>

                <p style={{ lineHeight: "22px", padding: "10px", marginTop: "10px" }}>
                    Omegle (omegul) is a great way to meet new friends, even while practicing social distancing. When you use Omegle, you are paired randomly with another person to talk one-on-one. If you prefer, you can add your interests and you'll be randomly paired with someone who selected
                    some of the same interests
                </p>
            </div>

            {isTermsModal && <TermsModal setIsTermsModal={setIsTermsModal} />}

        </>
    )
}

export default Home