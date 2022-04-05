import React, {Component} from "react";

import './languages.scss'

export default class Languages extends Component {

    render() {
        return <div className='languages'>
            <ul className="languages__list">
                <li className="languages__list-item">Eng</li>
                <li className="languages__list-item active">Укр</li>
            </ul>
        </div>
    }
}