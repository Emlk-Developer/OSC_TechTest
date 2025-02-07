import { useEffect, useState } from "react";
import { getData } from "../services/apiMockShopData";
import ProductCard from "../components/ProductCard";
import styled from 'styled-components';

    const ProductListList = styled.ul`
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
        column-gap: 10px;
        row-gap: 10px;
        padding: 16px;
        margin: 0 auto;

        & :hover {
            background-color: #b6b3f2;
            cursor: pointer;
        }
    `

export default function ProductListPage() {

    useEffect( () => {
        
        const supermarketData = async() => {
            const data = await getData()
            setShopproducts(data)
        }
        supermarketData()
    },[])
    
        const [shopProducts, setShopproducts] = useState();
  return (
    <section>
        <h2>Our Available Products</h2>
        <ProductListList>
            {shopProducts?.map((product) => 
                <ProductCard product={product} key={product.node.id}/>
            )}
        </ProductListList> 
    </section>
  )
}
