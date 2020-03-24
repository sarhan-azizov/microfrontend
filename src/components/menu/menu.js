import React from "react";
import { Link } from 'react-router-dom';

import styles from './menu.scss';

const Menu = () => (
    <ul className={styles.root}>
        <li className={styles.item}>
            <Link to='/'>MS 1</Link>
        </li>
        <li className={styles.item}>
            <Link to='/b'>MS 1</Link>
        </li>
    </ul>
);

export default Menu;