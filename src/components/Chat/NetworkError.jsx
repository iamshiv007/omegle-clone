import React from 'react'

const NetworkError = () => {
  return (
    <div>
        <p>Error connecting to server. Please try again.</p>
            <button style={{ fontSize: "20px", color: "white", fontWeight: "500", padding: "16px", margin: "10px 0", background: "#83ABF7", border: "1px solid #ECE8E8", borderRadius: "2px" }}>New Chat</button>
            <div style={{ display: "flex", gap: "5px" }}>
                <input type="checkbox" />
                <p>Find strangers with common interests</p>
                <p style={{ color: "blue", textDecoration: "underline" }}>(Enable)</p>
            </div>
    </div>
  )
}

export default NetworkError