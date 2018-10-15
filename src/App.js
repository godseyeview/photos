import React, { Component } from 'react';
import './App.css';
import Users from './users';
import axios from 'axios';

class App extends Component {

  state = {
    users: [],
    albums: [],
    photos: []
  }
  componentDidMount() {
    axios.get(`https://jsonplaceholder.typicode.com/users`)
      .then(res => {        
        const users = res.data;
        this.setState({ users });
      })
    axios.get(`https://jsonplaceholder.typicode.com/albums`)
      .then(res => {                 
        const albums = res.data;
        this.setState({ albums });
      })
    axios.get('http://jsonplaceholder.typicode.com/photos')
      .then(res => {
        const photos = res.data;
        this.setState({ photos });
      })
  }

  render() {    
    return (
      <div className="App">
        <Users users={this.state.users} albums={this.state.albums} photos={this.state.photos}/>        
      </div>
    );
  }
}

export default App;
