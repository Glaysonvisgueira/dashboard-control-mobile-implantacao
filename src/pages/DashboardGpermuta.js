import React, { useState, useEffect } from 'react';
import { PieChart, Pie } from 'recharts';

import api from '../services/api.js'

import styles from "../styles/pages/DashboardGpermuta.module.css";

import { Navbar } from '../components/Navbar';
import { Loading } from '../components/Loading';
import { Footer } from '../components/Footer';

export function DashboardGpermuta() {

    const [dashboards, setDashboards] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function loadDashboards() {
            const response = await api.get('/dashboards/gpermuta')
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
                        <span className={styles.title}><span className={styles.dashboard}>DASHBOARD</span>&nbsp;Implantação/reciclagem da ficha de permuta</span>
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
                                {deposito.gpermuta.tipo === null ? <span></span> : <span className={deposito.gpermuta.tipo === 'RECICLAGEM' ? styles.textoTipoReciclagem : styles.textoTipoImplantacao}>{deposito.gpermuta.tipo}</span>}
                                <span className={deposito.gpermuta.dados_dashboard[0].value != 0 ? styles.percentConclusion : styles.percentConclusionZero}>{deposito.gpermuta.dados_dashboard[0].value}%</span>
                                <span className={styles.siglaDeposito}><strong>{deposito.sigla_dep}</strong> | {deposito.cidade} - {deposito.uf}</span>
                                <PieChart width={100} height={100}>
                                    <Pie data={deposito.gpermuta.dados_dashboard} startAngle={90} endAngle={-360} dataKey="value" nameKey="name" cx="50%" cy="50%" innerRadius={38} outerRadius={45} label={false} />
                                </PieChart>
                            </div>
                        )}
                       
                    </div>
                    
                    <div className={styles.containerProgressBar}>                    
                        <div className={styles.textProgressBar}>
                            <h2>Status atual de implantação/reciclagem nos 24 depósitos:</h2>
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



