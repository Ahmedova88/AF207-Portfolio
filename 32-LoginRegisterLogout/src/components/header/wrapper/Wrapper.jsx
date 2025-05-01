import React from 'react'
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import Dropdown from '../../../utils/Dropdown';
import './Wrapper.css'

const Wrapper = () => {
  return (
    <div className='wrapper'>
      <FavoriteIcon style={{cursor: "pointer"}}/>
      <ShoppingBasketIcon style={{cursor: "pointer"}}/>
      <Dropdown/>
    </div>
  )
}

export default Wrapper