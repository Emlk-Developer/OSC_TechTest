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
  const {basket, setBasket, notification, setNotification} = useProduct();


  const handleAddToBasket = ({id, quantity, title, amount, currency}) => {
    //first check if id already exists
    const newItemId = id;
    const currentBasket = basket.filter((item) => item.id === newItemId);
    let notificationStatus;
      if (currentBasket.length) {
        notificationStatus = {status: true, message:'Product Already in Basket'}
        setNotification(notificationStatus);
        return;
      }
    const addedProduct = {id, title, amount, quantity, currency};
    const newBasket = [...basket, addedProduct]
    notificationStatus = {status: true, message:'Product Added to Basket'}
    setBasket(newBasket);
    setNotification(notificationStatus);
    //update localStorage with the new basket information
    localStorage.setItem('basket', JSON.stringify(newBasket));
    return;
  }
      
  return (
    <>
      <Button onClick={() => handleAddToBasket(id,quantity, title, amount, currency)}>Add to basket</Button>
      {notification &&
      <Notification notification={notification.status} onChange={setNotification} message={notification.message}/>
      }
    </>
  )
}
