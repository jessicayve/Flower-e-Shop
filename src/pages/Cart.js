import Navbar from '../components/Navbar'
import Announcement from '../components/Announcement'
import Footer from '../components/Footer'
import { Minus, Plus } from 'phosphor-react'
import { Container,Wrapper,Image,Details,ProductName,ProductId,ProductSize,PriceDetail,Hr,Summary,SummaryTitle,SummaryItem,SummaryItemText,SummaryItemPrice,Button, Title, Top, TopButton, TopTexts, TopText, Bottom, Info, Product, ProductDetail, ProductAmountContainer, ProductAmount,ProductPrice} from './CartStyle'


const Cart = () => {
  return (
    <Container>
        <Navbar/>
        <Announcement/>
        <Wrapper>
        <Title>YOUR CART</Title>
        <Top>
            <TopButton>CONTINUE SHOPPING</TopButton>
            <TopTexts>Shopping Cart(2)</TopTexts>
            <TopText>Your Wishlist(0)</TopText>
            <TopButton type="filled">CHECKOUT NOW</TopButton>

        </Top>
        <Bottom>
            <Info>
                <Product>
                    <ProductDetail>
                        <Image src="https://images.selfridges.com/is/image/selfridges/R03731026_M?$PDP_M_ZOOM$"/>
                        <Details>
                            <ProductName><b>Product: </b> ROSE BOUQUET </ProductName>
                            <ProductId><b>ID:</b> p001 </ProductId>
                            <ProductSize><b> Size: </b> Large </ProductSize>
                        </Details>
                    </ProductDetail>
                    <PriceDetail>
                    <ProductAmountContainer>
                <Minus size={18} />
                <ProductAmount> 1 </ProductAmount>
                <Plus size={18} />
                </ProductAmountContainer>
                <ProductPrice> $ 90 </ProductPrice>
                    </PriceDetail>
                </Product>
                <Hr/>
                <Product>
                    <ProductDetail>
                        <Image src="https://images.selfridges.com/is/image/selfridges/R03749378_M?$PDP_M_ZOOM$"/>
                        <Details>
                            <ProductName><b>Product: </b> VASE AND CANDLE </ProductName>
                            <ProductId><b>ID:</b> p002 </ProductId>
                            <ProductSize><b>Size: </b> Large </ProductSize>
                        </Details>
                    </ProductDetail>
                    <PriceDetail>
                    <ProductAmountContainer>
                <Minus size={18} />
                <ProductAmount> 1 </ProductAmount>
                <Plus size={18} />
                </ProductAmountContainer>
                <ProductPrice> $ 60</ProductPrice>
                    </PriceDetail>
                </Product>
            </Info>
            <Summary>
            <SummaryTitle>ORDER SUMMARY</SummaryTitle>
            <SummaryItem>
              <SummaryItemText>Subtotal</SummaryItemText>
              <SummaryItemPrice>$ 150</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Estimated Shipping</SummaryItemText>
              <SummaryItemPrice>$ 5.90</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Shipping Discount</SummaryItemText>
              <SummaryItemPrice>$ -5.90</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem type="total">
              <SummaryItemText>Total</SummaryItemText>
              <SummaryItemPrice>$ 150</SummaryItemPrice>
            </SummaryItem>
            <Button>CHECKOUT NOW</Button>
          </Summary>
        </Bottom>
        </Wrapper>
        <Footer/>

    </Container>
  )
}

export default Cart