import React, {useState} from 'react';
import {MapContainer, TileLayer, Marker, Popup } from "react-leaflet"

import { BsCardList } from "react-icons/bs";
import { BiCodeBlock } from "react-icons/bi";
import { AiFillSafetyCertificate } from "react-icons/ai";
import { FaNetworkWired,
         FaTools
     } from "react-icons/fa";

import styles from "../styles/pages/MapaDepositos.module.css"; 

import {Navbar} from '../components/Navbar';
import {Footer} from '../components/Footer';

import gerenteImg from "../assets/gerente.jpg";

export function MapaDepositos(){ 

    return(
        <>
            <link rel="stylesheet" href="https://unpkg.com/leaflet@1.7.1/dist/leaflet.css"
                integrity="sha512-xodZBNTC5n17Xt2atTPuE1HxjVMSvLVW9ocqUKLsCC5CXdbqCmblAshOMAS6/keqq/sMZMZ19scR4PsZChSR7A=="
                crossorigin=""/>
            <script src="https://unpkg.com/leaflet@1.7.1/dist/leaflet.js"
                integrity="sha512-XQoYMqMTK8LvdxXYG3nZ448hOEQiglfqkJs1NOQV44cWnUrBc8PkAOcXy20w0vlaXaVUearIOBhiXZ5V3ynxwA=="
                crossorigin="">
            </script>
            <Navbar />
            
                <div className={styles.containerPage}>
                                    
                    <div className={styles.infoContainer}>

                        <div className={styles.containerInfo}>

                            <div className={styles.title}>
                                <BsCardList size={40} color="#141414" />
                                <h2>&nbsp;Informações sobre os depósitos</h2>
                            </div>
                           

                            <div className={styles.cardFuncionario}>
                                    <div className={styles.funcionarioDados}>
                                    <div className={styles.dados}>                                
                                        <p>Nome de guerra</p>
                                        <p>Glayson</p>                                
                                     </div>
                                     <div className={styles.dados}>                                
                                        <p>Nome completo</p>
                                        <p>Glayson Silva Visgueira</p>                                
                                     </div>
                                     <div className={styles.dados}>                                
                                        <p>Número geral</p>
                                        <p>69823-7</p>                                
                                     </div>
                                    </div>
                                    <div className={styles.imgContainer}>
                                        <img src={gerenteImg} alt="" className={styles.imgGerente}/>
                                    </div>
                            </div>

                            <div className={styles.cardFuncionario}>
                                    <div className={styles.funcionarioDados}>
                                    <div className={styles.dados}>                                
                                        <p>Nome de guerra</p>
                                        <p>Glayson</p>                                
                                     </div>
                                     <div className={styles.dados}>                                
                                        <p>Nome completo</p>
                                        <p>Glayson Silva Visgueira</p>                                
                                     </div>
                                     <div className={styles.dados}>                                
                                        <p>Número geral</p>
                                        <p>69823-7</p>                                
                                     </div>
                                     <div className={styles.dados}>                                
                                        <p>Data de admissão</p>
                                        <p>15/02/2021</p>                                
                                     </div>
                                     <div className={styles.dados}>                                
                                        <p>Data de nascimento</p>
                                        <p>25/01/1993</p>                                
                                     </div>
                                     <div className={styles.dados}>                                
                                        <p>Contatos</p>
                                        <p>25/01/1993</p>                                
                                     </div>
                                    </div>
                                    <div className={styles.imgContainer}>
                                        <img src={gerenteImg} alt="" className={styles.imgGerente}/>
                                    </div>
                            </div>

                            <div className={styles.cardFuncionario}>
                                    <div className={styles.funcionarioDados}>
                                    <div className={styles.dados}>                                
                                        <p>Nome de guerra</p>
                                        <p>Glayson</p>                                
                                     </div>
                                     <div className={styles.dados}>                                
                                        <p>Nome completo</p>
                                        <p>Glayson Silva Visgueira</p>                                
                                     </div>
                                     <div className={styles.dados}>                                
                                        <p>Número geral</p>
                                        <p>69823-7</p>                                
                                     </div>
                                     <div className={styles.dados}>                                
                                        <p>Data de admissão</p>
                                        <p>15/02/2021</p>                                
                                     </div>
                                     <div className={styles.dados}>                                
                                        <p>Data de nascimento</p>
                                        <p>25/01/1993</p>                                
                                     </div>
                                     <div className={styles.dados}>                                
                                        <p>Contatos</p>
                                        <p>25/01/1993</p>                                
                                     </div>
                                    </div>
                                    <div className={styles.imgContainer}>
                                        <img src={gerenteImg} alt="" className={styles.imgGerente}/>
                                    </div>
                            </div>
                            
                            
                           

                            <div className={styles.containerFooter}>
                                    <button type="button" className={styles.button}><FaNetworkWired size={28} color="#fff" /></button>
                                    <button type="button" className={styles.button}><FaTools size={28} color="#fff" /></button>
                                    <button type="button" className={styles.button}><AiFillSafetyCertificate size={28} color="#fff" /></button>
                                    <button type="button" className={styles.button}><BiCodeBlock size={28} color="#fff" /></button>                                    
                            </div>

                        </div>

                    
                        <MapContainer 
                                className={styles.map}
                                center={[-6.8965231, -42.1914786]}
                                zoom={5.5}
                                style={{width: '100%', height: '100%'}}
                                scrollWheelZoom={true}
                            >
                            <TileLayer 
                                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                                url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png"
                            />
                            
                        </MapContainer>

                    </div>

                </div>
            <Footer />  
        </>
    )
}



