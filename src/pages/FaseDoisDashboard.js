import styles from "../styles/pages/FaseDoisDashboard.module.css";

import React, {useState, useEffect} from 'react';
import { PieChart, Pie } from 'recharts';

import api from '../services/api.js'


  const cad = [
    {
      "name": "Realizado",
      "value": 100,
      "fill": '#43cc46'
    },
    {
      "name": "Pendente",
      "value": 0,
      "fill": '#dbdbdb'
    }
  ];


export function FaseDoisDashboard(){  

    const [dashboards, setDashboards] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function loadDashboards(){      
            const response = await api.get('/dashboards/fasedois')
            setDashboards(response.data);             
            setLoading(false);
            console.log(response.data)
        };        
        loadDashboards();  
         
      }, []);

      if(loading){
        return (
            <div className={styles.containerPage}>
                <h1>Carregando...</h1>
            </div>
        )
    }  

    return(
        <div className={styles.containerPage}>

             <div className={styles.header}>
                <h1 className={styles.titlePage}><span>DASHBOARD</span>&nbsp;&nbsp;FASE 2 DO PROJETO RECICLAGEM</h1>                
            </div>

            <div className={styles.containerLegendaStatus}>
                <div className={styles.concluido}>
                    <div className={styles.concluidoColor}></div>
                    <span>Concluído</span>
                    <span></span>
                </div>
                
                <div className={styles.iniciar}>
                    <div className={styles.iniciarColor}></div>
                    <span>A iníciar</span>
                    <span></span>
                </div>
             </div> 
                <div className={styles.wrapper}>
                    {dashboards.map(deposito => 
                            <div className={styles.containerDashboard}>
                            <h1 className={deposito.dados_dashboard[0].value === 0 ? styles.statusDepositoZero : styles.statusDeposito}>{deposito.dados_dashboard[0].value}%</h1>    
                                <PieChart width={100} height={100}>  
                                    <Pie data={deposito.dados_dashboard} margin={ {top: 5, right: 5, bottom: 5, left: 5} } startAngle={90} endAngle={-360} dataKey="value" nameKey="name" cx="50%" cy="50%" innerRadius={38} outerRadius={45} label={false} />
                                </PieChart>
                            <h2 className={styles.depositoTitle}>{deposito.sigla_dep} - {deposito.cidade}</h2> 
                            </div>
                        )}
                </div>


            {/* <div className={styles.wrapper}>
                  <div className={styles.containerDashboard}>
                  <h1 className={styles.statusDeposito}>100%</h1>    
                      <PieChart width={100} height={100}>  
                          <Pie data={cad} margin={ {top: 5, right: 5, bottom: 5, left: 5} } startAngle={90} endAngle={-360} dataKey="value" nameKey="name" cx="50%" cy="50%" innerRadius={38} outerRadius={45} label={false} />
                      </PieChart>
                    <h2 className={styles.depositoTitle}>CAD - CAMPO MAIOR</h2> 
                  </div>
            </div>  */}

            
            <div className={styles.containerProgressBar}>
                
             <div className={styles.statusTitleContainer}>
                      <h2 className={styles.statusText}>Status geral da implantação nos 24 depósitos:</h2>
                </div>
                <div className={styles.progressBar}>
                  <div></div>
                </div>
                
                <div className={styles.statusContainer}>
                      <h2 className={styles.statusPercent}>0%</h2>
                </div>
            </div>  
          
            <footer className={styles.footerStyle}>
                <p>Desenvolvido por: equipe de padronização de depósitos</p>
            </footer>
        </div>
    )
}


