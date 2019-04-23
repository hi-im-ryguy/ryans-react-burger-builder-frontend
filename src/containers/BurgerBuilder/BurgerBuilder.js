import React, { Component } from 'react';
import axios from 'axios';

import Burger from '../../components/Burger/Burger';
import BurgetGETIngredients from '../../components/Burger/BurgerGETIngredients/BurgerGETIngredients';
import BurgerControls from '../../components/Burger/BurgerControls/BurgerControls';
import BurgerOrderSummary from '../../components/Burger/BurgerOrderSummary/BurgerOrderSummary';
import Modal from '../../components/UI/Modal/Modal';

const INGREDIENT_PRICES = {
    salad: 0.5,
    cheese: 0.4,
    meat: 1.5,
    bacon: 1.2
}

class BurgerBuilder extends Component {
    constructor(props) {
        super(props);
        this.state = {
            burgerIngredients: {},
            totalPrice: 4.00,
            isPurchaseable: false,
            isPurchasing: false
        }
    }

    componentDidMount = () => {

    }

    getIngredients = () => {
        axios.get('https://ryans-react-burger-builder-be.herokuapp.com/restaurant/ingredients')
            .then((response) => {
                this.setState({
                    burgerIngredients: response.data.burgerIngredients
                })
            })
    }

    updateIsPurchaseabledState = (ingredients) => {
        const sum = Object.keys(ingredients)
            .map(ingredientKey => {
                return ingredients[ingredientKey]
            })
            .reduce((sum, el) => {
                return sum + el;
            }, 0);
        this.setState({
            isPurchaseable: sum > 0
        });
    }

    addIngredientHandler = (type) => {
        const oldCount = this.state.burgerIngredients[type];
        const updatedCounted = oldCount + 1;
        const updatedIngredients = {
            ...this.state.burgerIngredients
        };
        updatedIngredients[type] = updatedCounted;

        const priceAddition = INGREDIENT_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice + priceAddition;
        this.setState({
            burgerIngredients: updatedIngredients,
            totalPrice: newPrice
        })
        this.updateIsPurchaseabledState(updatedIngredients);
    }

    removeIngredientHandler = (type) => {
        const oldCount = this.state.burgerIngredients[type];
        if (oldCount <= 0) {
            return;
        }
        const updatedCounted = oldCount - 1;
        const updatedIngredients = {
            ...this.state.burgerIngredients
        };
        updatedIngredients[type] = updatedCounted;

        const priceDeduction = INGREDIENT_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice - priceDeduction;
        this.setState({
            burgerIngredients: updatedIngredients,
            totalPrice: newPrice
        })
        this.updateIsPurchaseabledState(updatedIngredients);
    }

    purchasingHandler = (event) => {
        this.setState({
            isPurchasing: true
        })
    }

    purchaseCancelHandler = () => {
        this.setState({
            isPurchasing: false
        })
    }


    purchaseContinue = () => {
        alert('Checkout page.')
    }

    render () {
        const disabledLessButtons = {
            ...this.state.burgerIngredients
        };
        for (let key in disabledLessButtons) {
            disabledLessButtons[key] = disabledLessButtons[key] <= 0
        }

        let gotIngredients = false;
        for (let key in this.state.burgerIngredients) {
            if(this.state.burgerIngredients.hasOwnProperty(key)) {
                gotIngredients = true;
            }
        }

        return (
            <>
                <Modal show={this.state.isPurchasing} closeModal={this.purchaseCancelHandler}>
                    <BurgerOrderSummary
                        burgerIngredients={this.state.burgerIngredients}
                        totalPrice={this.state.totalPrice}
                        continuePurchase={this.purchaseContinue}
                        cancelPurchase={this.purchaseCancelHandler}></BurgerOrderSummary>
                </Modal>
                <Burger burgerIngredients={this.state.burgerIngredients} />
                { gotIngredients ? <BurgerControls
                    burgerIngredients={this.state.burgerIngredients}
                    totalPrice={this.state.totalPrice}
                    addIngredient={this.addIngredientHandler}
                    removeIngredient={this.removeIngredientHandler}
                    disabledLessButtons={disabledLessButtons}
                    isPurchaseable={this.state.isPurchaseable}
                    isPurchasing={this.purchasingHandler} />
                : <BurgetGETIngredients onClick={this.getIngredients}/>
                }
            </>
        );
    }
}

export default BurgerBuilder;