import React, { useState } from 'react';
import { useHistory } from "react-router-dom";

import api from '../services/api.js'

import { login, setUserData } from '../utils/auth';

import { AiOutlineUser } from "react-icons/ai";
import { RiShieldKeyholeLine } from "react-icons/ri";

import { BiLogInCircle } from "react-icons/bi";

import typingImg from '../assets/typing.jpg'

import styles from "../styles/pages/Login.module.css";

export function Login() {


    const history = useHistory();

    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    const [savedEmail, setSavedEmail] = useState('');

    var user = {
        email: email,
        password: password
    };

    async function handleLogin(e) {
        e.preventDefault();
        let dataToSend = {
            userData:{
                email: user.email,
                password: user.password,
                nome: user.nome
            }
        };    
        const usuario = await api.post('/login', dataToSend, {
            
        }, {
            headers: {
                'Content-Type': 'application/json'                
            }
        }).then(response => {
            /* console.log(response.data) */
            if(response.data.success){                            
                login(response.data.token);
                setUserData(JSON.stringify(response.data.userData))                
                history.push('/'); 
            }
            
        })
    }

    return (
        <>
            <img src={typingImg} alt="Pessoa digitando" className={styles.loginImg} />
            <div className={styles.containerPage}>

                <div className={styles.cardLogin}>

                    {/* <div className={styles.leftContainer}>  
                                
                   </div> */}
                    <form className={styles.formContainer} onSubmit={handleLogin}>
                        <div className={styles.logoContainer}>
                            <h1>Login</h1>
                        </div>

                        <div className={styles.inputContainer}>
                            <AiOutlineUser size={30} color="rgb(50, 50, 50)" className={styles.icon} />
                            <input
                                placeholder="E-mail..."
                                className={styles.input}
                                value={email}
                                onChange={e => setEmail(e.target.value)}
                                autoComplete="on"
                                autoCapitalize={false}
                                autoCorrect={false}
                                required={true}
                                spellCheck={false}
                            />
                        </div>

                        <div className={styles.inputContainer}>
                            <RiShieldKeyholeLine size={30} color="rgb(50, 50, 50)" className={styles.icon} />
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
                        <div className={styles.checkBox}>
                            <input type="checkbox" id="userEmail" name="userEmail" value={savedEmail} />
                            <span>Lembrar-me do e-mail</span>
                        </div>

                    </form>
                </div>
            </div>

        </>
    )
}



