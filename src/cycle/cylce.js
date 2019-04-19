import React, { Component } from 'react';
import Content from './content'

class Cycle extends Component {
    constructor() {
        super();
        this.state = {
            data: 0
        }
        this.setNumero = this.setNumero.bind(this)
    }

    setNumero() {
        this.setState({data: this.state.data + 1})
    }


    render(){
        return (

            <div className="App">
                <h1> (I) Cycle de vie des Composants </h1>
                <p> Dans cet Expemple on a initialisé notre data à zéro et avec le bouton ajouteron va mettre à jour
                    le state via la fonction setNumero.<br/>
                    Toutes les méthodes cycle de vie seront implementées dans le composant enfant Content
                </p>
                <button onClick={this.setNumero.bind(this)}> Incrementation </button>
                <Content dataProp={this.state.data}/>

            </div>
        );
    }
}







export default Cycle;