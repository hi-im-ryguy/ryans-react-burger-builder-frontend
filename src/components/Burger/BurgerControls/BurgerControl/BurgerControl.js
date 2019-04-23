import React from 'react';
import styles from './BurgerControl.css';

const burgerControl = (props) => (
    <div className={styles.BurgerControl}>
        <div className={styles.Label}><span style={{textTransform: 'capitalize'}}>{props.label}</span></div>
        <button
            className={styles.Less}
            onClick={props.removeIngredient}
            disabled={props.isDisabled}>
            Less
        </button>
        <button
            className={styles.More}
            onClick={props.addIngredient}>
            More
        </button>
    </div>
);

export default burgerControl;