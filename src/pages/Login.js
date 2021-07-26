import React, { useState } from 'react';
import axios from 'axios';
import api from '../services/api.js'

import Lottie from 'react-lottie';
import { FaUserAlt } from "react-icons/fa";
import { RiLockPasswordLine } from "react-icons/ri";
import { BiLogInCircle } from "react-icons/bi";

import styles from "../styles/pages/Login.module.css";

import loginAnimation from '../assets/lotties/login.json'

import logoImg from '../assets/logotipo.png'


export function Login() {

    const [user, setUser] = useState();
    const [password, setPassword] = useState();    

    const [animationState, setAnimationState] = useState({
        isStopped: false, isPaused: false
    });

    const defaultOptions = {
        loop: true,
        autoplay: true, 
        animationData: loginAnimation,
        rendererSettings: {
          preserveAspectRatio: 'xMidYMid slice'
        }
      };

    async function handleLogin(){
        const usuario = await api.get('/users', {
            params:{
                'email': user,                
            }
        }).then(response => {
            console.log(usuario)
        })
    }
     
    return (
        <>
           
            <div className={styles.containerPage}>
                <div className={styles.cardLogin}>
                    <form className={styles.formContainer} onSubmit={handleLogin}>
                        <div className={styles.logoContainer}>
                            <span className={styles.logoTextProjeto}>Projeto<br /><span className={styles.logoTextReciclagem}>RECICLAGEM</span></span>
                            <img src={logoImg} alt="logo" className={styles.logo}/>
                        </div>

                        <div className={styles.inputContainer}>
                            <FaUserAlt size={28} color="rgb(70, 131, 133)" />
                            <input
                                placeholder="Usuário..."
                                className={styles.input}
                                value={user}
                                onChange={e => setUser(e.target.value)}
                                autoCapitalize={false}
                                autoCorrect={false}
                                required={true}
                                spellCheck={false}
                            />
                        </div>

                        <div className={styles.inputContainer}>
                            <RiLockPasswordLine size={32} color="rgb(70, 131, 133)" />
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
                        <div className={styles.containerSmallText}>
                            <small className={styles.smallLink}>Esqueceu a senha?</small>
                            <small className={styles.smallLink}>Solicite o acesso</small>
                        </div>
                         <button className={styles.button}>Login&nbsp;<BiLogInCircle size={28} color="#fff" /></button>
                    </form>
                   <div className={styles.lottieContainer}>
                        <Lottie 
                                    options={defaultOptions}
                                    height={450}
                                    width={650}                        
                                    isStopped={animationState.isStopped}
                                    isPaused={animationState.isPaused}
                                /> 
                   </div>
                </div>
                    
            </div>
            
        </>
    )
}



