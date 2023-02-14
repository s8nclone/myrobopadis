import React, { Component } from "react";
import CardList from "./CardList";
import SearchBox from './SearchBox';
import { padis }  from './padis';

class App extends Component {
    constructor() {
        super()
        this.state = {
            padis: padis,
            searchfield: ''
        }
    }

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
                <h1>RoboPadis</h1>
                <SearchBox searchChange={this.onSearchPadis} />
                <CardList padis = {filteredPadis} />
            </div>
        )
    };
}

export default App;