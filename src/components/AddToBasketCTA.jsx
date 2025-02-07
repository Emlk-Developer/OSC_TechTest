import styled from 'styled-components';
import { useProduct } from "../contexts/contexts";
import Notification from "../components/Notification";
import { useState } from "react";

const Button = styled.button`
    border-radius: 4px;
    padding: 10px 15px;
    border: 1px solid var(--deepPurple);
    background-color: var(--lightYellow);
    color: var(--deepBlue);
    width: fit-content;

    &:hover {
        background-color: var(--yellow);
        cursor: pointer;
    }

`

export default function AddToBasketCTA(id, quantity, title, amount, currency) {
  const {basket, setBasket} = useProduct();
  const [notification, setNotification] = useState(false);

      const handleAddToBasket = ({id, quantity, title, amount, currency}) => {
          const addedProduct = [{id, title, amount, quantity, currency}]
          const newBasket = [...basket, addedProduct]
          /*initally tried to post the item to the mock shop api creat cart*/
          //postToCart(quantity, id);
          setBasket(newBasket);
          setNotification(true);
          //update localStorage with the new basket information
          localStorage.setItem('basket', JSON.stringify(newBasket));
          return;
      }
      
  return (
    <>
      <Button onClick={() => handleAddToBasket(id,quantity, title, amount, currency)}>Add to basket</Button>
      <Notification notification={notification} onChange={setNotification}/>
    </>
  )
}
