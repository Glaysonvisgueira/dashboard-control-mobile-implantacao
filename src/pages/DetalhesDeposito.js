import React, {useState, useEffect} from 'react';
import {MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import Tooltip from "react-simple-tooltip";
import { CustomDialog, useDialog } from 'react-st-modal';
import { useHistory } from "react-router-dom";
import api from "../services/api.js";
 
import { BsCardList, BsPeopleFill, BsImages } from "react-icons/bs";
import { BiCodeBlock, BiListUl } from "react-icons/bi";
import { AiFillSafetyCertificate } from "react-icons/ai";
import { FaNetworkWired, FaTools } from "react-icons/fa";
import { IoArrowBack } from "react-icons/io5";
     
import styles from "../styles/pages/DetalhesDeposito.module.css"; 

import {Navbar} from '../components/Navbar';
import {Footer} from '../components/Footer';
import {Loading} from '../components/Loading';

import gerenteImg from "../assets/gerente.jpg";
import organogramaImg from '../assets/organograma.PNG'

export function DetalhesDeposito(){ 

    const history = useHistory();

    const [deposito, setDeposito] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function getDadosDeposito() {
          const sigla_deposito = await localStorage.getItem(
            "@projetoreciclagem:sigla_deposito"
          );
          console.log(sigla_deposito);
          const response = await api.get(`/depositos/${sigla_deposito}`);
          setDeposito(response.data);
          setLoading(false); 
        }
        getDadosDeposito();
      }, []);
    
      if (!deposito.dados_geograficos) {
        return (
          <>
             <>
                    <Navbar />
                    
                    <Footer />
                </>
          </>
        );
      }

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

      function ShowEquipamentos(){

        const dialog = useDialog();      
        const [value, setValue] = useState();
      
        return (
          <div className={styles.containerModal}>
              <div className={styles.containerModal}>
                    <span>a</span>
              </div>
          </div>
        );
      }

      function ShowFotosDeposito(){

        const dialog = useDialog();      
        const [value, setValue] = useState();
      
        return (
          <div className={styles.containerModal}>
              <div className={styles.containerModal}>
                    <span>Fotos</span>
              </div>
          </div>
        );
      }

      function ShowSeguranca(){

        const dialog = useDialog();      
        const [value, setValue] = useState();
      
        return (
          <div className={styles.containerModal}>
              <div className={styles.containerModal}>
                    <span>Segurança</span>
              </div>
          </div>
        );
      }

      function ShowSistemasImplantados(){

        const dialog = useDialog();      
        const [value, setValue] = useState();
      
        return (
          <div className={styles.containerModal}>
              <div className={styles.containerModal}>
                    <span>Sistemas</span>
              </div>
          </div>
        );
      }

      if(loading){
        return (
            <>
                <Navbar />
                    <div className={styles.containerPage}>
                        
                        <div className={styles.titleContainer}>
                                <div className={styles.titleAndIcon}>
                                <BiListUl size={34} color="#468385"/>
                                <h1 className={styles.title}>&nbsp;Detalhes sobre o depósito</h1>
                                </div>
                                <span>Escolha um depósito para acessar suas informações.</span>
                            </div>
                    
                            <Loading />
                    </div>
            <Footer />  
            </>
        )
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

                {/* <div className={styles.titleContainer}>
                                <div className={styles.titleAndIcon}>
                                <BiListUl size={34} color="#468385"/>
                                <h1 className={styles.title}>&nbsp;Detalhes sobre o depósito</h1>
                                </div>
                                <span>Escolha um depósito para acessar suas informações.</span>
                </div> */}
                                    
                    <div className={styles.infoContainer}>
                      
                        <div className={styles.containerInfo}>

                            <div className={styles.titleDois}>
                               
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
                                            });
                                        }}><FaNetworkWired size={28} color="#fff" /></button>
                                    </Tooltip>
                                    
                                    <Tooltip content="Equipamentos e ferramentas">
                                        <button type="button" className={styles.button} onClick={async () => {
                                            const result = await CustomDialog(<ShowEquipamentos className={styles.modalCustom}/>, {
                                                title: 'Equipamentos e ferramentas',
                                                showCloseIcon: true,                                                
                                            });
                                        }}><FaTools size={28} color="#fff" /></button>
                                    </Tooltip>

                                    <Tooltip content="Fotos">
                                        <button type="button" className={styles.button} onClick={async () => {
                                            const result = await CustomDialog(<ShowFotosDeposito className={styles.modalCustom}/>, {
                                                title: 'Fotos do depósito',
                                                showCloseIcon: true,                                                
                                            });
                                        }}><BsImages size={28} color="#fff" /></button>             
                                    </Tooltip>

                                    <Tooltip content="Segurança">
                                        <button type="button" className={styles.button} onClick={async () => {
                                            const result = await CustomDialog(<ShowSeguranca className={styles.modalCustom}/>, {
                                                title: 'Mecanismos de segurança',
                                                showCloseIcon: true,                                                
                                            });
                                        }}> <AiFillSafetyCertificate size={28} color="#fff" /></button>
                                    </Tooltip>

                                    <Tooltip content="Sistemas">
                                        <button type="button" className={styles.button} onClick={async () => {
                                            const result = await CustomDialog(<ShowSistemasImplantados className={styles.modalCustom}/>, {
                                                title: 'Sistemas implantados',
                                                showCloseIcon: true,                                                
                                            });
                                        }}><BiCodeBlock size={28} color="#fff" /></button>             
                                    </Tooltip>              
                            </div>
                            </div>

                            <div className={styles.depositoDados}>

                                    <div className={styles.dados}>                                
                                        <p>Perfil</p>
                                        <p>{deposito.perfil}</p>                                
                                     </div>
                                    <div className={styles.dados}>                                
                                        <p>Sigla do depósito</p>
                                        <p>{deposito.sigla_dep}</p>                                
                                     </div>
                                     <div className={styles.dados}>                                
                                        <p>Sigla da loja mãe</p>
                                        <p>{deposito.sigla_loja_mae}</p>                                
                                     </div>
                                     <div className={styles.dados}>                                
                                        <p>Cidade - UF </p>
                                        <p>{deposito.dados_geograficos.cidade} - {deposito.dados_geograficos.uf}</p>                                
                                     </div>
                                     <div className={styles.dados}>                                
                                        <p>Quantidade de funcionários</p>
                                        <p>{deposito.qtd_funcionarios}</p>                                
                                     </div>
                                     <div className={styles.dados}>                                
                                        <p>Fecha para almoço?</p>
                                        {deposito.fecha_almoco === true ? (
                                            <span className={styles.simBadge}>SIM</span>
                                        ) : (
                                            <span className={styles.naoBadge}>NÃO</span>
                                        )}                                                                      
                                     </div>
                                     <div className={styles.dados}>                                
                                        <p>Cliente retira?</p>
                                        {deposito.cliente_retira === true ? (
                                            <span className={styles.simBadge}>SIM</span>
                                        ) : (
                                            <span className={styles.naoBadge}>NÃO</span>
                                        )}                                
                                     </div>
                                     <div className={styles.dados}>                                
                                        <p>Anexo à loja mãe?</p>
                                        {deposito.anexo_loja === true ? (
                                            <span className={styles.simBadge}>SIM</span>
                                        ) : (
                                            <span className={styles.naoBadge}>NÃO</span>
                                        )}                                
                                     </div>                                    
                                     <div className={styles.dados}>                                
                                        <p>Postos</p>
                                        <div>
                                            {deposito.pdvs.sigla_posto.map((posto) => (
                                                <span className={styles.siglaAbastecido}>{posto}</span>
                                                ))}  
                                        </div>                              
                                     </div>
                                     <div className={styles.dados}>                                
                                        <p>Representantes</p>
                                        <div>
                                            {deposito.pdvs.sigla_rep.map((rep) => (
                                                <span className={styles.siglaAbastecido}>{rep}</span>
                                                ))}    
                                        </div>                            
                                     </div>
                            </div>
                            <button type="button" onClick={history.goBack} className={styles.backButton}><IoArrowBack size={28} color="#fff" /></button>

                          
                            
                            
                           

                           

                        </div>

                    
                        <MapContainer 
                                className={styles.map}
                                center={[
                                    `${deposito.dados_geograficos.location.latitude}`,
                                    `${deposito.dados_geograficos.location.longitude}`,
                                ]}
                                zoom={12}
                                style={{width: '50%', height: '100%'}}
                                scrollWheelZoom={true}
                            >
                            <TileLayer 
                                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                                url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png"
                            />
                            <Marker
                                position={[
                                `${deposito.dados_geograficos.location.latitude}`,
                                `${deposito.dados_geograficos.location.longitude}`,
                                ]}
                            >
                                <Popup>
                                    <span>Aqui está o depósito de {deposito.sigla_dep}!</span>
                                </Popup>
                                
                            </Marker>
                            
                        </MapContainer>

                    </div>

                </div>
            <Footer />  
        </>
    )
}



