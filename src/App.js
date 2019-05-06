import React, { Component } from 'react';
import './App.css';
import BotButtons from './BotButtons'
import data from './data'
import MainDisplay from './MainDisplay'

class App extends Component {
  constructor() {
    super()

    this.state = {
      users: [],
      index: 0
    }
    this.incrementIndex=this.incrementIndex.bind(this)
    this.decrementIndex=this.decrementIndex.bind(this)
  }
  incrementIndex(){
    this.setState({index: this.state.index + 1})
  }
  decrementIndex(){
    this.setState({index: this.state.index - 1})
  }

  componentDidMount() {
    this.setState({
      users: data
    })
  }

  render() {
    console.log(this.state.users)
    return (
      <div>
      <div className="App">
        <header className="App-header">
        <wee>Home</wee>
        </header>

      </div>
      <div className="Middle">
        <div className="Mid">
          <MainDisplay users={this.state.users}/>
        </div>
        <div className="BotMid">weewoo
          <BotButtons inc={this.incrementIndex} dec={this.decrementIndex} />
          <div className="Next"></div>
        </div>
      </div>
      </div>
    );
  }
}

export default App;
