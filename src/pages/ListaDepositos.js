import React from 'react';
import { BiListUl } from "react-icons/bi";

import styles from "../styles/pages/ListaDepositos.module.css"; 

import {Navbar} from '../components/Navbar';
import {Footer} from '../components/Footer';

export function ListaDepositos(){ 

    return(
        <>
            <Navbar />
                <div className={styles.containerPage}>
                <div className={styles.titleContainer}>
                        <div className={styles.titleAndIcon}>
                        <BiListUl size={45} color="#141414"/>
                        <h1 className={styles.title}>&nbsp;Lista de depósitos</h1>
                        </div>
                        <span>Escolha um dos depósitos para acessar suas informações.</span>
                    </div>
                   
                        <div className={styles.grid}>
                           
                                    <div className={styles.card}>
                                        <span>CAD</span>
                                    </div>
                                    <div className={styles.card}>
                                        <span>CDP</span>
                                    </div>
                                    <div className={styles.card}>
                                        <span>A</span>
                                    </div>
                                    <div className={styles.card}>
                                        <span>A</span>
                                    </div>
                                    <div className={styles.card}>
                                        <span>A</span>
                                    </div>
                                    <div className={styles.card}>
                                        <span>A</span>
                                    </div>
                                    <div className={styles.card}>
                                        <span>A</span>
                                    </div>
                                    <div className={styles.card}>
                                        <span>A</span>
                                    </div>
                                    <div className={styles.card}>
                                        <span>A</span>
                                    </div>
                                    <div className={styles.card}>
                                        <span>A</span>
                                    </div>
                                    <div className={styles.card}>
                                        <span>A</span>
                                    </div>
                                    <div className={styles.card}>
                                        <span>A</span>
                                    </div>
                                    <div className={styles.card}>
                                        <span>A</span>
                                    </div>
                                    <div className={styles.card}>
                                        <span>A</span>
                                    </div>
                                    <div className={styles.card}>
                                        <span>A</span>
                                    </div>
                                    <div className={styles.card}>
                                        <span>A</span>
                                    </div>
                                    <div className={styles.card}>
                                        <span>A</span>
                                    </div>
                                    <div className={styles.card}>
                                        <span>A</span>
                                    </div>
                                    <div className={styles.card}>
                                        <span>A</span>
                                    </div>
                                    <div className={styles.card}>
                                        <span>A</span>
                                    </div>
                                    <div className={styles.card}>
                                        <span>A</span>
                                    </div>
                                    <div className={styles.card}>
                                        <span>A</span>
                                    </div>
                                    <div className={styles.card}>
                                        <span>A</span>
                                    </div>
                                    <div className={styles.card}>
                                        <span>A</span>
                                    </div>
                           

                    </div>
                </div>
            <Footer />  
        </>
    )
}



