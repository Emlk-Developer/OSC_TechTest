import {useEffect, useState } from 'react';
import { useProduct } from '../contexts/contexts';
import styled from 'styled-components';
import shoppingBasket from '../images/shopping-basket.png';
import Basket from './Basket';


const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 16px 16px 0 0;
  position: relative;

  @media (max-width: 480px) {
    width: 100%;
    justify-content: center
    }

`
const Button = styled.button`
  background-color: var(--lightYellow);
  color: #000;
  display: flex;
  align-items: center;
  gap: 5px;
  padding: 8px 16px;
  border-radius: 4px;
  border-color: var(--deepPurple);
  font-size: 16px;
  font-weight: 600;
  height: 45px;
`
const BasketList = styled.ul`
  position: absolute;
  background-color: #FFF;
  right:15px;
  top: 50px;
  padding: 20px;
  width: max-content;
  border: 3px solid var(--deepPurple);
  border-radius: 4px;
  list-style-type: none;

  @media (max-width: 480px) {
    justify-content: space-between;
    width: auto;
    }

  li {
    margin-bottom: 2px;
    text-align: left;

    &.total {
      border-top: 1px dashed var(--deepPurple);
      padding: 10px 0 0;
      margin: 20px 0 0 ;
      font-weight: 700;
      font-size: 19px;
    }
  }
`

export default function BasketItems() {
  //pass in context props
  const {basket, setBasket} = useProduct([]);
  const [showBasket, setShowBasket] = useState(false)
  
  //runs once at the beginning to fetch the previusly created basket items
  useEffect(() => {
    const basketItems = localStorage.getItem('basket');
    if (basketItems) {
      //local storage saves as a string, parse to save it in state as an object
      setBasket(JSON.parse(basketItems))
    }
  },[])

  // const handleClearBasket = () => {
  //   const emptyBasket = localStorage.setItem('basket', '');
  //   setBasket(emptyBasket);
  //   return;
  // }

  const itemAmount = basket.map(currentBasket => currentBasket.map(item => Number(item.amount)));
  const basketAmount = itemAmount.map(amount => amount.reduce((acc, cur) => acc + cur, 0));
  const basketTotal = basketAmount.reduce((acc, cur) => acc + cur, 0);

  return (
    <ButtonWrapper>
        <Button onClick={() => setShowBasket(!showBasket)}>
            <img src={shoppingBasket} alt='shopping basket' width='21px' height='21px' />
            {basket.length}
        </Button>
        {/* when showBasket is true, show basket */}
        {showBasket &&
          <BasketList>
            {basket.map((currentBasket) => currentBasket.map((basketItem) => <Basket basket={basketItem} key={basketItem.id}/>))}
            <li className='clearBasket'><button>Clear Basket</button></li>
            <li className='total'>Total: ${basketTotal}</li>
          </BasketList>
         }
    </ButtonWrapper>
  )
}
