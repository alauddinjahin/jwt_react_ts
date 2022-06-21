import React, { useEffect, useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import styles from '../assets/css/FormTwo.module.css';
import { getUserData, setData } from '../Redux/FormDataSlice';

type CommonInputType = string | null;

const FormTwo = () => {
  const formData = useSelector(getUserData);
  const dispatch = useDispatch();
  const [password, setPassword] = useState<CommonInputType>(formData.password);

  useEffect(()=>{
    dispatch(setData({
      ...formData,
      password
    }))
  },[password])

  return (
    <Container>
        <Row>
            <Col>
                <div className={styles.FormColWrap}>
                    <input type="password" placeholder='Password' onChange={(e)=> setPassword(e.target.value)}/>
                    <input type="password" placeholder='Confirm Password'/>
                </div>
            </Col>
        </Row>
    </Container>
  )
}

export default FormTwo