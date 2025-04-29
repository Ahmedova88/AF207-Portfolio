import React from 'react';
import Table from 'react-bootstrap/Table';
import Product from '../components/product/Product';

const Products = ({ products, onDelete, onEdit, setIsModalOpen }) => {
  return (
    <div style={{
        margin: "0 auto",
        padding: "20px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
      }}>
      <h2 style={{textAlign: "center", marginBottom: "20px"}}>Products</h2>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Title</th>
            <th>Price ($)</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <Product
            key={product.id}
            product={product}
            deleteProd={() => onDelete(product.id)}
            editProd={() => {
              onEdit(product);
              setIsModalOpen(true);
              setTimeout(() => {
                titleRef.current.value = product.title;
                priceRef.current.value = product.price;
              }, 0);
            }}
          />
                   
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default Products;

