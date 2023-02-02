import styled from "styled-components"

const Container = styled.div`
  flex: 1;
  margin: 3px;
  height: 70vh;
  position: relative;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  cursor: pointer;
  
`;

const Info = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;
 
`;

const Title = styled.h1`
    color: #120907;
    font-weight: 300;
    font-size: 30px;
    margin-top: 530px;
    cursor: pointer;
  
`;



const CategoryItem = ({ item }) => {
    return (
      <Container>
        <Image src={item.img} />
        <Info>
          <Title>{item.title}</Title>
        </Info>
      </Container>
    );
  };

export default CategoryItem