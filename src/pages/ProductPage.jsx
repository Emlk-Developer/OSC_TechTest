
import { useLoaderData, useParams } from "react-router-dom";
import { getAProduct } from '../services/apiMockShopData';
import styled from 'styled-components';
import AddToBasketCTA from "../components/AddToBasketCTA";
import { useState } from "react";
import { useProduct } from "../contexts/contexts";

const ProductSection = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 15px;
  padding: 10px;

  img {
    width: 100%;
  }

  p {
    font-size: 18px;
    font-weight: 600;
    text-align: left;
    margin: 0;
  }
  `
const ProductInformation = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  align-items:flex-start;

  select {
    width: 100px;
    height: 40px;
  }
`

export default function Product() {
    const {id} = useParams();
    const [quantity, setQuantity] = useState(1);
    const product = useLoaderData();
    const {getformatCurrencyCode} = useProduct();
    const {amount, currencyCode} = product?.variants?.edges[0]?.node?.price || {};

      
    return (
     <ProductSection>
      <img src={product?.featuredImage?.url} alt={product?.node?.featuredImage?.id}/>
      <ProductInformation>
        <h2>{product?.title}</h2>
        <p>
          <label htmlFor="price">Price: </label>
          <span id="price">{getformatCurrencyCode(currencyCode)}{amount}</span> 
        </p>
        <p>{product?.description}</p>
        <label htmlFor='quantity'>Quantity: </label>
        <select onChange={(e) =>setQuantity(e.target.value)} id="quantity">
          {Array.from({length:10}, (_, i) => i + 1).map ((num) => (<option value={num} key={num}>{num}</option>))}
        </select>
        <AddToBasketCTA id={id} quantity={quantity} title={product?.title} currency={getformatCurrencyCode(currencyCode)} amount={amount}/>
      </ProductInformation>
    </ProductSection>
  )

}

// eslint-disable-next-line react-refresh/only-export-components
export async function loader({ params }) {
  const data = await getAProduct(params.id);
  return data;

}