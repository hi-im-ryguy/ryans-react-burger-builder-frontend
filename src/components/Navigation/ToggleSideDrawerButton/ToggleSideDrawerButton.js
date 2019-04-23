import React from 'react';
import styles from './ToggleSideDrawerButton.css';

const toggleSideDrawerButton = (props) => {
    return (
        <div className={styles.ToggleSideDrawerButton}>
            <button onClick={props.onClick}>Toggle Side Drawer</button>
        </div>
    )
}

export default toggleSideDrawerButton;