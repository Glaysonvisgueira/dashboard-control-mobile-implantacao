
import React, { useState } from 'react';
import {RangeStepInput} from 'react-range-step-input';

import styles from "../styles/pages/UpdateControlMobileDashboard.module.css"; 

export function UpdateControlMobileDashboard(){ 

    const [value, setValue] = useState(0);

    return(
        <div className={styles.containerPage}> 
                <div className={styles.gridCards}>
                    
                    <div className={styles.cardDeposito}>
                        <h2 className={styles.titleDeposito}>CAD</h2>
                        
                        <form className={styles.formContainer}>                        
                            <input 
                                placeholder="% Concluído"
                                className={styles.inputRealizado}
                            />
                            <button 
                                type="submit" 
                                className={styles.buttonAtualizarUmDeposito}>Atualizar</button>
                        </form>                        
                    </div>
                 </div>                
        </div>
    )
}


