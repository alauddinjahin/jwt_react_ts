import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import styles from "./../assets/css/Home.module.css";

const Home = () => {
  return (
    <>
      <Header />
      <div className={styles.bgimage}>
        <h2>This is Home</h2>
      </div>
      <Footer />
    </>
  )
}

export default Home