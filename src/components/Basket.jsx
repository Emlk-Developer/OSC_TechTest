/* eslint-disable react/prop-types */

export default function Basket({basket}) {
  return (
      <li key={basket?.id}>
          {basket?.title} - {basket?.currency}{basket?.amount}  qty: {basket?.quantity}
      </li> 
  )
}
