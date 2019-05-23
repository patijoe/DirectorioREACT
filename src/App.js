import React from 'react';
import './App.css';
import {petition} from './service/Petition';
import Home from './components/Home';
import UserDetail from './components/UserDetail';
import {Switch, Route} from 'react-router-dom';

class App extends React.Component {
  

  constructor(props) {
    super(props);

    this.state = ({  
      users:[],
      filterName: ''
    })

    this.handleFilterName = this.handleFilterName.bind(this);
    this.resetNameFilter = this.resetNameFilter.bind(this);
  }

  componentDidMount(){
    this.fetchPetition();

    // this.setState({
    //   filterName: JSON.parse(localStorage.getItem('filterName')) || ''
    // })
  }

  fetchPetition(){
    petition()
    .then(data => {
      const newUsers = data.results.map((item, index) => {
        return{...item, id: index}
      });
      console.log(newUsers);
      this.setState({
        users: newUsers
      })
    });
  }

  handleFilterName(event) {
    const valueInputName = event.currentTarget.value;
    this.setState({
      filterName: valueInputName
    }
    // ,
    // () => localStorage.setItem('filterName', JSON.stringify(this.state.filterName))
    )
  }

  resetNameFilter() {
    this.setState({
      filterName: ''
    })
  }

  render() { 

    const {users, filterName} = this.state;

    return (

      <Switch>
        <Route 
          exact path="/"
          render={() => (
            <Home 
              users={users} 
              filterName={filterName}
              handleFilterName = {this.handleFilterName}
            />
          )}
        />

        <Route 
        path="/usuario/:id"
        render={(routerProps) => (
          <UserDetail 
            match = {routerProps.match}
            users={users}
            resetNameFilter={this.resetNameFilter} />
        )}  
        />
      </Switch>
    );
  }
}
 

export default App;