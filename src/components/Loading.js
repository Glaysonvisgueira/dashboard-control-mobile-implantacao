import React, {useState} from 'react';
import Lottie from 'react-lottie';

import styles from "../styles/components/Loading.module.css"; 

import loadingAnimation from '../assets/lotties/loading.json'

export function Loading(){  
    
    const [animationState, setAnimationState] = useState({
        isStopped: false, isPaused: false
    });

    const defaultOptions = {
        loop: true,
        autoplay: true, 
        animationData: loadingAnimation,
        rendererSettings: {
          preserveAspectRatio: 'xMidYMid slice'
        }
      };     
    
    return(
        <div className={styles.containerLoading}>
          <Lottie 
                options={defaultOptions}
                height={200}
                width={300}
                isStopped={animationState.isStopped}
                isPaused={animationState.isPaused}
            /> 
      </div>
                                  
               
        )
}



