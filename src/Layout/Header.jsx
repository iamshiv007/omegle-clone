import React from 'react'
import OmegleLogo from "../assets/Omegle2.png"
import { FaFacebookF, FaTwitter } from "react-icons/fa6"
import { FcGoogle } from "react-icons/fc"
import { FaSortDown } from "react-icons/fa"
import { useChat } from '../contextApi/ChatContext'

const Header = () => {

    const { onlineUsers } = useChat()

    return (
        <div style={{ padding: "10px 30px", display: "flex", justifyContent: "space-between", alignItems: "center", boxShadow: "2px 2px 2px #e4e3e3" }}>
            <div className='logoWrapper' style={{ display: "flex", alignItems: "center", gap: "50px" }}>
                <img src={OmegleLogo} alt="Omegle Logo" style={{ height: "50px" }} />

                <p className='rotatedText' style={{ fontSize: "22px", fontWeight: "700", rotate: "-6deg" }}>Talk to strangers!</p>
            </div>

            <div className="headerRight" style={{ flexDirection: "column", alignItems: "end" }}>
                <div style={{ display: "flex", gap: "10px" }}>
                    <button style={{ color: "white", background: "#4A549A", border: "none", borderRadius: "2px", display: "flex", gap: "5px", alignItems: "center" }}><FaFacebookF />
                        Share</button>
                    <button style={{ color: "white", background: "#728EC5", border: "none", borderRadius: "2px", display: "flex", gap: "5px", alignItems: "center" }}><FaTwitter />
                        Tweet</button>
                    <button style={{ padding: "2px 10px", border: "1px solid gray", borderRadius: "2px", display: "flex", alignItems: "center", gap: "5px" }}>
                        <FcGoogle />
                        Choose a language
                        <FaSortDown />
                    </button>
                </div>
                <div style={{ marginTop: "5px", display: 'flex', gap: "5px", alignItems: "center" }}>
                    <p style={{ fontSize: "25px", color: "#9DB2D7" }}>{onlineUsers.length} +</p>
                    <p style={{ color: "#b6d1f0" }}>Live users</p>
                </div>
            </div>

        </div >
    )
}

export default Header