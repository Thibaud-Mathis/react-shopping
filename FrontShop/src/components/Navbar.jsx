import React from 'react'
import styled from 'styled-components'
import Search from '@material-ui/icons/Search'
import ShoppingCart from '@material-ui/icons/ShoppingCartOutlined'
import Badge from '@material-ui/core/Badge'
import {mobile} from '../../src/responsive'

const Container = styled.div`
    /* height: 40px;
    /* background: transparents; */
    ${mobile({padding: "10px 0"})} 
`
const Wrapper = styled.div`
    height: 40px;
    padding: 10px 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    ${mobile({ padding: "10px 0px" })}
    /* background: linear-gradient(rgba(1,1,1,0.5), rgba(1,1,1,0)); */
`
const Left = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
`
const Language = styled.span `
    font-size: 14px;
    cursor: pointer;
    ${mobile({display: "none"})}
`
const Center = styled.div`
    flex: 1;
    text-align: center;
`
const Right = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    ${mobile({ flex: 2, justifyContent: "center" })}

`
const MenuItem = styled.div`
    font-size: 14px;
    cursor: pointer;
    margin-left: 25px;
    ${mobile({ fontSize: "12px", marginLeft: "10px" })}
`

const SearchContainer = styled.div`
    border: 1px solid lightgray;
    display: flex;
    align-items: center;
    margin-left: 25px;
    padding: 5px;
`
const Input = styled.input`
    border: none;
    ${mobile({ width: "50px" })}
`
const Logo = styled.h1`
    font-weight: 800;
    ${mobile({ fontSize: "24px" })}
`
// const SearchStyled = styled(Search)`
//     color: red;
//     font-size: 10;
// `

const Navbar = () => {
    return (
        <Container>
            <Wrapper>
                <Left>
                    <Language>EN</Language>
                    <SearchContainer>
                        <Search style={{color: "gray", fontSize: 16}}/>
                        <Input/>
                    </SearchContainer>
                </Left>
                <Center>
                    <Logo>LOCOS</Logo>
                </Center>
                <Right>
                    <MenuItem>REGISTER</MenuItem>
                    <MenuItem>SIGN IN</MenuItem>
                    <MenuItem>
                        <Badge badgeContent={4} color="secondary">
                            <ShoppingCart/>
                        </Badge>
                    </MenuItem>
                </Right>

                
            </Wrapper>
            
        </Container>
    )
}

export default Navbar

 