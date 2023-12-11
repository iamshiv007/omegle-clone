import React from 'react'
import styled from 'styled-components'

const NetworkError = () => {
  return (
    <div>
        <p>Error connecting to server. Please try again.</p>
            <Button>New Chat</Button>
            <CheckboxWrapper>
                <input type="checkbox" />
                <p>Find strangers with common interests</p>
                <Link>(Enable)</Link>
            </CheckboxWrapper>
    </div>
  )
}

export default NetworkError

const Button = styled.button({
  fontSize: "20px", 
  color: "white", 
  fontWeight: "500", 
  padding: "16px", 
  margin: "10px 0", 
  background: "#83ABF7", 
  border: "1px solid #ECE8E8",
   borderRadius: "2px"
})

const CheckboxWrapper = styled.div({
  display: "flex", 
  gap: "5px" 
})

const Link = styled.p({
  color: "blue", textDecoration: "underline"
})