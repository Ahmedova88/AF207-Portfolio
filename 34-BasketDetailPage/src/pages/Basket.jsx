import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toast } from 'react-toastify'
import { clearBasket, decrementCount, incrementCount, updateBasket } from '../redux/features/BasketSlice'
import { Button, Table } from 'react-bootstrap'

const Basket = () => {
  let { basket } = useSelector((state) => state.basket)
  let dispatch = useDispatch()

  const handleRemove = (product) => {
    dispatch(updateBasket(product))
    toast.info(`Product removed from basket...`)
  }

  const handleClear = () => {
    dispatch(clearBasket())
    toast.info("Basket cleared...")
  }

  const handleIncrement = (product) => {
    dispatch(incrementCount(product))
  }
  
  const handleDecrement = (product) => {
    dispatch(decrementCount(product))
  }

  return (
    <div className='container'>
      <div className='d-flex justify-content-between align-items-center my-3'>
        <h3>My Basket</h3>
        {basket.length > 0 && (
          <Button variant="danger" onClick={handleClear}>
            Remove All
          </Button>
        )}
      </div>

      <Table className='text-center' striped bordered hover>
        <thead>
          <tr>
            <th>Image</th>
            <th>Title</th>
            <th>Price</th>
            <th>Count</th>
            <th>Setting</th>
          </tr>
        </thead>
        <tbody>
          {basket &&
            basket.map((product) => (
              <tr key={product.id} style={{ verticalAlign: "middle" }}>
                <td>
                  <img style={{ width: "130px", height: "100px" }} src={product.image} alt="" />
                </td>
                <td>{product.title}</td>
                <td>{product.price}</td>
                <td>
                  <div style={{display: "flex", justifyContent: "center", alignItems: "center", gap: "5px"}}>
                    <button onClick={() => handleDecrement(product)} style={{border: "none", background: "transparent",}}>-</button>
                    <span>{product.count}</span>
                    <button onClick={() => handleIncrement(product)} style={{border: "none",  background: "transparent",}}>+</button>
                  </div>
                </td>
                <td>
                  <Button variant="danger" onClick={() => handleRemove(product)}>
                    Remove
                  </Button>
                </td>
              </tr>
            ))}
        </tbody>
      </Table>
    </div>
  )
}

export default Basket