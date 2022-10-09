import {Component} from 'react';

import logo from './logo.svg';
import './App.css';

class App extends Component {
    constructor() {
        console.log("Constructor");
        super();

        this.state = {
            monsters: []
        };
    }

    componentDidMount() {
        console.log("componentDidMount");
        fetch('https://jsonplaceholder.typicode.com/users').then(response => response.json())
            .then(users => this.setState(() => ({monsters: users}), () => console.log("Successful state set.")));
    }

    render() {
        console.log("render")
        return (
            <div className="App">
                {
                    this.state.monsters.map((monster) => {
                        return <div key={monster.id}><h1>{monster.name}</h1></div>
                    })
                }
            </div>
        );
    }
}

export default App;
