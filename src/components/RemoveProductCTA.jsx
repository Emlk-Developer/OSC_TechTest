import styled from 'styled-components';
import { useProduct } from "../contexts/contexts";
import Notification from "./Notification";
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

export default function RemoveProductCTA(productId) {
  const [notification, setNotification] = useState(false);

      const handleRemoveItem = (productId) => {
          //update localStorage with the new basket information
          const basket = JSON.parse((localStorage.getItem('basket')));
          const removeProduct = basket.map(basketItem => basketItem.filter((item => item.id === productId)))
          setNotification(true);
          return;
      }
      
  return (
    <>
      <a onClick={() => handleRemoveItem(productId)}> | Remove Product</a>
      <Notification notification={notification} onChange={setNotification} message={'Product Removed From Basket'}/>
    </>
  )
}
