import React from 'react'
import styled from "styled-components"
import { Facebook, Twitter, Instagram, Room, Phone, MailOutline } from "@material-ui/icons"
import { mobile } from '../responsive'

const Container = styled.div`
    display: flex;
    /* background: #e6e0e0; */
    ${mobile({flexDirection: "column"}) }
`
const Left = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 20px;
`
const Center = styled.div`
    flex: 1;
    padding: 20px;
    ${mobile({display: "none"}) }
`

const Title = styled.h3`
    margin-bottom: 30px;
`

const List = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
`

const ListItem = styled.li`
    width: 50%;
    margin-bottom: 10px;
`

const Right = styled.div`
    flex: 1;
    padding: 20px;
    ${mobile({background: "#fff8f"}) }
`
const Logo = styled.h1`
    font-weight: 800;
`
const Description = styled.p`
    margin: 20px 0;
`
const SocialContainer = styled.div`
    display: flex;
`
const SocialIcon = styled.div`
    height: 40px;
    width: 40px;
    border-radius: 50%;
    background: #${props => props.color};
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    margin-right: 20px;
`

const ContactItem = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 20px;
    width: 100%;
`
const Payement = styled.img``

const Footer = () => {
    return (
        <Container>
            <Left>
                <Logo>LOCOS</Logo>
                <Description>Lorem ipsum dolor sit amet consectetur adipisicing elit. Que explicabo ad facere cumque at ratione libero! Laboriosam, atque est.</Description>
                <SocialContainer>
                    <SocialIcon color="3B5999">
                        <Facebook/>
                    </SocialIcon>
                    <SocialIcon color="55ACEE">
                        <Twitter/>
                    </SocialIcon>
                    <SocialIcon color="E4405F">
                        <Instagram/>
                    </SocialIcon>
                </SocialContainer>
            </Left>
            <Center>
                <Title>Usefull links</Title>
                <List>
                    <ListItem>Home</ListItem>
                    <ListItem>bla</ListItem>
                    <ListItem>bla</ListItem>
                    <ListItem>bla</ListItem>
                    <ListItem>bla</ListItem>
                </List>
            </Center>
            <Right>
                <Title>Contact</Title>
                <ContactItem><Room style={{marginRight: "10px"}}/>62, Rue du bouchaunoix</ContactItem>
                <ContactItem><Phone style={{marginRight: "10px"}}/>+04 01 03 45 12</ContactItem>
                <ContactItem><MailOutline style={{marginRight: "10px"}}/>contact@company.com</ContactItem>
                <Payement src="https://i.ibb.co/Qfvn4z6/payment.png"/>
            </Right>
        </Container>
    )
}

export default Footer;
