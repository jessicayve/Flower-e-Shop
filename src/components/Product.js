import { Heart, MagnifyingGlass, ShoppingCart } from "phosphor-react"
import styled from "styled-components"

const Info = styled.div`
  opacity: 0;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.2);
  z-index: 3;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.5s ease;
  cursor: pointer;
  
`;

const Container = styled.div`
  flex: 1;
  margin: 5px;
  margin-top:26px ;
  min-width: 280px;
  height: 350px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1px;
  border:0.5px solid #f6f6e9;
  position: relative;
  &:hover ${Info}{
    opacity: 1;
  }
`;

const Circle = styled.div`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background-color: white;
  position: absolute;
`;

const Image = styled.img`
  height: 98%;
  width: 268px;
  z-index: 2;
  
`;

const Icon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px;
  transition: all 0.5s ease;
  &:hover {
    background-color: #e9f5f5;
    transform: scale(1.1);
  }
`;

const Product = ({ item }) => {

    return (
        <Container>
            <Circle />
            <Image src={item.img} />
            <Info>
                <Icon>
                    <ShoppingCart size={28} />
                </Icon>
                <Icon>
                    <MagnifyingGlass size={28} />
                </Icon>
                <Icon>
                    <Heart size={28} />
                </Icon>
            </Info>
        </Container>
    )
}

export default Product