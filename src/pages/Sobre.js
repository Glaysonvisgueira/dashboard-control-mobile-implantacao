import React from 'react';
import PageProgress from 'react-page-progress'


import { GiTeacher } from "react-icons/gi";
import { RiRecycleFill } from "react-icons/ri";
import { FaBalanceScale } from "react-icons/fa";

import styles from "../styles/pages/Sobre.module.css";

import investigationImg from '../assets/investigation.png'
import teachImg from '../assets/teach.png'
import inspectImg from '../assets/inspect.png'

import eticaImg from '../assets/etica.png'
import simplicidadeImg from '../assets/simplicidade.png'
import diversidadeImg from '../assets/diversidade.png'
import justicaImg from '../assets/justica.png'
import inovacaoImg from '../assets/inovacao.png'
import parceriaImg from '../assets/parceria.png'
import perseverancaImg from '../assets/perseveranca.png'
import dedicacaoImg from '../assets/dedicacao.png'

import visaoImg from '../assets/visao.jpg'

import { Navbar } from '../components/Navbar';

export function Sobre() {

    return (
        <>
            <Navbar />
            <PageProgress color={'rgb(70, 131, 133)'} height={5} />

            <main className={styles.mainPage}>

            </main>



            <section className={styles.sectionTres}>
                <h1>Equipe</h1>
            </section>



            <section className={styles.sectionDois}>
                <h3>O projeto foi dividido em três fases, sendo elas:</h3>
                <div className={styles.cardFase}>
                    <div className={styles.numberFase}>
                        <h1>1</h1>
                        <p>FASE</p>
                    </div>
                    <div style={{ "width": "650px" }}>
                        <span>Lorem Ipsum is simply dummy text of the printing and typesetting industry.ndustry. Lorem Ipsu Lorem Ipsum has been the industry's standarm Ipsum.</span>
                    </div>
                    <div style={{ "width": "20%" }}>
                        <img src={investigationImg} alt="Investigar" style={{ "width": "150px", "height": "150px" }} />
                    </div>
                </div>

                <div className={styles.cardFase}>
                    <div className={styles.numberFase}>

                        <h1>2</h1>
                        <p>FASE</p>

                    </div>
                    <div style={{ "width": "650px" }}>
                        <span>Lorem Ipsum is simply dummy text of the printing and typesetting industry.ndustry. Lorem Ipsu Lorem Ipsum has been the industry's standarm Ipsum.</span>
                    </div>
                    <div style={{ "width": "20%" }}>
                        <img src={teachImg} alt="Ensinar" style={{ "width": "150px", "height": "150px" }} />
                    </div>
                </div>

                <div className={styles.cardFase}>
                    <div className={styles.numberFase}>
                        <h1>3</h1>
                        <p>FASE</p>
                    </div>
                    <div style={{ "width": "650px" }}>
                        <span>Lorem Ipsum is simply dummy text of the printing and typesetting industry.ndustry. Lorem Ipsu Lorem Ipsum has been the industry's standarm Ipsum.</span>
                    </div>
                    <div style={{ "width": "20%" }}>
                        <img src={inspectImg} alt="Inspecionar" style={{ "width": "150px", "height": "150px" }} />
                    </div>
                </div>

            </section>

            <section className={styles.sectionUm}>

                <div className={styles.row}>
                    <div className={styles.cardObjetivo}>
                        <GiTeacher size={150} color="rgb(255, 255, 255)" />
                        <h3>IMPLANTAR</h3>
                        <div style={{ "display": "flex", "width": "100%", "flexDirection": "column", }}>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standarm Ipsum.</p>
                        </div>
                    </div>

                    <div className={styles.cardObjetivo}>
                        <FaBalanceScale size={150} color="rgb(255, 255, 255)" />
                        <h3>PADRONIZAR</h3>
                        <div style={{ "display": "flex", "width": "100%", "flexDirection": "column", }}>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standarm Ipsum.</p>
                        </div>
                    </div>

                    <div className={styles.cardObjetivo}>
                        <RiRecycleFill size={150} color="rgb(255, 255, 255)" />
                        <h3>RECICLAR</h3>
                        <div style={{ "display": "flex", "width": "100%", "flexDirection": "column", }}>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standarm Ipsum.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className={styles.sectionQuatro}>
                <div className={styles.missaoContainer}>
                    <div style={{ "height": "100%", "width": "40%", "background-color": "#fff" }}>
                        <img src={visaoImg} alt="Visão" style={{ "width": "100%", "height": "100%" }} />
                    </div>
                    <div className={styles.missaoText}>
                        <h1>MISSÃO</h1>
                        <p style={{ "width": "40%", "textAlign": "center" }}>Trabalhar com responsabilidade nos negócios, qualidade em produção
                            e serviços e compromisso com colaboradores e comunidades.</p>
                    </div>
                </div>
                <div className={styles.visaoContainer}>
                    <div className={styles.visaoText}>
                        <h1>VISÃO</h1>
                        <p style={{ "width": "40%", "textAlign": "center" }}>Criação de relações sólidas, buscando o respeito e a satisfação,
                            junto a colaboradores, clientes, fornecedores e parceiros comerciais.</p>
                    </div>
                    <div style={{ "height": "100%", "width": "40%", "background-color": "#fff" }}>
                        <img src={visaoImg} alt="Visão" style={{ "width": "100%", "height": "100%" }} />
                    </div>

                </div>
            </section>

            <section className={styles.sectionCinco}>
                <h1>VALORES</h1>
                <div className={styles.grid}>

                    <div className={styles.cardValores}>
                        
                            <img src={eticaImg} alt="Inspecionar" style={{ "width": "100px", "height": "100px" }} />
                        
                            <h3>ÉTICA</h3>
                        
                            <div style={{ "display": "flex", "width": "100%", "flexDirection": "column", }}>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standarm Ipsum.</p>
                            </div>
                        
                    </div>

                    <div className={styles.cardValores}>
                        
                            <img src={simplicidadeImg} alt="Inspecionar" style={{ "width": "100px", "height": "100px" }} />
                       
                        
                        
                        <h3>SIMPLICIDADE</h3>
                        
                        <div style={{ "display": "flex", "width": "100%", "flexDirection": "column", }}>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standarm Ipsum.</p>
                        </div>
                        

                    </div>

                    <div className={styles.cardValores}>

                        <img src={diversidadeImg} alt="Inspecionar" style={{ "width": "100px", "height": "100px" }} />
                        <h3>RESPEITO</h3>
                        <div style={{ "display": "flex", "width": "100%", "flexDirection": "column", }}>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standarm Ipsum.</p>
                        </div>
                    </div>

                    <div className={styles.cardValores}>

                        <img src={justicaImg} alt="Inspecionar" style={{ "width": "100px", "height": "100px" }} />
                        <h3>JUSTIÇA</h3>
                        <div style={{ "display": "flex", "width": "100%", "flexDirection": "column", }}>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standarm Ipsum.</p>
                        </div>
                    </div>

                    <div className={styles.cardValores}>

                        <img src={inovacaoImg} alt="Inspecionar" style={{ "width": "100px", "height": "100px" }} />
                        <h3>INOVAÇÃO</h3>
                        <div style={{ "display": "flex", "width": "100%", "flexDirection": "column", }}>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standarm Ipsum.</p>
                        </div>
                    </div>

                    <div className={styles.cardValores}>

                        <img src={parceriaImg} alt="Inspecionar" style={{ "width": "100px", "height": "100px" }} />
                        <h3>PARCERIA</h3>
                        <div style={{ "display": "flex", "width": "100%", "flexDirection": "column", }}>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standarm Ipsum.</p>
                        </div>
                    </div>

                    <div className={styles.cardValores}>

                        <img src={perseverancaImg} alt="Inspecionar" style={{ "width": "100px", "height": "100px" }} />
                        <h3>PERSERVERANÇA</h3>
                        <div style={{ "display": "flex", "width": "100%", "flexDirection": "column", }}>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standarm Ipsum.</p>
                        </div>
                    </div>

                    <div className={styles.cardValores}>

                        <img src={dedicacaoImg} alt="Inspecionar" style={{ "width": "100px", "height": "100px" }} />
                        <h3>DEDICAÇÃO</h3>
                        <div style={{ "display": "flex", "width": "100%", "flexDirection": "column", }}>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standarm Ipsum.</p>
                        </div>
                    </div>

                </div>
            </section>












            <section className={styles.sectionSeis}>


            </section>
        </>
    )
}



