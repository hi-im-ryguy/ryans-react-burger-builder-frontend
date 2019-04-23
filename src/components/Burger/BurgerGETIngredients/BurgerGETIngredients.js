import React from 'react';
import styles from './BurgerGETIngredients.css';

const burgerGETIngredients = (props) => {
    return (
        <div className={styles.BurgerGETIngredients}>
            <button onClick={props.onClick}>GET Burger Ingredients</button>
        </div>
    )
}

export default burgerGETIngredients;