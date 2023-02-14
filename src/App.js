import React, { Component } from "react";
import CardList from "./CardList";
import SearchBox from './SearchBox';
import { padis }  from './padis';
import './App.css';
import Scroll from './Scroll';

class App extends Component {
    constructor() {
        super()
        this.state = {
            padis: padis,
            searchfield: ''
        }
    }

    // componentDidMount() {
    //     fetch('https://jsonplaceholder.typicode.com/users')
    //     .then(res => res.json())
    //     .then(users => {this.setState({ padis: users})})
    // }

    onSearchPadis = (event) => {
        this.setState({ searchfield: event.target.value })
        console.log(event.target.value)
    }

    render() {
        const filteredPadis = this.state.padis.filter(padis => {
            return padis.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
        })
        return (
            <div className = "tc">
                <h1 className="f1">RoboPadis</h1>
                <SearchBox searchChange={this.onSearchPadis} />
                <Scroll>
                    <CardList padis = {filteredPadis} />
                </Scroll>
            </div>
        )
    };
}

export default App;