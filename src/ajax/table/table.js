import React, { Component } from 'react';

class Table extends Component {
    constructor() {
        super()
        this.state = {
            firstTable: []
        }
    }

    fetchUrl = (url) => {
        if (url) {
            fetch('https://reqres.in/api/' + url)
                .then(response => response.json())
                .then((result) => {
                    console.log(result);
                    this.setState({firstTable: result.data})
                });
        }
    }

        componentDidMount() {
            this.fetchUrl("users");
        }



    render() {
        const { firstTable } = this.state;


        return (

            <div className="App">
                <h1> (II/I) Exemple React AJAX </h1>
                <p> Dans cet exemple, on va utiliser le traitement Ajax avec fetch sur un tableau</p>


                <table>


                    <thead>
                            <tr>
                                    <th>First Name</th>
                                    <th>Last Name</th>
                                    <th>Profil Picture</th>
                            </tr>

                    </thead>


                <tbody>

                {firstTable.map(p=> (
                <tr key={p.id}>
                    <td>{p.first_name}</td>
                    <td>{p.last_name}</td>
                    <td><img alt={p.first_name} src={p.avatar}/></td>

                </tr>))}

                </tbody>
                </table>

            </div>
        );
    }
}

export default Table;