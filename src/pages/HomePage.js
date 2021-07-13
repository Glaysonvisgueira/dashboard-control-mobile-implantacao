import React, {useState} from 'react';
import Lottie from 'react-lottie';

import styles from "../styles/pages/HomePage.module.css"; 

import lottieAnimation from '../assets/lotties/dashboard.json'

import {Navbar} from '../components/Navbar';
import {Footer} from '../components/Footer';

export function HomePage(){ 
    
    const [animationState, setAnimationState] = useState({
        isStopped: false, isPaused: false
    });

    const defaultOptions = {
        loop: true,
        autoplay: true, 
        animationData: lottieAnimation,
        rendererSettings: {
          preserveAspectRatio: 'xMidYMid slice'
        }
      };

      
    
    
    return(
        <>
            <Navbar />
            <div className={styles.containerPage}>
                <div className={styles.containerLanding}>
                    <div className={styles.landingInfo}>
                        <h1>Olá, tudo bem!?</h1>
                        <p>Este portal consolida os dashboards que detalham <br/>o status de implantações realizadas
                            pela equipe<br/> do <span >Projeto Reciclagem.</span>
                        </p>
                    </div>
                    <div>
                        <Lottie 
                        options={defaultOptions}
                        height={400}
                        width={600}
                        isStopped={animationState.isStopped}
                        isPaused={animationState.isPaused}/> 
                    </div>
                    
                </div>
                               
            </div>
            <Footer />  
        </>
    )
}



