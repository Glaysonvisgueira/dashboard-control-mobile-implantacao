import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
import api from '../services/api.js'

import { BiListUl } from "react-icons/bi";

import styles from "../styles/pages/ListaDepositos.module.css"; 

import {Navbar} from '../components/Navbar';
import {Loading} from '../components/Loading';
import {Footer} from '../components/Footer';

export function ListaDepositos(){ 

    const [depositos, setDepositos] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function loadDepositos(){      
            const response = await api.get('/depositos')
            setDepositos(response.data); 
            setLoading(false); 
        };        
        loadDepositos();  
        //console.log(depositos);
      }, []);

      async function handleClickDeposito(sigla_dep){
              localStorage.setItem('@projetoreciclagem:sigla_deposito', sigla_dep);
      }

      if(loading){
        return (
            <>
                <Navbar />
                    <div className={styles.containerPage}>
                        
                        <div className={styles.titleContainer}>
                                <div className={styles.titleAndIcon}>
                                <BiListUl size={34} color="#468385"/>
                                <h1 className={styles.title}>&nbsp;Detalhes sobre o depósito</h1>
                                </div>
                                <span>Escolha um depósito para acessar suas informações.</span>
                            </div>
                    
                            <Loading />
                    </div>
            <Footer />  
            </>
        )
    }
    
    return(
        <>
            <Navbar />
                <div className={styles.containerPage}>
                    
                    <div className={styles.titleContainer}>
                            <div className={styles.titleAndIcon}>
                            <BiListUl size={34} color="#468385"/>
                            <h1 className={styles.title}>&nbsp;Detalhes sobre o depósito</h1>
                            </div>
                            <span>Escolha um depósito para acessar suas informações.</span>
                        </div>
                   
                        <div className={styles.grid}>
                           
                                    
                                     {depositos.map(deposito =>
                                        <Link to={`/depositos/${deposito.sigla_dep.toLowerCase()}`} className={styles.linkDep}
                                                    onClick={() => {handleClickDeposito(deposito.sigla_dep)}} >
                                                     <div className={styles.card}>
                                                    
                                                    <span className={styles.textDeposito}>{deposito.sigla_dep}</span>
                                                    <span className={styles.cidade}>{deposito.dados_geograficos.cidade} - {deposito.dados_geograficos.uf}</span>
                                                 </div> 
                                        </Link>
                                    )} 

                                
                    </div>
                </div>
            <Footer />  
        </>
    )
}



