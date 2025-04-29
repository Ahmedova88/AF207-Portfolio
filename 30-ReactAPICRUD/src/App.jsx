import axios from 'axios'
import React, { useEffect, useRef, useState } from 'react'
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Products from './pages/Products';
import { Spinner } from 'react-bootstrap';
import './App.css';

function App() {
  const baseUrl = "https://fakestoreapi.com/products"

  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const titleRef = useRef();
  const priceRef = useRef();
  const [editingProduct, setEditingProduct] = useState(null);



  let getAllProducts = async () => {
    try {
      let res = await axios(baseUrl)
      setProducts(res.data)
      console.log(res.data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false); 
    }
  }
  
  let addProduct = () => {
    if (!titleRef.current.value || !priceRef.current.value) {
      toast.error('Fill all fields!')
      return
    }

    let newProduct = {
      id: Date.now(),
      title: titleRef.current.value,
      price: priceRef.current.value,
    }
    console.log(newProduct);
    
    setProducts([...products, newProduct])
    setIsModalOpen(false);
    toast.success('Product added!');
  }

  let deleteProduct = (id) => {
    let filteredProducts = products.filter((item) => item.id !== id)
    toast.success('Product deleted successfully!');
    setProducts([...filteredProducts])
  }

  let updateProduct = (product) => {
    let updatedProducts = products.map((prod) => prod.id === product.id ? {...prod, ...product} : prod)

    setProducts([...updatedProducts])
    toast.success('Product updated!');
  }

  let handleEditProduct = (product) => {
    setEditingProduct(product);
    setIsModalOpen(true);
  
    setTimeout(() => {
      if (titleRef.current && priceRef.current) {
        titleRef.current.value = product.title;
        priceRef.current.value = product.price;
      }
    }, 0);
  };
  

  useEffect(() => {
    getAllProducts()
  }, [])

  return (
    <>
    {loading ? (
        <div className='spinnerContainer'>
          <Spinner animation='border' variant='primary'/>
        </div>
      ) : (
      <>
      <button className='addButton' onClick={() => setIsModalOpen(true)}>Add</button>

            <ToastContainer />
            <Products
              products={products} 
              onDelete={deleteProduct}
              onEdit={handleEditProduct}
            />
      </>
    )}
    {isModalOpen && (
        <div className='modalOverlay'>
          <div className='modalContent'>
            <h3>{editingProduct ? 'Edit Product' : 'Add Product'}</h3>
            <input type="text" placeholder="Title" ref={titleRef} />
            <input type="number" placeholder="Price" ref={priceRef} />
            <div className='buttonGroup'>
            <button className='saveButton'
          onClick={() => {
            if (!titleRef.current.value || !priceRef.current.value) {
              toast.error('Fill all fields!');
              return;
            }

            if (editingProduct) {
              updateProduct({
                id: editingProduct.id,
                title: titleRef.current.value,
                price: priceRef.current.value
              });
            } else {
              addProduct();
            }

            setEditingProduct(null);
            setIsModalOpen(false);
          }}
        >
          {editingProduct ? 'Update' : 'Save'}
          </button>

              <button className='cancelButton' onClick={() => {
                setEditingProduct(null)
                setIsModalOpen(false)
                }}>Cancel</button>
            </div>
          </div>
        </div>
      )}
    </>


  )
}

export default App