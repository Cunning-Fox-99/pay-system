import React, {Component} from "react";

import './info-block.scss'

export default class InfoBlock extends Component {

    render() {
        return <div className='info-block'>

            <h2 className="info-block__title">{"Order info <= 100 char."}</h2>
            <span className="info-block__title-description">{"Description <= 400 char."}</span>

            <div className="info-block__body">
                <span className="info-block__text">Lammel Professional Smart Skin Compact Powder</span>
                <span className="info-block__description">Пудра для лица</span>
            </div>

            <span className="info-block__price">Total 299.99 UAH</span>

        </div>
    }
}