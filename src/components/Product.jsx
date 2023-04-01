import { FavoriteBorderOutlined } from "@material-ui/icons";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { ShopContext } from "../context/shop-context";

const Container = styled.div`
  flex: 1;
  margin: 50px 5px 5px 5px;
  min-width: 280px;
  height: auto;
  position: relative;
  display: flex;
  flex-direction: column;
  background-color: white;
  border-bottom: 1px solid #c5c5c5;
  border-right: 1px solid #c5c5c5;
`;

const ProductContainer = styled.div`
  cursor: pointer;
`;

const Image = styled.img`
  width: 100%;
  z-index: 2;
`;

const Info = styled.div``;

const Title = styled.div`
  font-weight: 500;
  margin: 20px 10px 10px 10px;
`;

const Nut = styled.div`
  font-weight: 300;
  margin: 20px 10px 10px 10px;
`;

const Price = styled.div`
  color: #232323;
  margin: 10px;
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  margin: 10px 20px 10px 10px;
`;

const Button = styled.div`
  padding: 10px;
  background-color: #006600;
  font-size: 13px;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-weight: 300;
  transition: all 0.3s ease;
  &:hover {
    background-color: #194919;
  }
`;

const Icon = styled.div`
  margin: 10px 20px 10px 10px;
  cursor: pointer;
  transition: all 0.3s ease;
  &:hover {
    transform: scale(1.1);
  }
`;

const Product = (props) => {
  const { id, title, price, img, nut } = props.data;
  const { addToCart, cartItems, wishItems, addToWish } =
    useContext(ShopContext);
  const navigate = useNavigate();

  const cartItemAmount = cartItems[id];
  return (
    <Container>
      <ProductContainer onClick={() => navigate("/product/" + id)}>
        <Image src={img} />
        <Info>
          <Title>{title}</Title>
          <Nut>Nutri-Score : {nut}</Nut>
          <Price>${price}</Price>
        </Info>
      </ProductContainer>
      <ButtonContainer>
        <Icon>
          <FavoriteBorderOutlined onClick={() => addToWish(id)} />
        </Icon>
        <Button onClick={() => addToCart(id)}>
          Add to cart {cartItemAmount > 0 && <> ({cartItemAmount}) </>}
        </Button>
      </ButtonContainer>
    </Container>
  );
};

export default Product;
