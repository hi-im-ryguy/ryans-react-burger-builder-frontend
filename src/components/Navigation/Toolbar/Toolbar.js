import React from 'react';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import ToggleSideDrawerButton from '../ToggleSideDrawerButton/ToggleSideDrawerButton';
import styles from './Toolbar.css';

const toolbar = (props) => {
    return (
        <header className={styles.Toolbar}>
            <div>
                <ToggleSideDrawerButton onClick={props.onToggleSideDrawerButtonClick} />
            </div>
            <div className={styles.Logo}>
                <Logo></Logo>
            </div>
            <nav className={styles.DesktopOnly}>
                <NavigationItems></NavigationItems>
            </nav>
        </header>
    );
}

export default toolbar;