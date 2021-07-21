import React, {useState} from 'react';
import Lottie from 'react-lottie';

import styles from "../styles/pages/HomePage.module.css"; 

import {Navbar} from '../components/Navbar';

export function HomePage(){ 
    
      
    
    return(
        <>
            <Navbar />            
            <div className={styles.containerPage}>
                <div className={styles.containerLanding}>
                    <div className={styles.landingInfo}>
                        <h1>Olá, tudo bem!?</h1>
                        <p>Este portal consolida os dados coletados e dashboards<br/> que detalham o status de implantações realizadas
                            pela equipe<br/> do <span >Projeto Reciclagem.</span>
                        </p>
                    </div>
                    <div>
                         
                    </div>
                    
                </div>

                                                    
            </div>
            
        </>
    )
}



