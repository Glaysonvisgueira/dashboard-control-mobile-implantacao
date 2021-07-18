import React, {useState} from 'react';
import {MapContainer, TileLayer } from "react-leaflet";
import Tooltip from "react-simple-tooltip";
import { CustomDialog, useDialog } from 'react-st-modal';
 
import { BsCardList, BsPeopleFill, BsImages } from "react-icons/bs";
import { BiCodeBlock } from "react-icons/bi";
import { AiFillSafetyCertificate } from "react-icons/ai";
import { FaNetworkWired, FaTools } from "react-icons/fa";
import { IoArrowBack } from "react-icons/io5";
     
import styles from "../styles/pages/MapaDepositos.module.css"; 

import {Navbar} from '../components/Navbar';
import {Footer} from '../components/Footer';

import gerenteImg from "../assets/gerente.jpg";
import organogramaImg from '../assets/organograma.PNG'

export function MapaDepositos(){ 

    function ShowLiderancas(){

        const dialog = useDialog();      
        const [value, setValue] = useState();
      
        return (
          <div className={styles.containerModal}>
                    <div className={styles.cardFuncionario}>
                                    <div className={styles.funcionarioDados}>
                                        <div className={styles.dadosFunc}>                                
                                            <p>Nome de guerra</p>
                                            <p>Glayson</p>                                
                                        </div>
                                        <div className={styles.dadosFunc}>                                
                                            <p>Nome completo</p>
                                            <p>Glayson Silva Visgueira</p>                                
                                        </div>
                                        <div className={styles.dadosFunc}>                                
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
                                    <div className={styles.dadosFunc}>                                
                                        <p>Nome de guerra</p>
                                        <p>Glayson</p>                                
                                     </div>
                                     <div className={styles.dadosFunc}>                                
                                        <p>Nome completo</p>
                                        <p>Glayson Silva Visgueira</p>                                
                                     </div>
                                     <div className={styles.dadosFunc}>                                
                                        <p>Número geral</p>
                                        <p>69823-7</p>                                
                                     </div>
                                     <div className={styles.dadosFunc}>                                
                                        <p>Data de admissão</p>
                                        <p>15/02/2021</p>                                
                                     </div>
                                     <div className={styles.dadosFunc}>                                
                                        <p>Data de nascimento</p>
                                        <p>25/01/1993</p>                                
                                     </div>
                                     <div className={styles.dadosFunc}>                                
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
                                    <div className={styles.dadosFunc}>                                
                                        <p>Nome de guerra</p>
                                        <p>Glayson</p>                                
                                     </div>
                                     <div className={styles.dadosFunc}>                                
                                        <p>Nome completo</p>
                                        <p>Glayson Silva Visgueira</p>                                
                                     </div>
                                     <div className={styles.dadosFunc}>                                
                                        <p>Número geral</p>
                                        <p>69823-7</p>                                
                                     </div>
                                     <div className={styles.dadosFunc}>                                
                                        <p>Data de admissão</p>
                                        <p>15/02/2021</p>                                
                                     </div>
                                     <div className={styles.dadosFunc}>                                
                                        <p>Data de nascimento</p>
                                        <p>25/01/1993</p>                                
                                     </div>
                                     <div className={styles.dadosFunc}>                                
                                        <p>Contatos</p>
                                        <p>25/01/1993</p>                                
                                     </div>
                                    </div>
                                    <div className={styles.imgContainer}>
                                        <img src={gerenteImg} alt="" className={styles.imgGerente}/>
                                    </div>
                            </div>
          </div>
        );
      }

      function ShowOrganograma(){

        const dialog = useDialog();      
        const [value, setValue] = useState();
      
        return (
          <div className={styles.containerModal}>
              <img src={organogramaImg} alt=""  style={{"width": "1000px", "height": "700px"}} />
              <div style={{"width": "100%","display": "flex", "alignItems": "center", "justifyContent": "flex-start", "margin-top": "10px"}}>
                <span style={{"font-weight": "300", "color": "rgb(100, 100, 100)"}}>Atualizado em: 25/03/2021</span>               
              </div>
          </div>
        );
      }

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
                                <h2>&nbsp;Informações</h2>
                                <div className={styles.containerFooter}>
                            
                                    <Tooltip content="Lideranças">
                                        <button type="button" className={styles.button} onClick={async () => {
                                            const result = await CustomDialog(<ShowLiderancas />, {
                                                title: 'Lideranças do depósito',
                                                showCloseIcon: true,
                                            });
                                        }}><BsPeopleFill size={28} color="#fff" /></button>
                                    </Tooltip>

                                    <Tooltip content="Organograma" >
                                    <button type="button" className={styles.button} onClick={async () => {
                                            const result = await CustomDialog(<ShowOrganograma className={styles.modalCustom}/>, {
                                                title: 'Organograma do depósito',
                                                showCloseIcon: true,
                                                className: styles.modalCustom
                                                
                                                
                                            });
                                        }}><FaNetworkWired size={28} color="#fff" /></button>
                                    </Tooltip>
                                    
                                    <Tooltip content="Equipamentos e ferramentas">
                                    <button type="button" className={styles.button}><FaTools size={28} color="#fff" /></button>
                                    </Tooltip>
                                    <Tooltip content="Fotos">
                                    <button type="button" className={styles.button}><BsImages size={28} color="#fff" /></button>             
                                    </Tooltip>
                                    <Tooltip content="Segurança">
                                    <button type="button" className={styles.button}><AiFillSafetyCertificate size={28} color="#fff" /></button>
                                    </Tooltip>
                                    <Tooltip content="Sistemas">
                                    <button type="button" className={styles.button}><BiCodeBlock size={28} color="#fff" /></button>             
                                    </Tooltip>              
                            </div>
                            </div>

                            <div className={styles.depositoDados}>

                                    <div className={styles.dados}>                                
                                        <p>Perfil</p>
                                        <p>Grande</p>                                
                                     </div>
                                    <div className={styles.dados}>                                
                                        <p>Sigla do depósito</p>
                                        <p>TDC</p>                                
                                     </div>
                                     <div className={styles.dados}>                                
                                        <p>Sigla da loja mãe</p>
                                        <p>TDC</p>                                
                                     </div>
                                     <div className={styles.dados}>                                
                                        <p>Cidade - UF </p>
                                        <p>Teresina - PI</p>                                
                                     </div>
                                     <div className={styles.dados}>                                
                                        <p>Quantidade de funcionários</p>
                                        <p>163</p>                                
                                     </div>
                                     <div className={styles.dados}>                                
                                        <p>Fecha para almoço?</p>
                                        <p>Não</p>                                
                                     </div>
                                     <div className={styles.dados}>                                
                                        <p>Cliente retira?</p>
                                        <p>Sim</p>                                
                                     </div>
                                     <div className={styles.dados}>                                
                                        <p>Anexo à loja mãe?</p>
                                        <p>Não</p>                                
                                     </div>
                                     <div className={styles.dados}>                                
                                        <p>Fecha para almoço?</p>
                                        <p>Não</p>                                
                                     </div>
                                     <div className={styles.dados}>                                
                                        <p>Postos</p>
                                        <p>ZZZ, ZZZ, ZZZ, ZZZ</p>                                
                                     </div>
                                     <div className={styles.dados}>                                
                                        <p>Representantes</p>
                                        <p>ZZZ, ZZZ</p>                                
                                     </div>
                            </div>
                            <button type="button" className={styles.backButton}><IoArrowBack size={28} color="#fff" /></button>

                          
                            
                            
                           

                           

                        </div>

                    
                        <MapContainer 
                                className={styles.map}
                                center={[-6.8965231, -42.1914786]}
                                zoom={5.5}
                                style={{width: '50%', height: '100%'}}
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



