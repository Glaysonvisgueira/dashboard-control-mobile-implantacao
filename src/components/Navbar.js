import React from 'react';
import { NavLink } from 'react-router-dom'
import { useHistory } from "react-router-dom";

import { logout, removeUserData, isAdmin } from '../utils/auth';

import styles from "../styles/components/Navbar.module.css";

import { IoLogOutOutline } from "react-icons/io5";

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
                    <NavLink to="/" exact className={styles.linkText} activeClassName={styles.activeLink}>
                        <div className={styles.divLink}>
                            <span>HOME</span>
                        </div>
                    </NavLink>

                    <NavLink to="/depositos" className={styles.linkText} activeClassName={styles.activeLink}>
                        <div className={styles.divLink}>                            
                            <span>DEPÓSITOS</span>
                        </div>
                    </NavLink> 

                    <NavLink to="/dashboards" className={styles.linkText} activeClassName={styles.activeLink}>
                        <div className={styles.divLink}>
                            <span>DASHBOARDS</span>
                        </div>
                    </NavLink>

                    <NavLink to="/mapa/depositos" className={styles.linkText} activeClassName={styles.activeLink}>
                        <div className={styles.divLink}>
                            <span>MAPA</span>
                        </div>
                    </NavLink>

                      

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

                {/* <NavLink to="/tabela" className={styles.linkText} activeClassName={styles.activeLink}>
                        <div className={styles.divLink}>
                            <span>TABELA</span>
                        </div>
                    </NavLink> */}

                    <div className={styles.linkText} onClick={handleLogout}>
                        <span className={styles.divLink}>SAIR</span>
                        <IoLogOutOutline size={28} color="#fff" style={{'margin-left': '5px'}}/>
                    </div>
                </div>



            </div>
        </div>
    )
}



