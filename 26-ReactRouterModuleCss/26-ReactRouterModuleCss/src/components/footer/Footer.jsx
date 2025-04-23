import React from 'react'
import styles from './Footer.module.css';

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <p>Copyright © Your Website 2023</p>
      </div>
    </footer>
  )
}

export default Footer