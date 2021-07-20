import React, { useState, useEffect } from 'react';
import { PieChart, Pie } from 'recharts';

import api from '../services/api.js'

import styles from "../styles/pages/FaseDois.module.css";

import { Navbar } from '../components/Navbar';
import { Loading } from '../components/Loading';
import { Footer } from '../components/Footer';

export function FaseDois() {

    const [dashboards, setDashboards] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function loadDashboards() {
            const response = await api.get('/dashboards/fasedois')
            setDashboards(response.data);
            setLoading(false);
            console.log(response.data)
        };
        loadDashboards();

    }, []);

    if(loading){
        return (
            <>
                <Navbar />
                <Loading />
                <Footer />
            </>
        )
    }
    
    return (
        <>
            <Navbar />
            <div className={styles.containerPage}>
                <div className={styles.containerDashboard}>

                    <div>
                        <h1 className={styles.title}><span className={styles.dashboard}>DASHBOARD</span>&nbsp;Implantação/reciclagem das atividades da FASE 02</h1>
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
                                    <span className={styles.percentConclusion}>{deposito.dados_dashboard[0].value}%</span>
                                    <span className={styles.siglaDeposito}>{deposito.sigla_dep} - {deposito.cidade}</span>
                                    <PieChart width={100} height={100}>
                                        <Pie data={deposito.dados_dashboard} startAngle={90} endAngle={-360} dataKey="value" nameKey="name" cx="50%" cy="50%" innerRadius={38} outerRadius={45} label={false} />
                                    </PieChart>
                                </div>
                        )}
                    </div>

                    <div className={styles.containerProgressBar}>
                        <div className={styles.textProgressBar}>
                            <h2>Status de conclusão da fase dois nos 24 depósitos:</h2>
                            <h2 className={styles.statusPercent}>0%</h2>
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



