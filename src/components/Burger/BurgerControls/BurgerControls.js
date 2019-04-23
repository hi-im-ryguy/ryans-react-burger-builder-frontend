import React from 'react';
import BurgerControl from './BurgerControl/BurgerControl';
import styles from './BurgerControls.css';

// const CONTROLS = [
//     { label: 'Salad', type: 'salad' },
//     { label: 'Bacon', type: 'bacon' },
//     { label: 'Cheese', type: 'cheese' },
//     { label: 'Meat', type: 'meat' }
// ];

const buildControls = (props) => (
    <div className={styles.BurgerControls}>
        <div>
            <p><strong>Total Price: ${props.totalPrice.toFixed(2)}</strong></p>
        </div>
        {
            Object.keys(props.burgerIngredients)
            .map(key => {
                return <BurgerControl
                    key={key}
                    label={key}
                    addIngredient={() => props.addIngredient(key)}
                    removeIngredient={() => props.removeIngredient(key)}
                    isDisabled={props.disabledLessButtons[key]} />
            })
        }
        <button
            className={styles.OrderButton}
            onClick={props.isPurchasing}
            disabled={!props.isPurchaseable}>
            ORDER
        </button>
    </div>
)

export default buildControls;