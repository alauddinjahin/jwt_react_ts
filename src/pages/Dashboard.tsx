import React from 'react'
import { useSelector } from 'react-redux';
import Footer from '../components/Footer'
import Header from '../components/Header'
import { getAuthUser } from '../Redux/AuthSlice';
import styles from "./../assets/css/Dashboard.module.css";

const Dashboard = () => {

  const authData = useSelector(getAuthUser);
  const { user } = authData;  

  return (
    <>
    <Header />
    <div className={styles.bgimage}>
      <h4>Welcome to Dashboard</h4>
      <h2>{user.name}</h2>
    </div>
    <Footer />
    </>
  )
}

export default Dashboard