import styles from "../styles/pages/CMdashboard.module.css"; 

import React, {useState, useEffect} from 'react';
import { PieChart, Pie } from 'recharts';
import { BiCalendar } from "react-icons/bi"; 
import moment from "moment";

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


export function CMdashboard(){  

    const [dashboards, setDashboards] = useState([]);
    const [filteredDashboards, setFilterDashboards] = useState([]);
    const [loading, setLoading] = useState(true);



    useEffect(() => {
        async function loadDashboards(){      
            const response = await api.get('/dashboards/controlmobile')
            setDashboards(response.data); 
            setFilterDashboards(response.data);
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

    async function filtrarDashboards(uf){
        const novosDashboards = await dashboards.filter((item) => item.uf === uf);        
        setFilterDashboards(novosDashboards);        
    }

    async function filtrarTodosDashboards(){      
        setFilterDashboards(dashboards);        
    }
    
    return(
        <div className={styles.containerPage}>

            <div className={styles.header}>
                <h1 className={styles.titlePage}><span>DASHBOARD</span>&nbsp;&nbsp;IMPLANTAÇÃO DO SISTEMA CONTROL MOBILE</h1>                
            </div>

            <div className={styles.containerLegendaStatusFiltros}>

                <div className={styles.legendas}>
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

                {/* <div className={styles.filtros}>
                    
                      <button id="TODOS" className={ filteredDashboards.length === 12 ? styles.buttonsFiltroSelected : styles.buttonsFiltro} type="button" onClick={() => {filtrarTodosDashboards()}}>
                          Todos (12)
                      </button>
                      <button id="TODOS" className={filteredDashboards.length === 4 ? styles.buttonsFiltroSelected : styles.buttonsFiltro} type="button" onClick={() => {filtrarDashboards('PI')}}>
                          Piauí (4)
                      </button>
                      <button id="TODOS" className={filteredDashboards.length === 6 ? styles.buttonsFiltroSelected : styles.buttonsFiltro} type="button" onClick={() => {filtrarDashboards('MA')}}>
                          Maranhão (6)
                      </button>
                      <button id="TODOS" className={filteredDashboards[0].uf === 'BA' ? styles.buttonsFiltroSelected : styles.buttonsFiltro} type="button" onClick={() => {filtrarDashboards('BA')}}>
                          Bahia (1)
                      </button>
                      <button id="TODOS" className={filteredDashboards[0].uf === 'PE'? styles.buttonsFiltroSelected : styles.buttonsFiltro} type="button" onClick={() => {filtrarDashboards('PE')}}>
                          Pernambuco (1)
                      </button>
                    
                    
                    
                </div> */}
                
             </div>
        
            


            <div className={styles.wrapper}>

                
                    {filteredDashboards.map(dashboard =>
                        <div className={styles.containerDashboard}>
                            {/* <h3 className={styles.modalidadeText}>{dashboard.controlmobile.modalidade}</h3> */}                            
                            <h1 className={ dashboard.controlmobile.dados_dashboard[0].value === 0 ? styles.statusDepositoZero : styles.statusDeposito}>{dashboard.controlmobile.dados_dashboard[0].value}%</h1>    
                            <PieChart width={200} height={200}>  
                                <Pie data={dashboard.controlmobile.dados_dashboard} startAngle={90} endAngle={-360} dataKey="value" nameKey="name" cx="50%" cy="50%" innerRadius={60} outerRadius={75} label={false} />
                            </PieChart>
                            <h2 className={styles.depositoTitle}>{dashboard.sigla_dep} - {dashboard.cidade}</h2> 

                            {dashboard.controlmobile.data_implantacao === null ? (
                                <div></div>
                            ) : (
                                <div className={styles.containerDate}>
                                    <BiCalendar size={22} color="#3d3d3d"/>
                                    <h3 className={styles.dataImplatacao}>{moment(dashboard.controlmobile.data_implantacao).format("DD/MM/YYYY")}</h3>
                                </div>
                            )}

                        </div>                        
                        )}

                  

            </div> 

            
             <div className={styles.containerProgressBar}>
                
             <div className={styles.statusTitleContainer}>
                      <h2 className={styles.statusText}>Status geral da implantação nos 12 depósitos:</h2>
                </div>
                <div className={styles.progressBar}>
                  <div></div>
                </div>
                
                <div className={styles.statusContainer}>
                      <h2 className={styles.statusPercent}>8%</h2>
                </div>
            </div> 
          
            <footer className={styles.footerStyle}>
                <p>Desenvolvido por: equipe de padronização de depósitos</p>
            </footer>

            
           

        </div>
    )
}



