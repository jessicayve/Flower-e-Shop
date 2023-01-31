import React from 'react'
import styled from 'styled-components'
import { SearchIcon } from '@chakra-ui/icons'
import { Badge } from '@mui/material'
import { ShoppingCart } from 'phosphor-react';



const Container = styled.div`
height: 60px;

`
const Wrapper = styled.div`
padding: 10px 20px;
display: flex;
align-items: center;
justify-content: space-around;

`
const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const Language = styled.span`
    font-size: 14px;
    cursor: pointer;
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
`


const Center = styled.div`
flex: 1;
text-align: center;
`

const Logo = styled.h1`
    font-weight: bold;

`
const Right = styled.div`
flex: 1;
display: flex;
align-items: center;
justify-content: flex-end;
`

const MenuItem = styled.div`
    font-size: 14px;
    cursor: pointer;
    align-items: center;
    margin-left: 25px;
`



const Navbar = () => {

    return (
        <Container>
            <Wrapper>
                <Left>
                    <Language>EN</Language>
                    <SearchContainer>
                        <Input />
                        <SearchIcon style={{color:"gray", fontSize:14}}/>

                    </SearchContainer>
                </Left>
                <Center><Logo>Flower-e-Shop</Logo></Center>
                <Right>
                    <MenuItem>REGISTER</MenuItem>
                    <MenuItem>SIGN IN</MenuItem>
                    <MenuItem>
                        <Badge badgeContent={4} color="primary">
                            <ShoppingCart size={32} />
                        </Badge>
                    </MenuItem>
                </Right>
            </Wrapper>
        </Container>
    )
}

export default Navbar;
