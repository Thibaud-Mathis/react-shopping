import React, { useState } from 'react'
import styled from "styled-components"

const Container = styled.div`
    height: 30px;
    background: teal;
    display: flex;
    align-items: center;
    padding: 5px;
    color: white;
    font-weight: 600;
    font-size: 14px;
    justify-content: center;
    position: relative;
`
const Closing = styled.span`
    cursor: pointer;
    position: absolute;
    right: 25px;
    font-size: 12px;
    font-weight: 400;

`

const Annoucement = () => {
    const [display, setDisplay] = useState(true)
    const handleClick = () => {
        setDisplay(!display)
    }
    return (
        <>
            {display && 
            <Container>
                Buy This Amzing stuff you don't really need NOW !!!
                <Closing onClick={handleClick}>close</Closing>
            </Container>}
        </>
    )
}

export default Annoucement
