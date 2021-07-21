import React, { useState } from 'react';

import { Link } from 'react-router-dom'

import styles from "../styles/components/Navbar.module.css";

export function Navbar() {
    return (
        <div className={styles.containerNavbar}>
            <div className={styles.containerOptions}>
                
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
                        
                        <span>Mapa</span>
                    </div>
                </Link> */}

                 {/* <Link to="/sobre" className={styles.linkText}>
                    <div className={styles.divLink}>
                        
                        <span>SOBRE</span>
                    </div>   
                </Link>  */}  


            </div>
        </div>
    )
}



