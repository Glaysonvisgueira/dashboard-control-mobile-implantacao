import React, {useState} from 'react';
import { Link } from 'react-router-dom'
import { HiOutlinePlusCircle } from "react-icons/hi";
import { BiListUl } from "react-icons/bi";

import styles from "../styles/pages/DashboardList.module.css"; 

import {Navbar} from '../components/Navbar';
import {Footer} from '../components/Footer';

export function DashboardList(){

    return(
        <>
        <Navbar />
            <div className={styles.containerPage}>
                         
                    <div className={styles.titleContainer}>
                        <div className={styles.titleAndIcon}>
                        <BiListUl size={34} color="#468385"/>
                        <h1 className={styles.title}>&nbsp;Lista de dashboards</h1>
                        </div>
                        <span>Escolha uma das implantações/reciclagens disponíveis, para acessar seu dashboard.</span>
                    </div>
                        
                    <div className={styles.containerOptions}>

                    <Link to="/dashboards/geral" className={styles.divLink}>
                        <div className={styles.card}>
                            <span>FASE 2</span>  
                                              
                        </div>
                    </Link>
                    

                        <Link to="/dashboards/controlmobile" className={styles.divLink}>
                        <div className={styles.card}>
                            <span>Control<br />Mobile</span>
                                                   
                        </div>
                    </Link>

                    <Link to="/dashboards/gprotmin" className={styles.divLink}>
                        <div className={styles.card}>
                            <span>Gprotmin</span>
                                                   
                        </div>
                    </Link>

                    <Link to="/dashboards/gpermuta" className={styles.divLink}>
                        <div className={styles.card}>
                            <span>Ficha de<br />permuta</span>
                                                   
                        </div>
                    </Link>
                        
                    </div>
                              
                </div>
           <Footer />
           </>
    )
}



