import React, { useState, useEffect } from 'react';
import { PieChart, Pie } from 'recharts';

import api from '../services/api.js'

import styles from "../styles/pages/DashboardTeste.module.css";

import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';

export function DashboardTeste() {

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
            <div className={styles.loadingContainerPage}>
                <Navbar />
                    <h1>Carregando dados...</h1>
                <Footer />
            </div>
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
                                    <span className={styles.percentConclusion}>{deposito.controlmobile.dados_dashboard[0].value}%</span>
                                    <span className={styles.siglaDeposito}>{deposito.sigla_dep} - {deposito.cidade}</span>
                                    <PieChart width={200} height={200}>
                                        <Pie data={deposito.controlmobile.dados_dashboard} startAngle={90} endAngle={-360} dataKey="value" nameKey="name" cx="50%" cy="50%" innerRadius={60} outerRadius={75} label={false} />
                                    </PieChart>
                            </div>
                        )}
                    </div>

                    <div className={styles.containerProgressBar}>
                        <div className={styles.textProgressBar}>
                            <h2>Status de conclusão de implantação nos 12 depósitos:</h2>
                            <h2 className={styles.statusPercent}>25%</h2>
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



