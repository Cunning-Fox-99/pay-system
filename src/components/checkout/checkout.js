import React, {Component} from "react";

import FormBlock from "../form-block";
import CheckoutTop from "./checkout-top/checkout-top";

import './checkout.scss'

export default class Checkout extends Component {

    render() {

        return <div className='checkout'>

            <button className="checkout__link-back">Checkout</button>

           <CheckoutTop />

            <div className="checkout__separator">
                <span className="checkout__separator-text">or pay with card</span>
            </div>

            <FormBlock/>

            <div className="checkout__description">
                You'll have your <b> Plan Pro during 1 year.</b> After this period of time, your plan will be <b>automatically
                renewed</b> with its original price without any discounts applied.
            </div>

        </div>
    }
}