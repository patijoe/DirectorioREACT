import React from 'react';
import './App.css';
import {fetchPetition} from './service/Petition';

class App extends React.Component {

  constructor(props) {
    super(props);

    this.state={
      users: []
    }
    console.log('*', this.state.users);
  }

  componentDidMount(){
    this.fetchNewPetition();
  }

  fetchNewPetition(){
    fetchPetition()
    .then(data => {
      this.setState({
        users: data.results
      })
    }) 
  }

  render() {
    const {users} = this.state;
    console.log('**', users);
    return (
      <div className="app">
        <ul className="users__list">
          {users.map((user, index) => {
            return(
              <li className="user__item" key={index}>
                <h2 className="user__name">{user.name.first} {user.name.last}</h2>
                <img src={user.picture.medium} alt={`foto de ${user.name.first}`}/>
              </li>
            );
          })}
        </ul>
    
      </div>
    );
  }
  
}

export default App;
