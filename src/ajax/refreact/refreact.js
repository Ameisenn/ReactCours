import React, { Component } from 'react';
import ReactDOM from 'react-dom'

class RefReact extends Component {
    constructor() {
        super()
        this.state = {
            data: 'Hello World'
        }
        this.clearMyInput = this.clearMyInput.bind(this);
        this.inputUpdateState = this.inputUpdateState.bind(this)
    }
    clearMyInput(){
        this.setState({data:''});
        ReactDOM.findDOMNode(this.refs.myInput).focus();
        ReactDOM.findDOMNode(this.refs.myInput).style.backgroundColor = "#ead179";
}
    inputUpdateState(e){
        this.setState({data:e.target.value});
    }


    render() {
        return (

            <div className="App">
                <h1> (III) Ref. React JS </h1>
                <p>Ref React JS</p>
                <p> La référence ref est utilisée pour renvoyer une réference à l'element</p>

                <input type="text" value={this.state.data} ref="myInput" onChange={this.inputUpdateState}/>
                <button onClick={this.clearMyInput}> Cliquer </button>

            </div>
        );
    }
}

export default RefReact;