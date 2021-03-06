import React from 'react'
import classes from "./Burger.module.css"
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

const Burger = () => {
  return (
    <div className={classes.Burger}>
        <BurgerIngredient type="bread-bottom"/>
        <BurgerIngredient type="cheese"/>
        <BurgerIngredient type="meat"/>
        <BurgerIngredient type="bread-top"/>
    </div>
  )
}

export default Burger