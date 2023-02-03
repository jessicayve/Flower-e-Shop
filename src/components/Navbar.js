import React from 'react'
import styled from 'styled-components'
import { SearchIcon } from '@chakra-ui/icons'
import { Badge } from '@mui/material'
import { ShoppingCart } from 'phosphor-react'
import { useNavigate } from 'react-router-dom'
import { goToHomePage, goToLoginPage, goToRegisterPage, goToCartPage } from '../routes/coordinator'
import {mobile} from '../responsive'




const Container = styled.div`
height: 60px;
${mobile({height:"50px"})}
`
const Wrapper = styled.div`
padding: 10px 20px;
display: flex;
align-items: center;
justify-content: space-around;
${mobile({padding:"10px 0px"})}

`
const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const Language = styled.span`
    font-size: 14px;
    cursor: pointer;
    ${mobile({display:"none"})}
`
const SearchContainer = styled.div`
    border: 1px solid lightgray;
    align-items: center;
    display: flex;
    margin-left: 25px;
    padding: 5px;
`

const Input = styled.input`
    border: none;
    ${mobile({width:"50px"})}
`


const Center = styled.div`
flex: 1;
text-align: center;
`

const Logo = styled.h1`
    font-weight: bold;
    font-size: 38px;
    color:coral;
    cursor: pointer;
    ${mobile({fontSize:"15px"})}

`
const Right = styled.div`
flex: 1;
display: flex;
align-items: center;
justify-content: flex-end;
${mobile({flex:2, justifyContent:"center"})}
`

const MenuItem = styled.div`
    font-size: 14px;
    cursor: pointer;
    align-items: center;
    margin-left: 25px;
    ${mobile({fontSize:"12px", marginLeft:"10px"})}
`



const Navbar = () => {

    const navigate = useNavigate()

    return (
        <Container>
            <Wrapper>
                <Left>
                    <Language>EN</Language>
                    <SearchContainer>
                        <Input placeholder="Search" />
                        <SearchIcon style={{ color: "gray", fontSize: 14 }} />

                    </SearchContainer>
                </Left>
                <Center><Logo onClick={() => goToHomePage(navigate)}>Flower-e-Shop</Logo></Center>
                <Right>
                    <MenuItem onClick={() => goToRegisterPage(navigate)}>REGISTER</MenuItem>
                    <MenuItem onClick={() => goToLoginPage(navigate)}>SIGN IN</MenuItem>
                    <MenuItem>
                        <Badge badgeContent={2} color="primary">
                            <ShoppingCart size={32} onClick={() => goToCartPage(navigate)} />
                        </Badge>
                    </MenuItem>
                </Right>
            </Wrapper>
        </Container>
    )
}

export default Navbar;
