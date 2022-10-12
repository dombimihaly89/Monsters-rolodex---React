import {Component} from 'react';

import logo from './logo.svg';
import './App.css';
import CardList from "./components/card-list/card-list.component";
import SearchBox from "./components/search-box/search-box.component";

class App extends Component {
    constructor() {
        console.log("Constructor");
        super();

        this.state = {
            monsters: [],
            searchValue: ""
        };
    }

    onNameFilter = (monsterName) => {
        return monsterName.toLowerCase().includes(this.state.searchValue);
    }

    onSearchChange = (event) => {
        this.setState(() => ({searchValue: event.target.value.toLowerCase()}));
    }

    componentDidMount() {
        console.log("componentDidMount");
        fetch('https://jsonplaceholder.typicode.com/users').then(response => response.json())
            .then(users => this.setState(() => ({monsters: users}), () => console.log("Successful state set.")));
    }

    render() {
        console.log("render")
        const { monsters, searchValue} = this.state
        const { onNameFilter, onSearchChange, state } = this

        const filteredMonsters = monsters.filter((monster) => onNameFilter(monster.name))

        return (
            <div className="App">
                <h1 className="app-title">Monsters Rolodex</h1>

                <SearchBox className="search-box" onChangeHandler={onSearchChange} placeholder="search monsters" />
                <CardList monsters={filteredMonsters} />
            </div>
        );
    }
}

export default App;
