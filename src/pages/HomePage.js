import React, {useState} from 'react';
import PageProgress from 'react-page-progress'
import Lottie from 'react-lottie';

import { IoArrowDownCircleOutline } from "react-icons/io5";
import { GiTeacher } from "react-icons/gi";
import { RiRecycleFill } from "react-icons/ri";
import { FaBalanceScale } from "react-icons/fa";

import styles from "../styles/pages/HomePage.module.css"; 

import lottieAnimation from '../assets/lotties/dashboard.json'

import investigationImg from '../assets/investigation.png'
import teachImg from '../assets/teach.png'
import inspectImg from '../assets/inspect.png'

import {Navbar} from '../components/Navbar';
import {Footer} from '../components/Footer';

export function HomePage(){ 
    
    const [animationState, setAnimationState] = useState({
        isStopped: false, isPaused: false
    });

    const defaultOptions = {
        loop: true,
        autoplay: true, 
        animationData: lottieAnimation,
        rendererSettings: {
          preserveAspectRatio: 'xMidYMid slice'
        }
      };     
    
    return(
        <>
            <Navbar />
            <PageProgress color={'rgb(70, 131, 133)'} height={5}/>
            <div className={styles.containerPage}>
                <div className={styles.containerLanding}>
                    <div className={styles.landingInfo}>
                        <h1>Olá, tudo bem!?</h1>
                        <p>Este portal consolida os dados coletados e dashboards<br/> que detalham o status de implantações realizadas
                            pela equipe<br/> do <span >Projeto Reciclagem.</span>
                        </p>
                    </div>
                    <div>
                        <Lottie 
                        options={defaultOptions}
                        height={400}
                        width={600}
                        isStopped={animationState.isStopped}
                        isPaused={animationState.isPaused}/> 
                    </div>
                    
                </div>

                <IoArrowDownCircleOutline size={70} color="rgb(70, 131, 133)" style={{"position": "absolute", "bottom": "40px"}}/>                                         
            </div>
            {/* <Footer />   */}
            <section className={styles.sectionUm}> 
                          
                <div className={styles.row}>
                    <div className={styles.cardObjetivo}>
                        <GiTeacher size={150} color="rgb(255, 255, 255)"/>   
                        <h3>IMPLANTAR</h3>
                        <div style={{"display":"flex","width": "100%", "flexDirection":"column",}}>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standarm Ipsum.</p>
                        </div>
                    </div>

                    <div className={styles.cardObjetivo}>
                        <FaBalanceScale size={150} color="rgb(255, 255, 255)"/>   
                        <h3>PADRONIZAR</h3>
                        <div style={{"display":"flex","width": "100%", "flexDirection":"column",}}>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standarm Ipsum.</p>
                        </div>
                    </div>

                    <div className={styles.cardObjetivo}>
                        <RiRecycleFill size={150} color="rgb(255, 255, 255)"/>   
                        <h3>RECICLAR</h3>
                        <div style={{"display":"flex","width": "100%", "flexDirection":"column",}}>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standarm Ipsum.</p>
                        </div>
                    </div>
                </div>                
            </section>
            <section className={styles.sectionDois}>

                <div className={styles.cardFase}>
                    <div className={styles.numberFase}>
                            <h1>1</h1>
                            <p>FASE</p>
                    </div>  
                    <div style={{"width":"650px"}}>
                        <span>Lorem Ipsum is simply dummy text of the printing and typesetting industry.ndustry. Lorem Ipsu Lorem Ipsum has been the industry's standarm Ipsum.</span>
                    </div>
                    <div style={{"width":"20%"}}>
                        <img src={investigationImg} alt="Investigar" style={{"width":"150px", "height": "150px"}}/>
                    </div>
                </div>

                <div className={styles.cardFase}>
                    <div className={styles.numberFase}>
                    
                            <h1>2</h1>
                            <p>FASE</p>
                            
                    </div>  
                    <div style={{"width":"650px"}}>
                        <span>Lorem Ipsum is simply dummy text of the printing and typesetting industry.ndustry. Lorem Ipsu Lorem Ipsum has been the industry's standarm Ipsum.</span>
                    </div>
                    <div style={{"width":"20%"}}>
                        <img src={teachImg} alt="Ensinar" style={{"width":"150px", "height": "150px"}}/>
                    </div>
                </div>

                <div className={styles.cardFase}>
                    <div className={styles.numberFase}>
                            <h1>3</h1>
                            <p>FASE</p>
                    </div>  
                    <div style={{"width":"650px"}}>
                        <span>Lorem Ipsum is simply dummy text of the printing and typesetting industry.ndustry. Lorem Ipsu Lorem Ipsum has been the industry's standarm Ipsum.</span>
                    </div>
                    <div style={{"width":"20%"}}>
                        <img src={inspectImg} alt="Inspecionar" style={{"width":"150px", "height": "150px"}}/>
                    </div>
                </div>

            </section>
            <section className={styles.sectionTres}>
                <h1>Equipe</h1>
            </section>
            <section className={styles.sectionQuatro}>
                <h1>Missão visão e valores</h1>
            </section>
        </>
    )
}



