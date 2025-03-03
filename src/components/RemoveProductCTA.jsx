import styled from 'styled-components';
import { useProduct } from "../contexts/contexts";
import Notification from "./Notification";
import { useState } from "react";

const Button = styled.button`
    border-radius: 4px;
    padding: 10px 15px;
    border: none;
    background-color: transparent;
    color: var(--deepBlue);
    width: fit-content;

    &:hover {
        color: var(--yellow);
        cursor: pointer;
    }

`

export default function RemoveProductCTA(productId) {
  const {notification, setNotification, setBasket} = useProduct();

      const handleRemoveItem = (productId) => {
          //update localStorage with the new basket information
          const basket = JSON.parse((localStorage.getItem('basket')));
          const notificationStatus = {status: true, message:'Product Removed from Basket'}
          const removeProduct = basket.filter((item) => item.id !== productId.productId);
          setBasket(removeProduct);
          localStorage.setItem('basket', JSON.stringify(removeProduct))
          setNotification(notificationStatus);
          return;
      }
      
  return (
    <>
      <Button onClick={() => handleRemoveItem(productId)}> Remove Product</Button>
      {notification &&
      <Notification notification={notification.true} onChange={setNotification} message={notification.status}/>
      }
    </>
  )
}
