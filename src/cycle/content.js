import React, { Component } from "react";


class Content extends Component {

    componentWillMount() {                             //// est exécuté avant le rendu, à la fois sur le serveur et côté client
        console.log('component WILL Mount');
    }
    componentDidMount() {                             //// est exécuté après le premier rendu uniquement côté client. Aussi pour l'intégration d'autres frameworks JS et les fonctions à executions retardée (:exemples: setTimeout ou setInterval
        console.log('compenent DID Mount');
    }
    componentWillReceiveProps(nProps){                //// Mettre à jour l'état afin de déclancher les autres méthodes de cycle de vie
        console.log('Will receive props oui', nProps);
    }

    shouldComponentUpdate(nProps, nState){             //// Retourne la valeur "true" ou "false":  le composant sera mis à jour ou non (true par défault)
        return true
    }
    componentWillUpdate(nextProps, nextState) {        //// est appelée juste avant le rendu
        console.log('component WILL Update');
    }
    componentDidUpdate(prevProps, prevState) {         //// est appelée juste après le rendu
        console.log('component DID Update');
    }
    componentWillUnmount() {                           //// est appelée après que le composant a été démonté. dans le composant "main.js" ser démonté
        console.log('component WILL Unmount')
    }


    render (){

        return(
            <div>
                <h5> {this.props.dataProp} </h5>

            </div>

        );
    }

}


export default Content;