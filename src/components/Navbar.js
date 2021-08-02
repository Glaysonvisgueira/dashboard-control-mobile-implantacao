import React from 'react';
import { Link } from 'react-router-dom'
import { useHistory } from "react-router-dom";

import { logout, removeUserData, isAdmin } from '../utils/auth';

import styles from "../styles/components/Navbar.module.css";

import logoParaibaImg from '../assets/ap-logo.png'
import logoReciclagemImg from '../assets/logo-reciclagem.png'

export function Navbar() {
    
    const history = useHistory();

    async function handleLogout() {
        logout();
        removeUserData();
        history.push('/login')
    }

    /* function userIsAdmin() {
        if (isAdmin()) {
            return (
                <div className={styles.options}>                    
                    <Link to="/mapa/depositos" className={styles.linkText}>
                        <div className={styles.divLink}>
                            <span>MAPA</span>
                        </div>
                    </Link>
                    <Link to="/sobre" className={styles.linkText}>
                        <div className={styles.divLink}>
                            <span>SOBRE</span>
                        </div>   
                    </Link>
                </div>
            )
        }
    } */

    return (
        <div className={styles.containerNavbar}>
            <div className={styles.containerOptions}>
                {/* <div className={styles.logoContainer}>
                    <img src={logoParaibaImg} alt="" style={{"width": "70px", "height": "70px"}} />
                    <img src={logoReciclagemImg} alt="" style={{"width": "150px", "height": "50px", "margin-left": "15px"}} />
                </div> */}

                <div className={styles.options}>
                    <Link to="/" className={styles.linkText} >
                        <div className={styles.divLink}>
                            <span>HOME</span>
                        </div>
                    </Link>

                    <Link to="/depositos" className={styles.linkText}>
                        <div className={styles.divLink}>                            
                            <span>DEPÓSITOS</span>
                        </div>
                    </Link> 

                    <Link to="/dashboards" className={styles.linkText}>
                        <div className={styles.divLink}>
                            <span>DASHBOARDS</span>
                        </div>
                    </Link>

                    <Link to="/mapa/depositos" className={styles.linkText}>
                        <div className={styles.divLink}>
                            <span>MAPA</span>
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

                <div className={styles.options}>
                    <div className={styles.divLink} onClick={handleLogout}>
                        <span className={styles.linkText}>SAIR</span>
                    </div>
                </div>



            </div>
        </div>
    )
}



