import React, { useState, useEffect } from 'react';
import { PieChart, Pie } from 'recharts';

import api from '../services/api.js'

import styles from "../styles/pages/ControlMobileDashboard.module.css";

import { Navbar } from '../components/Navbar';
import { Loading } from '../components/Loading';
import { Footer } from '../components/Footer';


export function ControlMobileDashboard() {

    const [dashboards, setDashboards] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function loadDashboards() {
            const response = await api.get('/dashboards/controlmobile')
            setDashboards(response.data);
            setLoading(false);
            console.log(response.data)
        };
        loadDashboards();

    }, []);

    if (loading) {
        return (
            <>
                <Navbar />
                <div className={styles.containerPage}>
                    <Loading />
                </div>
            </>
        )
    }

    return (
        <>
            <Navbar />
            <div className={styles.containerPage}>
                <div className={styles.containerDashboard}>

                    <div>
                        <h1 className={styles.title}><span className={styles.dashboard}>DASHBOARD</span>&nbsp;Implantação do gestor de montagem <strong>Control Mobile</strong></h1>
                        <div className={styles.legendas}>
                            <div className={styles.greenColor}></div>
                            <span>&nbsp;Concluído</span>
                            <div className={styles.greyColor}></div>
                            <span>&nbsp;A iniciar</span>
                        </div>
                    </div>

                    <div className={styles.grid}>
                        {dashboards.map(deposito =>
                            <div className={styles.card}>
                                <span className={deposito.controlmobile.dados_dashboard[0].value != 0 ? styles.percentConclusion : styles.percentConclusionZero}>{deposito.controlmobile.dados_dashboard[0].value}%</span>
                                <span className={styles.siglaDeposito}><strong>{deposito.sigla_dep}</strong> | {deposito.cidade} - {deposito.uf}</span>
                                <PieChart width={160} height={160}>
                                    <Pie data={deposito.controlmobile.dados_dashboard} startAngle={90} endAngle={-360} dataKey="value" nameKey="name" cx="50%" cy="50%" innerRadius={60} outerRadius={75} label={false} />
                                </PieChart>
                            </div>
                        )}
                    </div>

                    <div className={styles.containerProgressBar}>
                        <div className={styles.textProgressBar}>
                            <h2>Status de conclusão de implantação nos 15 depósitos:</h2>
                            <h2 className={styles.statusPercent}>26%</h2>
                        </div>
                        <div className={styles.progressBar}>
                            <div></div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />  
        </>
    )
}



