import React from "react";

import { Menu } from '../menu';
import styles from './shell.scss';

const Shell = (props) => (
    <div className={styles.root}>
        <header className={styles.header}>
            <i className={styles.logo}>KW</i>
        </header>
        <aside className={styles.aside}>
            <Menu />
        </aside>
        <main className={styles.main}>
            {props.children}
        </main>
    </div>
);

export default Shell;