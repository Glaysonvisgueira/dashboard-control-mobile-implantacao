import React from 'react';
import {MapContainer, TileLayer, Marker, Popup } from "react-leaflet"; 
     
import styles from "../styles/pages/Mapa.module.css"; 

import {Navbar} from '../components/Navbar';
import {Footer} from '../components/Footer';
import {Loading} from '../components/Loading';

export function Mapa(){ 

    return(
        <>
            <link rel="stylesheet" href="https://unpkg.com/leaflet@1.7.1/dist/leaflet.css"
                integrity="sha512-xodZBNTC5n17Xt2atTPuE1HxjVMSvLVW9ocqUKLsCC5CXdbqCmblAshOMAS6/keqq/sMZMZ19scR4PsZChSR7A=="
                crossorigin=""/>
            <script src="https://unpkg.com/leaflet@1.7.1/dist/leaflet.js"
                integrity="sha512-XQoYMqMTK8LvdxXYG3nZ448hOEQiglfqkJs1NOQV44cWnUrBc8PkAOcXy20w0vlaXaVUearIOBhiXZ5V3ynxwA=="
                crossorigin="">
            </script>
            <Navbar />
            
                <div className={styles.containerPage}>
               
                                    
                    

                    
                        <MapContainer 
                                /* className={styles.map} */
                                center={[
                                    -7.8808191,
                                    -41.7181366,
                                ]}
                                zoom={12}
                                style={{width: '100%', height: '100%'}}
                                scrollWheelZoom={true}
                                doubleClickZoom={true}
                                
                            >
                            <TileLayer 
                                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                                url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png"
                            />
                            {/* <Marker
                                position={[
                                    -7.8808191,
                                    -41.7181366,
                                ]}
                            >
                                <Popup>
                                    <span>Aqui está o depósito de !</span>
                                </Popup>
                                
                            </Marker> */}
                            
                        </MapContainer>

                    

                        </div>
           
        </>
    )
}



