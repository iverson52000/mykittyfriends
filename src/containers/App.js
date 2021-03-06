import React, {Component} from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundary from '../components/ErrorBoundary';
import {robots} from '../robots';

import './App.css';


class App extends Component {
  constructor(){
    super()
    this.state = {
      robots: robots, 
      searchfield: ''
    }
    this.onSearchChange = this.onSearchChange.bind(this);
  }

  // componentDidMount(){
  //   fetch('https://jsonplaceholder.typicode.com/users')
  //     .then(res => res.json())
  //     .then(users => {this.setState({robots: users})});
  // }

  onSearchChange(event){
    this.setState({searchfield: event.target.value});
  }

  render(){
    const {robots, searchfield} = this.state
    const filteredRobots = robots.filter(robot => {
      return robot.name.toLowerCase().includes(searchfield.toLowerCase())
    })
    return (
      <div className = 'tc'>
        <h1 className = 'f1'>KittyFriends</h1>
        <SearchBox searchChange = {this.onSearchChange}/>
        <Scroll>
          <ErrorBoundary>
            <CardList robots = {filteredRobots}/>
          </ErrorBoundary>
        </Scroll>
      </div>
    );
  }

}

export default App;