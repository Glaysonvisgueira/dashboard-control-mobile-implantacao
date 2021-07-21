import React, { useState } from 'react';

import { Link } from 'react-router-dom'

import { HiHome } from "react-icons/hi";
import { VscGraph } from "react-icons/vsc";
import { FaMapMarkedAlt,
         FaWarehouse
        } from "react-icons/fa";
import { FiInfo } from "react-icons/fi";

import styles from "../styles/components/Navbar.module.css";

export function Navbar() {
    return (
        <div className={styles.containerNavbar}>
            <div className={styles.containerOptions}>
                
                <Link to="/" className={styles.linkText}>
                    <div className={styles.divLink}>
                        {/* <HiHome size={35} color="#fff" /> */}
                        <span>HOME</span>
                    </div>
                </Link>

                <Link to="/depositos" className={styles.linkText}>
                    <div className={styles.divLink}>
                        {/* <FaWarehouse size={35} color="#fff" /> */}
                        <span>DEPÓSITOS</span>
                    </div>
                </Link>  

                <Link to="/dashboards" className={styles.linkText}>
                    <div className={styles.divLink}>
                       {/*  <VscGraph size={35} color="#fff" /> */}
                       <span>DASHBOARDS</span>
                    </div>
                </Link>

                {/* <Link to="/mapa/depositos" className={styles.linkText}>
                    <div className={styles.divLink}>
                        <FaMapMarkedAlt size={35} color="#fff" />
                        <span>Mapa</span>
                    </div>
                </Link> */}

                 <Link to="/sobre" className={styles.linkText}>
                    <div className={styles.divLink}>
                        {/* <FiInfo size={35} color="#fff" /> */}
                        <span>SOBRE</span>
                    </div>   
                </Link>   


            </div>
        </div>
    )
}



