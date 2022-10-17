import './App.css';
import CardList from "./components/card-list/card-list.component";
import SearchBox from "./components/search-box/search-box.component";
import {useEffect, useState} from "react";

const App = () => {

    // useState gives back an array with 2 values: [value, setValue]
    // what we do here is array destructuring which means that I would like to get the values from the array
    // This values can be used then separately. useState is a hook btw.
    // Important: rerender happens when searchField's value changes and not when setSearchField function get called.
    const [searchField, setSearchField] = useState('');
    const [monsters, setMonsters] = useState([]);
    const [filteredMonsters, setFilteredMonsters] = useState(monsters)

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users').then(response => response.json())
            .then(users => setMonsters(users));
    }, [])

    useEffect(() => {
        setFilteredMonsters(monsters.filter((monster) => onNameFilter(monster.name)))
    }, [searchField, monsters])

    const onSearchChange = (event) => {
        const lowerCasedSearchFieldString = event.target.value.toLowerCase();
        setSearchField(lowerCasedSearchFieldString);
    }

    const onNameFilter = (monsterName) => {
        return monsterName.toLowerCase().includes(searchField);
    }

    return (
        <div className="App">
            <h1 className="app-title">Monsters Rolodex</h1>
            <SearchBox className="search-box" onChangeHandler={onSearchChange} placeholder="search monsters"/>
            <CardList monsters={filteredMonsters}/>
        </div>
    )
}

export default App;
