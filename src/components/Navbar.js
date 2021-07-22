import React, { useState } from 'react';

import { Link } from 'react-router-dom'

import styles from "../styles/components/Navbar.module.css";

import logoParaibaImg from '../assets/ap-logo.png'
import logoReciclagemImg from '../assets/logo-reciclagem.png'

export function Navbar() {
    return (
        <div className={styles.containerNavbar}>
            <div className={styles.containerOptions}>
                <div className={styles.logoContainer}>
                    <img src={logoParaibaImg} alt="" style={{"width": "70px", "height": "70px"}} />
                    <img src={logoReciclagemImg} alt="" style={{"width": "150px", "height": "50px", "margin-left": "15px"}} />
                </div>
                <div className={styles.options}>
                <Link to="/" className={styles.linkText}>
                    <div className={styles.divLink}>
                        
                        <span>HOME</span>
                    </div>
                </Link>

                {/* <Link to="/depositos" className={styles.linkText}>
                    <div className={styles.divLink}>
                         
                        <span>DEPÓSITOS</span>
                    </div>
                </Link>  */} 

                <Link to="/dashboards" className={styles.linkText}>
                    <div className={styles.divLink}>
                       
                       <span>DASHBOARDS</span>
                    </div>
                </Link>

                {/* <Link to="/mapa/depositos" className={styles.linkText}>
                    <div className={styles.divLink}>
                        
                        <span>MAPA</span>
                    </div>
                </Link> */}

                 {/* <Link to="/sobre" className={styles.linkText}>
                    <div className={styles.divLink}>
                        
                        <span>SOBRE</span>
                    </div>   
                </Link>  */}  
                </div>
                


            </div>
        </div>
    )
}



