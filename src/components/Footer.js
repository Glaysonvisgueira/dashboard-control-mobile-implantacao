import React from 'react';
import { VscGraph } from "react-icons/vsc";

import styles from "../styles/components/Footer.module.css"; 

export function Footer(){      
    return(
            <div className={styles.containerFooter}>
                <p className={styles.textoFooter}>Produzido por: equipe de <strong>Padronização de Depósitos.</strong></p>                                     
            </div>    
    )
}



