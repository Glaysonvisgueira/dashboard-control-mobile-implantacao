import React, { useState } from 'react';

import { Link } from 'react-router-dom'

import { HiHome } from "react-icons/hi";
import { VscGraph } from "react-icons/vsc";
import { FaMapMarkedAlt } from "react-icons/fa";

import styles from "../styles/components/Navbar.module.css";

export function Navbar() {
    return (
        <div className={styles.containerNavbar}>
            <div className={styles.containerOptions}>
                <div className={styles.divLink}>
                    <HiHome size={35} color="rgb(39, 39, 39)" />
                    <Link to="/" className={styles.linkText}>Home</Link>
                </div>
                <div className={styles.divLink}>
                    <VscGraph size={35} color="rgb(39, 39, 39)" />
                    <Link to="/dashboards" className={styles.linkText}>Dashboards</Link>
                </div>
                <div className={styles.divLink}>
                    <FaMapMarkedAlt size={35} color="rgb(39, 39, 39)" />
                    <Link to="/mapa/depositos" className={styles.linkText}>Mapa</Link>
                </div>                
            </div>
        </div>
    )
}



