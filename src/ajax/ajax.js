import React, { Component } from 'react';


class Ajax extends Component {
    constructor() {
        super();
        this.state = {
            posts: []
        }

    }

 fetchUrl = (url) => {
       // let thisG= this;  ////////////////////////// truc de self : remonte le "this" au component via "let" =<=<=<=<=****
        if(url){
          fetch('https://jsonplaceholder.typicode.com/'+url)
              .then(response=>response.json())
              .then((result) => {
                  console.log(result);
                  this.setState({posts : result})
              } ) ;
        }
 }

 componentDidMount() {
        this.fetchUrl("albums");
 }


    render(){
        const { posts } = this.state;

      /*
         const posts = this.state;
         const toto = this.state;
         const tata = this.state;
       */


        return (

            <div className="App">
                <h1> (II) Exemple React AJAX </h1>
                <p> Dans cet exemple, on va utiliser le traitement Ajax avec fetch </p>

                <form>
                    <select multiple>
                    {posts.map(p=> (<option key={p.id} value={p.title}>  {p.title}</option>))
                    }
                    </select>
                </form>

            </div>
        );
    }
}







export default Ajax;