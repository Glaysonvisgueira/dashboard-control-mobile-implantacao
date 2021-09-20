import React, { useState, useEffect } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import api from '../services/api.js'
import { MdContentCopy } from "react-icons/md";



import styles from "../styles/pages/SenhasBaseDeposito.module.css";

import { Loading } from '../components/Loading';

export function SenhasBaseDeposito() {

    const [senhas, setSenhas] = useState([]);
    const [loading, setLoading] = useState(true);

    const notify = (e) => toast(`Senha do depósito: ${e} copiada com sucesso!`);

    useEffect(() => {
        async function loadSenhas() {
            const response = await api.get('/senhas/glayson')
            setSenhas(response.data);
            setLoading(false);
        };
        loadSenhas();
        console.log(senhas);
    }, []);

    if (loading && !senhas.length) {
        return (
            <>
                <div className={styles.containerPage}>
                    <Loading />
                </div>
            </>
        )
    }

    function copiarSenha(senha) {
        navigator.clipboard.writeText(senha)
    }

    return (
        <>
            <div className={styles.containerPage}>
                <h1>Senhas de acesso aos depósitos</h1>
                <div className={styles.containerSenhas}>
                    {senhas.map(item =>

                        <div className={styles.senhaRow}>
                            <div className={styles.depositoName}>
                                <Toaster toastOptions={{
                                    className: '',
                                    style: {
                                        border: '2px solid #0bb016',
                                        padding: '16px',
                                        color: '#000',
                                        fontWeight: 'bold'
                                    },
                                }}
                                />
                                <span className={styles.dep}>{item.sigla_dep}</span>
                            </div>
                            <div>
                                <span className={styles.senha}>{item.senha}</span>
                            </div>
                            <div className={styles.copyClipboard} onClick={() => { navigator.clipboard.writeText(item.senha); notify(item.sigla_dep) }} >
                                <MdContentCopy size={24} color="#fff" />
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </>
    )
}



