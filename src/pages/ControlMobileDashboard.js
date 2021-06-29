import styles from "../styles/pages/ControlMobileDashboard.module.css";

import React from 'react';
import { PieChart, Pie } from 'recharts';


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

  const cdp = [
    {
      "name": "Realizado",
      "value": 29,
      "fill": '#43cc46'
    },
    {
      "name": "Pendente",
      "value": 71,
      "fill": '#dbdbdb'
    }
  ];

  const pid = [
    {
      "name": "Realizado",
      "value": 29,
      "fill": '#43cc46'
    },
    {
      "name": "Pendente",
      "value": 71,
      "fill": '#dbdbdb'
    }
  ];

  const pdc = [
    {
      "name": "Realizado",
      "value": 29,
      "fill": '#43cc46'
    },
    {
      "name": "Pendente",
      "value": 71,
      "fill": '#dbdbdb'
    }
  ];

  const iniciar = [
    {
      "name": "Realizado",
      "value": 0,
      "fill": '#43cc46'
    },
    {
      "name": "Pendente",
      "value": 100,
      "fill": '#dbdbdb'
    }
  ];

export function ControlMobileDashboard(){   

    return(
        <div className={styles.containerPage}>

            
            <div className={styles.header}>
                <h1 className={styles.titlePage}><span>DASHBOARD</span>&nbsp;&nbsp;IMPLANTAÇÃO DO SISTEMA DE MONTAGEM CONTROL MOBILE</h1>                
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
            <div className={styles.containerDashboard}>
            <h1 className={styles.statusDeposito}>100%</h1>    
                <PieChart width={200} height={200}>  
                         
                    <Pie data={cad} dataKey="value" nameKey="name" cx="50%" cy="50%" innerRadius={60} outerRadius={75} label={false} />
                </PieChart>
               <h2 className={styles.depositoTitle}>CAD - CAMPO MAIOR</h2> 
            </div>
            <div className={styles.containerDashboard}>
            <h1 className={styles.statusDeposito}>29%</h1> 
                <PieChart width={200} height={200}>            
                    <Pie data={cdp} dataKey="value" nameKey="name" cx="50%" cy="50%" innerRadius={60} outerRadius={75} label={false} />
                </PieChart>
                <h2 className={styles.depositoTitle}>CDP - CAXIAS</h2>
            </div>
            <div className={styles.containerDashboard}>
            <h1 className={styles.statusDeposito}>29%</h1> 
                <PieChart width={200} height={200}>            
                    <Pie data={pid} dataKey="value" nameKey="name" cx="50%" cy="50%" innerRadius={60} outerRadius={75} label={false} />
                </PieChart>
                <h2 className={styles.depositoTitle}>PID - PIRIPIRI</h2>
            </div>
            <div className={styles.containerDashboard}>
            <h1 className={styles.statusDeposito}>29%</h1> 
                <PieChart width={200} height={200}>            
                    <Pie data={pdc} dataKey="value" nameKey="name" cx="50%" cy="50%" innerRadius={60} outerRadius={75} label={false} />
                </PieChart>
                <h2 className={styles.depositoTitle}>PET - PETROLINA</h2>
            </div>
            <div className={styles.containerDashboard}>
            <h1 className={styles.statusDeposito2}>0%</h1> 
                <PieChart width={200} height={200}>            
                    <Pie data={iniciar} dataKey="value" nameKey="name" cx="50%" cy="50%" innerRadius={60} outerRadius={75} label={false} />
                </PieChart>
                <h2 className={styles.depositoTitle}>BDE - BALSAS</h2>
            </div>
            <div className={styles.containerDashboard}>
            <h1 className={styles.statusDeposito2}>0%</h1>
                <PieChart width={200} height={200}>            
                    <Pie data={iniciar} dataKey="value" nameKey="name" cx="50%" cy="50%" innerRadius={60} outerRadius={75} label={false} />
                </PieChart>
                <h2 className={styles.depositoTitle}>BDF - BARREIRAS</h2>
            </div>
            <div className={styles.containerDashboard}>
            <h1 className={styles.statusDeposito2}>0%</h1>
                <PieChart width={200} height={200}>            
                    <Pie data={iniciar} dataKey="value" nameKey="name" cx="50%" cy="50%" innerRadius={60} outerRadius={75} label={false} />
                </PieChart>
                <h2 className={styles.depositoTitle}>CHD - CHAPADINHA</h2>
            </div>
            <div className={styles.containerDashboard}>
            <h1 className={styles.statusDeposito2}>0%</h1>
                <PieChart width={200} height={200}>            
                    <Pie data={iniciar} dataKey="value" nameKey="name" cx="50%" cy="50%" innerRadius={60} outerRadius={75} label={false} />
                </PieChart>
                <h2 className={styles.depositoTitle}>DPU - PRES. DUTRA</h2>
            </div>
            <div className={styles.containerDashboard}>
            <h1 className={styles.statusDeposito2}>0%</h1>
                <PieChart width={200} height={200}>            
                    <Pie data={iniciar} dataKey="value" nameKey="name" cx="50%" cy="50%" innerRadius={60} outerRadius={75} label={false} />
                </PieChart>
                <h2 className={styles.depositoTitle}>DSI - SANTA INÊS</h2>
            </div>
            <div className={styles.containerDashboard}>
            <h1 className={styles.statusDeposito2}>0%</h1>
                <PieChart width={200} height={200}>            
                    <Pie data={iniciar} dataKey="value" nameKey="name" cx="50%" cy="50%" innerRadius={60} outerRadius={75} label={false} />
                </PieChart>
                <h2 className={styles.depositoTitle}>FLD - FLORIANO</h2>
            </div>
            <div className={styles.containerDashboard}>
            <h1 className={styles.statusDeposito2}>0%</h1>
                <PieChart width={200} height={200}>            
                    <Pie data={iniciar} dataKey="value" nameKey="name" cx="50%" cy="50%" innerRadius={60} outerRadius={75} label={false} />
                </PieChart>
                <h2 className={styles.depositoTitle}>FLD - FLORIANO</h2>
            </div>
            <div className={styles.containerDashboard}>
            <h1 className={styles.statusDeposito2}>0%</h1>
                <PieChart width={200} height={200}>            
                    <Pie data={iniciar} dataKey="value" nameKey="name" cx="50%" cy="50%" innerRadius={60} outerRadius={75} label={false} />
                </PieChart>
                <h2 className={styles.depositoTitle}>SRD - SÃO R. NONATO</h2>
            </div>



            </div> 
           {/*  <div className={styles.progressBar}>
                <h2>Status geral:</h2>
                <h2>8%</h2>
            </div> */}
            <footer className={styles.footerStyle}>
                <p>Desenvolvido por: equipe de padronização de depósitos</p>
            </footer>
        </div>
    )
}


