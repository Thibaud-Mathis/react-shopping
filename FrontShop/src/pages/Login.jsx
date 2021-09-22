import React from 'react'
import styled from 'styled-components'
import Navbar from '../components/Navbar'
import Newsletter from '../components/Newsletter'
import Footer from '../components/Footer'

const Container = styled.div``

const Login = () => {
    return (
        <Container>
            <Navbar/>
            <Newsletter/>
            <Footer/>
            
        </Container>
    )
}

export default Login
