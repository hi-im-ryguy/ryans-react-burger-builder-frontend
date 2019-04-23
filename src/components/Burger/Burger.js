import React from 'react';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';
import styles from './Burger.css';

const burger = (props) => {
    let transformedIngredients = Object.keys(props.burgerIngredients)
        .map(burgerIngredientKey => {
            return [...Array(props.burgerIngredients[burgerIngredientKey])].map((_, i) => {
                return <BurgerIngredient key={burgerIngredientKey + i} type={burgerIngredientKey} />;
            })
        })
        .reduce((arr, el) => {
            return arr.concat(el)
        }, [])
    if (transformedIngredients.length === 0) {
        transformedIngredients = (
            <p> GET Ingredients & Start Adding Ingredients.</p>
        )
    }
    return (
        <div className={styles.Burger}>
            <BurgerIngredient type="bread-top"/>
            {transformedIngredients}
            <BurgerIngredient type="bread-bottom"/>
        </div>
    );
};

export default burger;