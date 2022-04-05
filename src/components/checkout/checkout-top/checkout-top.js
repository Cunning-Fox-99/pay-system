import React, {Component} from "react";
import pay from "../pay.png";

export default class CheckoutTop extends Component {

    render() {
        return  <div className="checkout__top">

            <h1 className="checkout__title">5 days free</h1>
            <span className="checkout__title-description">then 299.99 UAH per 14 days</span>
            <button className="checkout__button">
                <img src={pay} alt=""/>
            </button>

        </div>
    }
}