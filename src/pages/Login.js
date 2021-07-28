import React, { useState } from 'react';
import { useHistory } from "react-router-dom";

import api from '../services/api.js'

import { login, setUserData } from '../utils/auth';


import { BiLogInCircle } from "react-icons/bi";
import typingImg from '../assets/typing.jpg'

import styles from "../styles/pages/Login.module.css";

export function Login() {
    
    
    const history = useHistory();
    
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();  
    
    var user = {
        email: email,
        password: password        
    }

    

    /* async function handleLogin(e){
        e.preventDefault();
        let dataToSend = {
            userData:{
                email: user.email,
                password: user.password
            }
        };       
        const usuario = await api.post('/login', dataToSend, {
             headers: {
                    'Content-Type': 'application/json',                    
              }}).then(response =>{
                  console.log(response.data)
                  if(response.data.success){
                      localStorage.setItem('@projetoreciclagem:token', response.data.token);
                      history.push('/');
                  }
              })
        } */

        async function handleLogin(e){
            e.preventDefault();
            let dataToSend = {
                userData:{
                    email: user.email,
                    password: user.password
                }
            };       
            const usuario = await api.post('/login', dataToSend, {
                 headers: {
                        'Content-Type': 'application/json',                    
                  }}).then(response =>{
                      console.log(response.data)
                      if(response.data.success){    
                          login(response.data.token);
                          setUserData(JSON.stringify(response.data.userData))
                          history.push('/');                          
                      }
                  })
                
                          
            }
     
    return (
        <>
           
            <div className={styles.containerPage}>
                <div className={styles.cardLogin}>
                    
                   <div className={styles.leftContainer}>  
                                <img src={typingImg} alt="Pessoa digitando" className={styles.loginImg} />
                   </div>
                   <form className={styles.formContainer} onSubmit={handleLogin}>
                         <div className={styles.logoContainer}>
                            <h1>Login</h1>
                        </div> 

                        <div className={styles.inputContainer}>
                            
                            <input
                                placeholder="E-mail..."
                                className={styles.input}
                                value={email}
                                onChange={e => setEmail(e.target.value)}
                                autoComplete={true}
                                autoCapitalize={false}
                                autoCorrect={false}
                                required={true}
                                spellCheck={false}
                            />
                        </div>

                        <div className={styles.inputContainer}>
                            
                            <input
                                placeholder="Senha..."
                                className={styles.input}
                                type="password"
                                value={password}
                                onChange={e => setPassword(e.target.value)}
                                autoCapitalize={false}
                                autoCorrect={false}
                                required={true}
                                spellCheck={false}
                                maxLength={6}
                             />
                        </div>                        
                        <button type="submit" className={styles.button}>Login&nbsp;<BiLogInCircle size={28} color="#fff" /></button>
                        <span>Produzido por: equipe de padronização de depósitos</span>
                    </form>
                </div>                    
            </div>
            
        </>
    )
}



