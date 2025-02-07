/* eslint-disable react/prop-types */

import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { useProduct } from '../contexts/contexts';

const ProductCardListproduct = styled.li`
display: flex;
flex-direction: column;
border: 1px solid #b6bcbf;
box-shadow: 3px 3px #ccd8de;
border-radius: 5px;
padding: 10px;
`

export default function ProductCard({product}) {
    const formatId = product.node.id.split('/')[product.node.id.split('/').length -1]
    const navigate = useNavigate();
    const {getformatCurrencyCode} = useProduct();
    const {amount , currencyCode } = product?.node?.variants?.edges[0]?.node?.price || {}

    const handleNavigation = (id) => {
        navigate(`/products/${id}`)
    }

  return (
    <ProductCardListproduct key={product?.node?.key}>
        <button onClick={() => handleNavigation(formatId)}>            
            <h3>{product?.node?.title}</h3>
            <div>Price: {getformatCurrencyCode(currencyCode)}{amount} </div>
            <img src={product?.node?.featuredImage?.url} alt={product?.node?.featuredImage?.id} width={250}/>
        </button>
    </ProductCardListproduct>
  )
}
