import React from 'react';
import { VscGraph } from "react-icons/vsc";

import styles from "../styles/components/PageNotFound.module.css";

export function PageNotFound() {
    return (
        <div className={styles.container}>
            <div className={styles.containerNotFound}>
                <h1>404 ERROR</h1>
                <span>A página que você está procurando não existe.</span>
            </div>
        </div>
    )
}



