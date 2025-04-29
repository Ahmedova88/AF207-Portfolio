import React from 'react';
import { FaEdit } from 'react-icons/fa';
import { MdDelete } from 'react-icons/md';
import styles from './Product.module.css';

const Product = ({ product, deleteProd, editProd }) => {
  return (
    <tr>
      <td>{product.title}</td>
      <td>${parseFloat(product.price).toFixed(2)}</td>
      <td>

      <MdDelete className={`${styles.icon} ${styles.deleteIcon}`} onClick={deleteProd} />
      <FaEdit className={`${styles.icon} ${styles.editIcon}`} onClick={editProd} />
      </td>
    </tr>
  );
};

export default Product;
