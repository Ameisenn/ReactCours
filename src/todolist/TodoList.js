import React, { Component } from 'react';

class TodoList extends Component {
    constructor(){
        super();
        this.state = {
            userInput: '',
            items: []
        }
    }

    onChange(event) {
        this.setState({
            userInput: event.target.value
        });
    }

    addTodo(event){
        event.preventDefault();
        this.setState({
            userInput: '',
            items: [...this.state.items, this.state.userInput]   //le spread operateur en ES6 simple
        });
    }


    deleteTodo(event) {
        event.preventDefault();
        const array = this.state.items;
        const index = array.indexOf(event.target.value);
        array.splice(index, 1);
        this.setState({
            items: array
        });
    }




    renderTodos(){
        return this.state.items.map((item) => {
            return (
                <li key={item}>
                {item} | <button onClick={this.deleteTodo.bind(this)}>X</button>
                </li>
        );
        });
    }


    render(){
        return(
         <div>
            <h1>(Exo) Ma To Do List</h1>

                <form>
                    <input value={this.state.userInput} type="text" onChange={this.onChange.bind(this)}/>
                    <button onClick={this.addTodo.bind(this)}>Ajouter</button>
                </form>

                <ul>
                    {this.renderTodos()}
                </ul>
        </div>
    );
    }

}


export default TodoList;