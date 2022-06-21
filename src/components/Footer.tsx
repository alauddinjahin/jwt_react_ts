import React from 'react'
import { Container, Navbar } from 'react-bootstrap';
import styles from "./../assets/css/Footer.module.css";
const Footer = () => {
  return (
    <>
      <div className={styles.FooterBg}>
        <Container className={styles.footerContainer}>
          <div>
            <Navbar.Brand>React JWT </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
          </div>
        </Container>
      </div>
    </>
  )
}

export default Footer