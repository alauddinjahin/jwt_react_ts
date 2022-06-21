import axios from 'axios';
import React, { useState } from 'react'
import { Container } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import styles from '../assets/css/Login.module.css';
import FormOne from '../components/FormOne';
import FormTwo from '../components/FormTwo';
import { login } from '../Redux/AuthSlice';
import { getUserData } from '../Redux/FormDataSlice';

const Login = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const formData = useSelector(getUserData);
  const { name, email, password } = formData;

  const [step, setStep] = useState(1);
  const [error, setError] = useState(false);
  const [msg, setMsg] = useState('');

  const back = () => {
    let stepper = step - 1;
    if (stepper <= 1) {
      stepper = 1;
    }
    
    setStep(stepper);
  }

  const next = () => {

    setError(false)
    setMsg("")

    if (!name || !email) {
      setError(true)
      setMsg("All Fields are required!")
      return false;
    }


    let stepper = step + 1;
    if (stepper >= 2) {
      stepper = 2;
    }
    
    setStep(stepper);

  }

  const submitToLogin = async()=>{

    try{

      setError(false)
      setMsg("")

      if (!name || !email || !password) {
        setError(true)
        setMsg("All Field are required!")
        return false;
      }

      const { data } = await axios.post("/api/login", { name, email, password });

      if (data && data.success){
        dispatch(login({
          auth: true,
          user: {
            loggedIn: true,
            ...data.user,
            token: data.authorization.token
          }
        }))

        setMsg(data.message);
        setTimeout(() => navigate('/dashboard'),5000);
      }

    }catch(error){
      console.log(error);
      
    }
    

  }

  return (
    <Container>
      <div className={styles.loginWrap}>
        <div className={styles.FormBody}>
          {error ? (
            <div className='alert alert-danger'>{msg}</div>
          ) : (
              <div className={'alert alert-success' + msg ? '':'d-none'}>{msg}</div>
          )}

          {
            (() => {
              // eslint-disable-next-line default-case
              switch (step) {
                case 1: {
                  return (
                    <FormOne />
                  )
                }
                case 2: {
                  return (
                    <FormTwo />
                  )
                }
              }
            })()
          }
        </div>
        <div className={styles.FormFooter}>
          <button onClick={back} className={styles.BackBtn}>Back</button>
          {
            step && step <= 1 ? (
              <button onClick={next} className={styles.NextBtn}>Next</button>
            ) :
              (
                <button onClick={submitToLogin} className={styles.NextBtn}>Login</button>
              )
          }
        </div>
      </div>
    </Container>
  )
}

export default Login