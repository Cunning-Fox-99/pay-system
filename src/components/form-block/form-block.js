import React, {Component} from "react";
import info from './info.svg'
import loading from './loader.svg'

import './form-block.scss'

export default class FormBlock extends Component {

    state = {
        active : false
    }

    handleChange = (e) => {
        e.preventDefault()

        this.setState((state) => {
            return {active: !state.active}
        })
    }

    render() {

        const {active} = this.state

        return <form className="form-block">

            <label className="form-block__input-wrapper"> Card Number
                <input type="text" placeholder='1234 1234 1234 1234'/>
            </label>

            <div className="form-block__wrapper">

                <label className="form-block__input-wrapper form-block__input-wrapper--half"> Expiration Date
                    <input type="text" placeholder='MM/YY'/>
                </label>

                <label className="form-block__input-wrapper form-block__input-wrapper--half"> CVC
                    <img src={info} alt="" className="form-block__info"/>
                    <input type="password" placeholder='•••'/>
                </label>

            </div>

            <button className={active === false ? "form-block__button" : "form-block__button active"} onClick={this.handleChange}>
                <span className="form-block__button-text form-block__button-text--pay">Pay 299.99 UAH</span>
                <div className="form-block__loading">
                    <img src={loading} alt=""/> <span className="form-block__button-text">Processing payment</span>
                </div>
            </button>

        </form>
    }
}