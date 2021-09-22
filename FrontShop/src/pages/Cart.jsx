import { Add, Remove } from '@material-ui/icons'
import React from 'react'
import styled from 'styled-components'
import Annoucement from '../components/Annoucement'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

const Container = styled.div``
const Wrapper = styled.div`
    padding: 20px;
`
const Title = styled.h1`
    font-weight: 300;
    text-align: center;
`
const Top = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px;
`

const TopButton = styled.button`
    padding: 10px;
    font-weight: 600;
    cursor: pointer;
    border: ${props => props.type === "filled" && "none"};
    background: ${props => props.type === "filled" ? "black" : "transparent"};
    color: ${props => props.type === "filled" ? "white" : "black"};
`
const TopTexts = styled.div``
const TopText = styled.span`
    text-decoration: underline;
    cursor: pointer;
    margin: 0 10px;
`

const Bottom = styled.div`
    display: flex;
    justify-content: space-between;
`
const Info = styled.div`
    flex:3;
`
const Product = styled.div`
    display: flex;
    justify-content: space-between;
`
const ProductDetail = styled.div`
    flex: 2;
    display: flex;
`
const Image = styled.img`
    width: 200px;
`
const Details = styled.div`
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
`
const ProductName = styled.span``
const ProductId = styled.span``
const ProductColor = styled.div`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background: ${props => props.color};
`
const ProductSize = styled.span``
const PriceDetail = styled.span`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`

const Summary = styled.div`
    flex:1;
`
const ProductAmmountContainer = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 20px;
`
const ProductAmmount = styled.div`
    font-size: 24px;
    margin: 5px;
    
`
const ProductPrice = styled.div`
    font-weight: 200;
    font-size: 30px;
`

const Hr = styled.hr`
    background: #eee;
    border: none;
    height: 1px;
`

const Cart = () => {
    return (
        <Container>
            <Annoucement/>
            <Navbar/>
            <Wrapper>
                <Title>Your bag</Title>
                <Top>
                    <TopButton>CONTINUE SHOPPING</TopButton>
                    <TopTexts>
                        <TopText>Shopping Bag(2)</TopText>
                        <TopText>Your Wishlist(0)</TopText>
                    </TopTexts>
                    <TopButton type="filled">CHECKOUT NOW</TopButton>
                </Top>
                <Bottom>
                    <Info>
                        <Product>
                            <ProductDetail>
                                <Image src="https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1614188818-TD1MTHU_SHOE_ANGLE_GLOBAL_MENS_TREE_DASHERS_THUNDER_b01b1013-cd8d-48e7-bed9-52db26515dc4.png?crop=1xw:1.00xh;center,top&resize=480%3A%2A"/>
                                <Details>
                                    <ProductName><b>Product: </b>Super Shoes</ProductName>
                                    <ProductId><b>ID: </b>68435412</ProductId>
                                    <ProductColor color="#0e0e0e"/>
                                    <ProductSize><b>Size:</b> 37.5</ProductSize>
                                </Details>
                            </ProductDetail>
                            <PriceDetail>
                                <ProductAmmountContainer>
                                    <Add style={{cursor: 'pointer'}}/>
                                    <ProductAmmount>2</ProductAmmount>
                                    <Remove style={{cursor: 'pointer'}} />
                                </ProductAmmountContainer>
                                <ProductPrice>1$</ProductPrice>
                            </PriceDetail>
                        </Product>
                        <Hr/>
                        <Product>
                            <ProductDetail>
                                <Image src="https://i.pinimg.com/originals/2d/af/f8/2daff8e0823e51dd752704a47d5b795c.png"/>
                                <Details>
                                    <ProductName><b>Product: </b>Super Shoes</ProductName>
                                    <ProductId><b>ID: </b>1468431131</ProductId>
                                    <ProductColor color="#0e0e0e"/>
                                    <ProductSize><b>Size:</b> M</ProductSize>
                                </Details>
                            </ProductDetail>
                            <PriceDetail>
                                <ProductAmmountContainer>
                                    <Add style={{cursor: 'pointer'}}/>
                                    <ProductAmmount>2</ProductAmmount>
                                    <Remove style={{cursor: 'pointer'}} />
                                </ProductAmmountContainer>
                                <ProductPrice>10000$</ProductPrice>
                            </PriceDetail>
                        </Product>
                        
                    </Info>
                    <Summary>summary</Summary>

                </Bottom>
            </Wrapper>
            <Footer/>
        </Container>
    )
}

export default Cart
