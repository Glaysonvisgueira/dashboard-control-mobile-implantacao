import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import Tooltip from "react-simple-tooltip";
import moment from "moment";

import ReactCircleModal from 'react-circle-modal'

import { useHistory } from "react-router-dom";
import api from "../services/api.js";

import { BsPeopleFill, BsImages } from "react-icons/bs";
import { BiCodeBlock, BiListUl, BiCctv } from "react-icons/bi";
import { AiFillSafetyCertificate, AiOutlineThunderbolt, AiOutlineCheckCircle, AiOutlineCloseCircle } from "react-icons/ai";
import { FaNetworkWired, FaTools, FaBirthdayCake, FaUser, FaIdBadge } from "react-icons/fa";
import { IoArrowBack } from "react-icons/io5";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { MdDateRange } from "react-icons/md";
import { GrContactInfo } from "react-icons/gr";
import { RiAlarmWarningLine } from "react-icons/ri";
import { GiButtonFinger, GiHound, GiPoliceOfficerHead } from "react-icons/gi";

import styles from "../styles/pages/DetalhesDeposito.module.css";

import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { Loading } from '../components/Loading';

import gerenteImg from "../assets/gerente.jpg";
import organogramaImg from "../assets/organograma.PNG";

export function DetalhesDeposito() {

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

    async function goBackPage() {
        localStorage.removeItem('@projetoreciclagem:sigla_deposito');
        history.goBack();
    }

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

    if (loading) {
        return (
            <>
                <Navbar />
                <div className={styles.containerPage}>

                    <div className={styles.titleContainer}>
                        <div className={styles.titleAndIcon}>
                            <BiListUl size={34} color="#468385" />
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


    return (
        <>
            <link rel="stylesheet" href="https://unpkg.com/leaflet@1.7.1/dist/leaflet.css"
                integrity="sha512-xodZBNTC5n17Xt2atTPuE1HxjVMSvLVW9ocqUKLsCC5CXdbqCmblAshOMAS6/keqq/sMZMZ19scR4PsZChSR7A=="
                crossorigin="" />
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
                        <div className={styles.containerFooter}>
                            <Tooltip content="Lideranças">
                                <ReactCircleModal
                                    backgroundColor="rgba(100, 100, 100, 0.8)"
                                    filter="alpha(opacity=60)"
                                    toogleComponent={onClick => (
                                        <button type="button" className={styles.button} onClick={onClick}>
                                            <BsPeopleFill size={28} color="#fff" />
                                        </button>
                                    )}
                                    // Optional fields and their default values
                                    offsetX={0}
                                    offsetY={0}
                                >
                                    {(onClick) => (
                                        <div className={styles.containerPageForModal}>
                                            <div className={styles.containerModal}>
                                                <span className={styles.titleModal}><BsPeopleFill size={38} color="#525252" />&nbsp;&nbsp;Lideranças | {deposito.sigla_dep}</span>
                                                <div className={styles.containerFuncionarios}>
                                                    <div className={styles.cardFuncionario}>
                                                        <span className={styles.titleFuncao}>GERENTE</span>
                                                        <img src={gerenteImg} alt="" className={styles.funcionarioImg} />
                                                        <div className={styles.dadosFuncionarios}>
                                                            <div className={styles.rowDadosFuncionario}>
                                                                <div style={{ 'display': 'flex', 'alignItems': 'center', 'justifyContent': 'center' }}>
                                                                    <FaUser size={22} color="#000" />
                                                                    <span style={{ 'margin-left': '5px' }}>Nome de guerra</span>
                                                                </div>
                                                                <span style={{ 'font-weight': '800' }}>{deposito.gerente.nome_guerra}</span>
                                                            </div>
                                                            <div className={styles.rowDadosFuncionario}>
                                                                <div style={{ 'display': 'flex', 'alignItems': 'center', 'justifyContent': 'center' }}>
                                                                    <GrContactInfo size={22} color="#000" />
                                                                    <span style={{ 'margin-left': '5px' }}>Nome completo</span>
                                                                </div>
                                                                <span style={{ 'font-weight': '800' }}>{deposito.gerente.nome_completo}</span>
                                                            </div>
                                                            <div className={styles.rowDadosFuncionario}>
                                                                <div style={{ 'display': 'flex', 'alignItems': 'center', 'justifyContent': 'center' }}>
                                                                    <FaIdBadge size={22} color="#000" />
                                                                    <span style={{ 'margin-left': '5px' }}>Número geral</span>
                                                                </div>
                                                                <span style={{ 'font-weight': '800' }}>{deposito.gerente.num_geral}</span>
                                                            </div>
                                                            <div className={styles.rowDadosFuncionario}>
                                                                <div style={{ 'display': 'flex', 'alignItems': 'center', 'justifyContent': 'center' }}>
                                                                    <MdDateRange size={22} color="#000" />
                                                                    <span style={{ 'margin-left': '5px' }}>Admissão</span>
                                                                </div>
                                                                <span style={{ 'font-weight': '800' }}>{moment(deposito.gerente.data_admissao).format("L")}</span>
                                                            </div>
                                                            <div className={styles.rowDadosFuncionario}>
                                                                <div style={{ 'display': 'flex', 'alignItems': 'center', 'justifyContent': 'center' }}>
                                                                    <FaBirthdayCake size={22} color="#000" />
                                                                    <span style={{ 'margin-left': '5px' }}>Nascimento</span>
                                                                </div>
                                                                <span style={{ 'font-weight': '800' }}>{moment(deposito.gerente.data_nascimento).format("L")}</span>
                                                            </div>
                                                        </div>
                                                    </div>


                                                    <div className={styles.cardFuncionario}>
                                                        <span className={styles.titleFuncao}>C. DE DEPÓSITO</span>
                                                        <img src={gerenteImg} alt="" className={styles.funcionarioImg} />
                                                        <div className={styles.dadosFuncionarios}>
                                                            <div className={styles.rowDadosFuncionario}>
                                                                <div style={{ 'display': 'flex', 'alignItems': 'center', 'justifyContent': 'center' }}>
                                                                    <FaUser size={22} color="#000" />
                                                                    <span style={{ 'margin-left': '5px' }}>Nome de guerra</span>
                                                                </div>
                                                                <span style={{ 'font-weight': '800' }}>{deposito.chefe_dep.nome_guerra}</span>
                                                            </div>
                                                            <div className={styles.rowDadosFuncionario}>
                                                                <div style={{ 'display': 'flex', 'alignItems': 'center', 'justifyContent': 'center' }}>
                                                                    <GrContactInfo size={22} color="#000" />
                                                                    <span style={{ 'margin-left': '5px' }}>Nome completo</span>
                                                                </div>
                                                                <span style={{ 'font-weight': '800' }}>{deposito.chefe_dep.nome_completo}</span>
                                                            </div>
                                                            <div className={styles.rowDadosFuncionario}>
                                                                <div style={{ 'display': 'flex', 'alignItems': 'center', 'justifyContent': 'center' }}>
                                                                    <FaIdBadge size={22} color="#000" />
                                                                    <span style={{ 'margin-left': '5px' }}>Número geral</span>
                                                                </div>
                                                                <span style={{ 'font-weight': '800' }}>{deposito.chefe_dep.num_geral}</span>
                                                            </div>
                                                            <div className={styles.rowDadosFuncionario}>
                                                                <div style={{ 'display': 'flex', 'alignItems': 'center', 'justifyContent': 'center' }}>
                                                                    <MdDateRange size={22} color="#000" />
                                                                    <span style={{ 'margin-left': '5px' }}>Admissão</span>
                                                                </div>
                                                                <span style={{ 'font-weight': '800' }}>{moment(deposito.chefe_dep.data_admissao).format("L")}</span>
                                                            </div>
                                                            <div className={styles.rowDadosFuncionario}>
                                                                <div style={{ 'display': 'flex', 'alignItems': 'center', 'justifyContent': 'center' }}>
                                                                    <FaBirthdayCake size={22} color="#000" />
                                                                    <span style={{ 'margin-left': '5px' }}>Nascimento</span>
                                                                </div>
                                                                <span style={{ 'font-weight': '800' }}>{moment(deposito.chefe_dep.data_nascimento).format("L")}</span>
                                                            </div>
                                                        </div>
                                                    </div>


                                                    <div className={styles.cardFuncionario}>
                                                        <span className={styles.titleFuncao}>FUNC. NÚMERO DOIS</span>
                                                        <img src={gerenteImg} alt="" className={styles.funcionarioImg} />
                                                        <div className={styles.dadosFuncionarios}>
                                                            <div className={styles.rowDadosFuncionario}>
                                                                <div style={{ 'display': 'flex', 'alignItems': 'center', 'justifyContent': 'center' }}>
                                                                    <FaUser size={22} color="#000" />
                                                                    <span style={{ 'margin-left': '5px' }}>Nome de guerra</span>
                                                                </div>
                                                                <span style={{ 'font-weight': '800' }}>{deposito.funcionario_num2.nome_guerra}</span>
                                                            </div>
                                                            <div className={styles.rowDadosFuncionario}>
                                                                <div style={{ 'display': 'flex', 'alignItems': 'center', 'justifyContent': 'center' }}>
                                                                    <GrContactInfo size={22} color="#000" />
                                                                    <span style={{ 'margin-left': '5px' }}>Nome completo</span>
                                                                </div>
                                                                <span style={{ 'font-weight': '800' }}>{deposito.funcionario_num2.nome_completo}</span>
                                                            </div>
                                                            <div className={styles.rowDadosFuncionario}>
                                                                <div style={{ 'display': 'flex', 'alignItems': 'center', 'justifyContent': 'center' }}>
                                                                    <FaIdBadge size={22} color="#000" />
                                                                    <span style={{ 'margin-left': '5px' }}>Número geral</span>
                                                                </div>
                                                                <span style={{ 'font-weight': '800' }}>{deposito.funcionario_num2.num_geral}</span>
                                                            </div>
                                                            <div className={styles.rowDadosFuncionario}>
                                                                <div style={{ 'display': 'flex', 'alignItems': 'center', 'justifyContent': 'center' }}>
                                                                    <MdDateRange size={22} color="#000" />
                                                                    <span style={{ 'margin-left': '5px' }}>Admissão</span>
                                                                </div>
                                                                <span style={{ 'font-weight': '800' }}>{moment(deposito.funcionario_num2.data_admissao).format("L")}</span>
                                                            </div>
                                                            <div className={styles.rowDadosFuncionario}>
                                                                <div style={{ 'display': 'flex', 'alignItems': 'center', 'justifyContent': 'center' }}>
                                                                    <FaBirthdayCake size={22} color="#000" />
                                                                    <span style={{ 'margin-left': '5px' }}>Nascimento</span>
                                                                </div>
                                                                <span style={{ 'font-weight': '800' }}>{moment(deposito.funcionario_num2.data_nascimento).format("L")}</span>
                                                            </div>
                                                        </div>
                                                    </div>

                                                </div>
                                                <button className={styles.buttonCloseModal} onClick={onClick}>
                                                    <IoIosCloseCircleOutline size={38} color="#fff" />
                                                </button>
                                            </div>

                                        </div>
                                    )}
                                </ReactCircleModal>
                            </Tooltip>

                            <Tooltip content="Organograma" >
                                <ReactCircleModal
                                    backgroundColor="rgba(100, 100, 100, 0.8)"
                                    filter="alpha(opacity=60)"
                                    toogleComponent={onClick => (
                                        <button type="button" className={styles.button} onClick={onClick}>
                                            <FaNetworkWired size={28} color="#fff" />
                                        </button>
                                    )}
                                    // Optional fields and their default values
                                    offsetX={0}
                                    offsetY={0}
                                >
                                    {(onClick) => (
                                        <div className={styles.containerPageForModal}>
                                            <div className={styles.containerModalOrgranograma}>
                                                <span className={styles.lastUpdate}>Atualizado em: {moment(deposito.organograma.ultima_atualizacao).format("L")}</span>
                                                <span className={styles.titleModal}><FaNetworkWired size={38} color="#525252" />&nbsp;&nbsp;Organograma | {deposito.sigla_dep}</span>
                                                <img src={organogramaImg} alt={`Organograma de ${deposito.sigla_dep}`} className={styles.organograma} />
                                                <button className={styles.buttonCloseModal} onClick={onClick}>
                                                    <IoIosCloseCircleOutline size={38} color="#fff" />
                                                </button>
                                            </div>

                                        </div>
                                    )}
                                </ReactCircleModal>
                            </Tooltip>

                            <Tooltip content="Equipamentos e ferramentas">
                                <ReactCircleModal
                                    backgroundColor="rgba(100, 100, 100, 0.8)"
                                    filter="alpha(opacity=60)"
                                    toogleComponent={onClick => (
                                        <button type="button" className={styles.button} onClick={onClick}>
                                            <FaTools size={28} color="#fff" />
                                        </button>
                                    )}
                                    // Optional fields and their default values
                                    offsetX={0}
                                    offsetY={0}
                                >
                                    {(onClick) => (
                                        <div className={styles.containerPageForModal}>
                                            <div className={styles.containerModal}>
                                                <span className={styles.titleModal}><FaTools size={38} color="#525252" />&nbsp;&nbsp;Equipamentos e ferramentas | {deposito.sigla_dep}</span>
                                                <span>Equipamentos e ferramentas</span>
                                                <button className={styles.buttonCloseModal} onClick={onClick}>
                                                    <IoIosCloseCircleOutline size={38} color="#fff" />
                                                </button>
                                            </div>

                                        </div>
                                    )}
                                </ReactCircleModal>
                            </Tooltip>

                            <Tooltip content="Fotos">
                                <ReactCircleModal
                                    backgroundColor="rgba(100, 100, 100, 0.8)"
                                    filter="alpha(opacity=60)"
                                    toogleComponent={onClick => (
                                        <button type="button" className={styles.button} onClick={onClick}>
                                            <BsImages size={28} color="#fff" />
                                        </button>
                                    )}
                                    // Optional fields and their default values
                                    offsetX={0}
                                    offsetY={0}
                                >
                                    {(onClick) => (
                                        <div className={styles.containerPageForModal}>
                                            <div className={styles.containerModalForFotos}>
                                                <span className={styles.titleModal}><BsImages size={38} color="#525252" />&nbsp;&nbsp;Fotos | {deposito.sigla_dep}</span>
                                                <span>Fotos</span>
                                                <button className={styles.buttonCloseModal} onClick={onClick}>
                                                    <IoIosCloseCircleOutline size={38} color="#fff" />
                                                </button>
                                            </div>

                                        </div>
                                    )}
                                </ReactCircleModal>
                            </Tooltip>

                            <Tooltip content="Segurança">
                                <ReactCircleModal
                                    backgroundColor="rgba(100, 100, 100, 0.8)"
                                    filter="alpha(opacity=60)"
                                    toogleComponent={onClick => (
                                        <button type="button" className={styles.button} onClick={onClick}>
                                            <AiFillSafetyCertificate size={28} color="#fff" />
                                        </button>
                                    )}
                                    // Optional fields and their default values
                                    offsetX={0}
                                    offsetY={0}
                                >
                                    {(onClick) => (
                                        <div className={styles.containerPageForModal}>
                                            <div className={styles.containerPageForModalForSecurity}>
                                                <span className={styles.titleModal}><AiFillSafetyCertificate size={38} color="#525252" />&nbsp;&nbsp;Itens de segurança | {deposito.sigla_dep}</span>


                                                <div className={styles.gridSecurity}>
                                                    <div className={styles.securityItemCard}>
                                                        <div className={styles.securityItemIconContainer}>
                                                            <BiCctv size={100} color="#fff" />
                                                        </div>
                                                        <span>CFTV</span>
                                                        {deposito.infraestrutura.metodos_seguranca.cftv === true
                                                            ? <AiOutlineCheckCircle size={50} color="#33b507" />
                                                            : <AiOutlineCloseCircle size={50} color="#a30f0f" />
                                                        }
                                                    </div>

                                                    <div className={styles.securityItemCard}>
                                                        <div className={styles.securityItemIconContainer}>
                                                            <AiOutlineThunderbolt size={100} color="#fff" />
                                                        </div>
                                                        <span>CERCA ELÉTRICA</span>
                                                        {deposito.infraestrutura.metodos_seguranca.cerca_eletrica === true
                                                            ? <AiOutlineCheckCircle size={50} color="#33b507" />
                                                            : <AiOutlineCloseCircle size={50} color="#a30f0f" />
                                                        }
                                                    </div>

                                                    <div className={styles.securityItemCard}>
                                                        <div className={styles.securityItemIconContainer}>
                                                            <RiAlarmWarningLine size={100} color="#fff" />
                                                        </div>
                                                        <span>ALARME</span>
                                                        {deposito.infraestrutura.metodos_seguranca.alarme === true
                                                            ? <AiOutlineCheckCircle size={50} color="#33b507" />
                                                            : <AiOutlineCloseCircle size={50} color="#a30f0f" />
                                                        }
                                                    </div>

                                                    <div className={styles.securityItemCard}>
                                                        <div className={styles.securityItemIconContainer}>
                                                            <GiHound size={100} color="#fff" />
                                                        </div>
                                                        <span>SEGURANÇA CANINA</span>
                                                        {deposito.infraestrutura.metodos_seguranca.seg_canica === true
                                                            ? <AiOutlineCheckCircle size={50} color="#33b507" />
                                                            : <AiOutlineCloseCircle size={50} color="#a30f0f" />
                                                        }
                                                    </div>

                                                    <div className={styles.securityItemCard}>
                                                        <div className={styles.securityItemIconContainer}>
                                                            <GiPoliceOfficerHead size={100} color="#fff" />
                                                        </div>
                                                        <span>VIGILANTE</span>
                                                        {deposito.infraestrutura.metodos_seguranca.vigilante === true
                                                            ? <AiOutlineCheckCircle size={50} color="#33b507" />
                                                            : <AiOutlineCloseCircle size={50} color="#a30f0f" />
                                                        }
                                                    </div>

                                                    <div className={styles.securityItemCard}>
                                                        <div className={styles.securityItemIconContainer}>
                                                            <GiButtonFinger size={100} color="#fff" />
                                                        </div>
                                                        <span>BOTÃO DE PÂNICO</span>
                                                        {deposito.infraestrutura.metodos_seguranca.botao_panico === true
                                                            ? <AiOutlineCheckCircle size={50} color="#33b507" />
                                                            : <AiOutlineCloseCircle size={50} color="#a30f0f" />
                                                        }
                                                    </div>
                                                </div>


                                                <button className={styles.buttonCloseModal} onClick={onClick}>
                                                    <IoIosCloseCircleOutline size={38} color="#fff" />
                                                </button>
                                            </div>

                                        </div>
                                    )}
                                </ReactCircleModal>

                            </Tooltip>

                            <Tooltip content="Sistemas">
                                <ReactCircleModal
                                    backgroundColor="rgba(100, 100, 100, 0.8)"
                                    filter="alpha(opacity=60)"
                                    toogleComponent={onClick => (
                                        <button type="button" className={styles.button} onClick={onClick}>
                                            <BiCodeBlock size={28} color="#fff" />
                                        </button>
                                    )}
                                    // Optional fields and their default values
                                    offsetX={0}
                                    offsetY={0}
                                >
                                    {(onClick) => (
                                        <div className={styles.containerPageForModal}>
                                            <div className={styles.containerModalForSistemas}>
                                                <span className={styles.titleModal}><BiCodeBlock size={38} color="#525252" />&nbsp;&nbsp;Sistemas | {deposito.sigla_dep}</span>
                                                <div className={styles.containerSistemas}>
                                                    <div className={styles.sistemaOption}>
                                                         <span>CONTROL MOBILE</span>
                                                         {deposito.sistemas.control_mobile === true
                                                            ? <AiOutlineCheckCircle size={50} color="#33b507" />
                                                            : <AiOutlineCloseCircle size={50} color="#a30f0f" />
                                                         }
                                                    </div>
                                                    <div className={styles.sistemaOption}>
                                                         <span>WMS</span>
                                                         {deposito.sistemas.wms === true
                                                            ? <AiOutlineCheckCircle size={50} color="#33b507" />
                                                            : <AiOutlineCloseCircle size={50} color="#a30f0f" />
                                                        }
                                                    </div>
                                                    <div className={styles.sistemaOption}>
                                                         <span>VENDA REMOTA</span>
                                                         {deposito.sistemas.venda_remota === true
                                                            ? <AiOutlineCheckCircle size={50} color="#33b507" />
                                                            : <AiOutlineCloseCircle size={50} color="#a30f0f" />
                                                        }
                                                    </div>
                                                    
                                                </div>
                                                <button className={styles.buttonCloseModal} onClick={onClick}>
                                                    <IoIosCloseCircleOutline size={38} color="#fff" />
                                                </button>
                                            </div>

                                        </div>
                                    )}
                                </ReactCircleModal>
                            </Tooltip>
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
                        <button type="button" onClick={goBackPage} className={styles.backButton}><IoArrowBack size={28} color="#fff" /></button>
                    </div>


                    <MapContainer
                        className={styles.map}
                        center={[
                            `${deposito.dados_geograficos.location.latitude}`,
                            `${deposito.dados_geograficos.location.longitude}`,
                        ]}
                        zoom={12}
                        style={{ width: '50%', height: '100%', zIndex: 1 }}
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



