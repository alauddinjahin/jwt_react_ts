import React, { useEffect, useState } from 'react'
import {Container, Row, Col} from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import styles from '../assets/css/FormOne.module.css'
import { getUserData, setData } from '../Redux/FormDataSlice';

type CommonInputType = string|null;


const FormOne = () => {

  const formData = useSelector(getUserData); 

  const [name, setName] = useState<CommonInputType>(formData.name);
  const [username, setUsername] = useState<CommonInputType>(formData.username);
  const [email, setEmail] = useState<CommonInputType>(formData.email);
  
  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(setData({
      name,
      username,
      email
    }))
  }, [name, username, email])

  return (
    <Container>
        <Row>
            <Col>
                <div className={styles.FormColWrap}>
                    <input type="text" placeholder='Name' value={name || ''} onChange={(e)=> setName(e.target.value)}/>
                    <input type="text" placeholder='Username' value={username || ''} onChange={(e)=> setUsername(e.target.value)}/>
                    <input type="text" placeholder='Email'value={email || ''} onChange={(e)=> setEmail(e.target.value)}/>
                </div>
            </Col>
        </Row>
    </Container>
  )
}

export default FormOne