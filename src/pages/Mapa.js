import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

import api from '../services/api.js'

import styles from "../styles/pages/Mapa.module.css";

import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { Loading } from '../components/Loading';

export function Mapa() {

    const [depositos, setDepositos] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function loadDepositos() {
            const response = await api.get('/depositos')
            setDepositos(response.data);
            setLoading(false);
        };
        loadDepositos();
        //console.log(depositos);
    }, []);

    if (loading) {
        return (
            <>
                <Navbar />
                <div className={styles.containerPage}>
                    <Loading />
                </div>
                <Footer />
            </>
        )
    }

    return (
        <>
            <link rel="stylesheet" href="https://unpkg.com/leaflet@1.7.1/dist/leaflet.css"
                integrity="sha512-xodZBNTC5n17Xt2atTPuE1HxjVMSvLVW9ocqUKLsCC5CXdbqCmblAshOMAS6/keqq/sMZMZ19scR4PsZChSR7A=="
                crossorigin="" />
            <script src="https://unpkg.com/leaflet@1.7.1/dist/leaflet.js"
                integrity="sha512-XQoYMqMTK8LvdxXYG3nZ448hOEQiglfqkJs1NOQV44cWnUrBc8PkAOcXy20w0vlaXaVUearIOBhiXZ5V3ynxwA=="
                crossorigin="">
            </script>
            <Navbar />

            <div className={styles.containerPage}>





                <MapContainer
                    /* className={styles.map} */
                    center={[
                        -6.3211022,
                        -42.4216204,
                    ]}
                    zoom={6.5}
                    style={{ width: '100%', height: '100%' }}
                    scrollWheelZoom={true}
                    doubleClickZoom={true}

                >
                    <TileLayer
                        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                        url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    {depositos.map(deposito =>
                        <Marker
                            position={[
                                `${deposito.dados_geograficos.location.latitude}`,
                                `${deposito.dados_geograficos.location.longitude}`,
                            ]}
                        >
                            <Popup>
                                <span className={styles.perfil}>{deposito.perfil}</span>
                                <div className={styles.popUpInfo}>
                                    <div className={styles.option}>
                                        <span>Depósito:</span>
                                        
                                        <span className={styles.responseInfo}>{deposito.sigla_dep}</span>
                                    </div>
                                    <div className={styles.option}>
                                        <span>Loja mãe:</span>
                                        <span className={styles.responseInfo}>{deposito.sigla_loja_mae}</span>
                                    </div>
                                    <div className={styles.option}>
                                        <span>Gerente</span>
                                        <span className={styles.responseInfo}>{deposito.gerente.nome_guerra}</span>
                                    </div>
                                    <div className={styles.option}>
                                        <span>C. de depósito</span>
                                        <span className={styles.responseInfo}>{deposito.chefe_dep.nome_guerra}</span>
                                    </div>
                                </div>
                            </Popup>

                        </Marker>
                    )}

                </MapContainer>





            </div>

        </>
    )
}



