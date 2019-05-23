import React from 'react';
import {Link} from 'react-router-dom';

class Home extends React.Component {

  

  render() {

  const {users, filterName, handleFilterName} = this.props;

    return (
      <div>
        <label htmlFor="findName">Filtro por nombre</label>
        <input id="findName" type="text" onChange={handleFilterName} />
      <ul className="users__list">
        {users
          .filter(item => item.name.first.includes(filterName))
          .map((item, index) => {
          return (
            <li className="user" key={index}>
              <Link to={`/usuario/${item.id}`}>{item.name.first}</Link>
            </li> 
          );
        })}
      </ul>
      </div>
    );
  }
}


export default Home;