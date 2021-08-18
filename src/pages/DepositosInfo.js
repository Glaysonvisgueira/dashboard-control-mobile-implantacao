import React, { useState, useEffect } from 'react';

import { Link } from 'react-router-dom'
import api from '../services/api.js'
import { BiListUl } from "react-icons/bi";

import styles from "../styles/pages/DepositosInfo.module.css";

import { Navbar } from '../components/Navbar';
import { Loading } from '../components/Loading';
import { Footer } from '../components/Footer';

export function DepositosInfo() {

    const [depositos, setDepositos] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function loadDepositos() {
            const response = await api.get('/depositos')
            setDepositos(response.data);
            setLoading(false);
        };
        loadDepositos();
        //console.log(depositos);
    }, []);

    async function handleClickDeposito(sigla_dep) {
        localStorage.setItem('@projetoreciclagem:sigla_deposito', sigla_dep);
    }

    if (loading) {
        return (
            <>
                <Navbar />
                <div className={styles.containerPage}>
                    <Loading />
                </div>
                <Footer />
            </>
        )
    }



    return (
        <>
            <Navbar />
            <div className={styles.containerPage}>
                <div className={styles.containerTable}>
                    <table className={styles.table}>
                        <thead className={styles.head}>
                            <td>SEQ</td>
                            <td>DEPÓSITO</td>
                            <td>LOJA MÃE</td>
                            <td>CIDADE</td>
                            <td>UF</td>
                            <td>OPÇÕES</td>                        
                        </thead>
                        {depositos.map(deposito =>
                            <tr>
                                <td>1</td>
                                <td>{deposito.sigla_dep}</td>
                                <td>{deposito.sigla_loja_mae}</td>
                                <td>{deposito.dados_geograficos.cidade}</td>
                                <td>{deposito.dados_geograficos.uf}</td>
                                <td><BiListUl size={32} color="#fff" className={styles.iconOption}/>
                                    <BiListUl size={32} color="#fff" className={styles.iconOption}/>
                                    <BiListUl size={32} color="#fff" className={styles.iconOption}/>
                                    <BiListUl size={32} color="#fff" className={styles.iconOption}/>
                                    <BiListUl size={32} color="#fff" className={styles.iconOption}/>
                                    <BiListUl size={32} color="#fff" className={styles.iconOption}/>
                                </td>
                            </tr>
                        )}
                    </table>
                </div>
            </div>
            <Footer />
        </>
    )
}



