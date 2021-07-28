import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import styles from "../styles/pages/HomePage.module.css"; 

import landingImg from '../assets/landing.jpg'

import {Navbar} from '../components/Navbar';

export function HomePage(){ 

    const [user, setUser ] = useState({});

    useEffect(() => {
        async function getUserData() {
          const userData = await localStorage.getItem(
            "@projetoreciclagem:user"
          );
          const data = JSON.parse(userData)
          setUser(data);
        }
        getUserData();         
      }, []);
    
    return(
        <>
            <Navbar />
            <div className={styles.backgroundPage}></div>            
            <div className={styles.containerPage} id="landing">
            
                <div className={styles.containerLanding}>
                
                    <div className={styles.landingInfo}>
                        <h1>Bem vindo {user.nome} {user.sobrenome}!</h1>
                       
                        
                        <p>Este portal consolida os dados coletados e dashboards<br/> que detalham o status de implantações realizadas
                            pela equipe<br/> do <strong >Projeto Reciclagem.</strong>
                        </p>
                       
                        <button stype="button" className={styles.button} >Saiba mais</button>
                       
                    </div>
                    <div>
                        
                        <img src={landingImg} alt="" style={{"width": "600px", "height": "600px", "border-radius": "50%","border":"10px solid #8acccf"}} />
                       
                    </div>
                    
                </div>

                                                 
            </div>
            
        </>
    )
}



