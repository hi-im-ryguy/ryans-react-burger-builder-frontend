import React from 'react';
import Button from '../../UI/Button/Button';
// import styles from './BurgerOrderSummary.css';

const burgerOrderSummary = (props) => {

    const burgerIngredientsSummary = Object.keys(props.burgerIngredients)
        .map(key => {
            return <li key={key}>
                <span style={{textTransform: 'capitalize'}}>
                {key}
                </span>
                : {props.burgerIngredients[key]}
            </li>
        });

    return (
        <>
            <h2>Your Order</h2>
            <p>Test:</p>
            <ul>
                {burgerIngredientsSummary}
            </ul>
            <p><strong>Total Price: ${props.totalPrice.toFixed(2)}</strong></p>
            <p>Complete Checkout</p>
            <Button buttonType="Danger" clicked={props.cancelPurchase}>
                CANCEL
            </Button>
            <Button buttonType="Success" clicked={props.continuePurchase}>
                CONTINUE
            </Button>
        </>
    )
};

export default burgerOrderSummary;