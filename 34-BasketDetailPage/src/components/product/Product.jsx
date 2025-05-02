import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { FaHeart } from "react-icons/fa";
import { useDispatch, useSelector } from 'react-redux';
import { updateWishlist } from '../../redux/features/WishlistSlice';
import { toast } from 'react-toastify'
import { updateBasket } from '../../redux/features/BasketSlice';

const Product = ({ product }) => {
    let { wishlist } = useSelector((state) => state.wishlist)
    let {basket } = useSelector((state) => state.basket)
    let dispatch = useDispatch()

    let existProduct = wishlist.find((item) => item.id == product.id)

    const handleWishlist = () => {
        
        dispatch(updateWishlist(product))
        if (existProduct) {
            toast.info("Product removed from wishlist")
        } else {
            toast.success("Product added to wishlist")
        }
    }

    const handleBasket = () => {
        dispatch(updateBasket(product))
        toast.success("Product added to basket")
    }
    

    return (
    <div className='col-3'>
        <Card style={{width: "18rem", padding: "10px", position: "relative"}}>
            <FaHeart style={{position: "absolute", right: "10px", cursor: "pointer", color: existProduct ? "red" : "black"}}
                onClick={handleWishlist}
            />
        <Card.Img
            variant="top"
            src={product.image}
            style={{ height: "18rem", padding: "10px"}}
        />
        <Card.Body>
            <Card.Title>{`${product.title.slice(0, 20)}...`}</Card.Title>
            <Card.Text>{product.price}</Card.Text>
            <Button variant="primary" style={{width: "100%"}} onClick={handleBasket}>Add Basket</Button>
        </Card.Body>
        </Card>
    </div>
  )
}

export default Product