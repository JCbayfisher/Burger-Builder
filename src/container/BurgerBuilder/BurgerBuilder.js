import React, { Component, Fragment } from 'react';
import Burger from "../../components/Burger/Burger"

export default class BurgerBuilder extends Component {
  render() {
    return (
      <Fragment>
        <Burger />
        <div>Build Control</div>
      </Fragment>
    )
  }
}
