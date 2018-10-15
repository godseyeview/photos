import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Users from './users';
import axios from 'axios';

// const dataProvider = jsonServerProvider('http://jsonplaceholder.typicode.com');
// console.log(dataProvider);
// const App = () => (
//   <Admin dataProvider={jsonServerProvider('http://jsonplaceholder.typicode.com')}>      
//       <Resource name="users" list={UserList} />
//   </Admin>
// );
class App extends Component {

  state = {
    users: [],
    albums: []
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
  }

  render() {    
    return (
      <div className="App">
        <Users users={this.state.users} albums={this.state.albums}/>
        
      </div>
    );
  }
}

export default App;
