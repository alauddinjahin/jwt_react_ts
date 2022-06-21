import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { getAuthUser, logout } from '../Redux/AuthSlice';
import styles from "./../assets/css/Header.module.css";
const Header = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const authData = useSelector(getAuthUser);
  const { auth } = authData;  


  const logOut =()=>{
    dispatch(logout())   
    navigate('/login')
  }

  return (
    <>
      <Navbar bg="light" expand="lg" className={styles.navBg}>
        <Container className={styles.navContainer}>
          <div>
            <Link to={'/'} style={{ textDecoration:'none', color:'#000' }}>React JWT</Link>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
          </div>
          <div>
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <NavLink to="/" className={(navData) => navData.isActive ? styles.activeMenu : styles.inActiveMenu }>Home</NavLink>
                {
                  auth ? (
                    <div 
                    onClick={logOut}
                    style={{ 
                      cursor:'pointer',
                      color:'#000'
                     }}>
                      logout
                    </div>
                  ):(
                    <NavLink to="login" className={(navData) => navData.isActive ? styles.activeMenu : styles.inActiveMenu}>Login</NavLink>
                  )
                }
              </Nav>
            </Navbar.Collapse>
          </div>
        </Container>
      </Navbar>
    </>
  )
}

export default Header