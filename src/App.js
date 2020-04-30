import React, { Component } from 'react'

import { CardList } from './components/card-list/card-list.component'
import { SearchBox } from './components/search-box/search-box.component'

import './App.css'
import logo from './logo.svg';

class App extends Component {
  state = {
    monsters: [],
    searchfield: ''
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(resp => resp.json())
      .then(users => this.setState({ monsters: users }))
  }

  render() {
    const { monsters, searchfield } = this.state
    const filteredMonsters = monsters.filter(m => m.name.toLowerCase().includes(searchfield.toLocaleLowerCase()))

    return (
      <div className="App">
        <h1><img className='App-logo' src={logo} alt='logo' /> Monster Rolodex</h1>
        <SearchBox placeholder='Search Monsters' onSearch={e => this.setState({searchfield: e.target.value})} />
        <CardList monsters={filteredMonsters} />
      </div>
    )
  }
}

export default App
