import React from 'react'
import styled from 'styled-components'
import {FavoriteBorder, SearchOutlined, ShoppingCartOutlined} from "@material-ui/icons"



const Circle = styled.div`
    width: 200px;
    height: 200px;
    border-radius: 50%;
    background: white;
    position: absolute;
`
const Info = styled.div`
    opacity: 0;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background-color: rgba(0,0,0,0.2);
    z-index: 3;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.3s ease;
`
const Icon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background: white;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 10px;
    transition: all 0.5s ease;
    cursor: pointer;

    &:hover {
        background: #d6d4d4;
        transform: scale(1.1);
    }
`

const Container = styled.div`
    flex: 1;
    margin: 5px;
    min-width: 280px;
    height: 350px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #f5fbfd;
    position: relative;
    &:hover ${Info} {
        opacity: 1;
    }
`

const Image = styled.img`
    height: 75%;
    z-index: 2;
`

const ProductItems = ({item}) => {
    return (
        <Container>
            <Circle/>
            <Image src={item.img} />
            <Info>
                <Icon>
                    <ShoppingCartOutlined />
                </Icon>
                <Icon>
                    <SearchOutlined />
                </Icon>
                <Icon>
                    <FavoriteBorder />
                </Icon>
            </Info>
        </Container>
    )
}

export default ProductItems
