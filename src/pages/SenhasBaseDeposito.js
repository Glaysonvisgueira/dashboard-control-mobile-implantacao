import React, { useState, useEffect } from 'react';
import api from '../services/api.js'
import { MdContentCopy } from "react-icons/md";

import styles from "../styles/pages/SenhasBaseDeposito.module.css";

import { Loading } from '../components/Loading';

export function SenhasBaseDeposito() {

    const [senhas, setSenhas] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function loadSenhas() {
            const response = await api.get('/senhas/glayson')
            setSenhas(response.data);
            setLoading(false);
        };
        loadSenhas();
        //console.log(senhas);
    }, []);

    if (loading && !senhas.length) {
        return (
            <div className={styles.containerPage}>
                <Loading />
            </div>
        )
    }

    async function copyToClipboard(text) {
        if ('clipboard' in navigator) {
            return await navigator.clipboard.writeText(text);
        } else {
            return document.execCommand('copy', true, text);
        }
        //() => { navigator.clipboard.writeText(item.senha)   
     }

    return (
        <div className={styles.containerPage}>
            <h1>Senhas de acesso aos depósitos</h1>
            <div className={styles.containerSenhas}>
                {senhas.map(item =>
                    <div className={styles.senhaRow}>
                        <div className={styles.depositoName}>
                            <span className={styles.dep}>{item.sigla_dep}</span>
                        </div>
                        <div>
                            <span className={styles.senha}>{item.senha}</span>
                        </div>
                        <div className={styles.copyClipboard} onClick={() => { copyToClipboard(item.senha) }} >
                            <MdContentCopy size={24} color="#fff" />
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}



