/* eslint-disable react/prop-types */
import RemoveProductCTA from './RemoveProductCTA';

export default function Basket({basket}) {
  return (
      <li key={basket?.id}>
          {basket?.title} - {basket?.currency}{basket?.amount}  qty: {basket?.quantity}
          <RemoveProductCTA  productId={basket.id}/>
      </li> 
  )
}
