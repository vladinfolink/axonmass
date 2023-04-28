import React from 'react'
import { useDispatch, useSelector } from 'react-redux';

type Props = {}

const SendCart = (props: Props) => {
  const dispatch = useDispatch();
  const cart = useSelector((state: any) => state.cart);
  
  return (
    <div>SendCart</div>
  )
}

export default SendCart