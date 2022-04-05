import React, {Component} from "react";
import Languages from "../languages/languages";
import Checkout from "../checkout";

import './app.scss'
import InfoBlock from "../info-block";

export default class App extends Component {

    render() {
        return <div className='container'>

            <Languages />

            <main className="main">
                <Checkout />
                <InfoBlock />
            </main>

            <span className="bottom-text">Powered by&nbsp;<b>Solid</b></span>

        </div>
    }
}