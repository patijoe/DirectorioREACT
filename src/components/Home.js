import React from 'react';
import {Link} from 'react-router-dom';

class Home extends React.Component {

  

  render() {

  const {users, filterName, handleFilterName} = this.props;

  const usuarios = 
  users
    .filter(item => item.name.first.includes(filterName))
    .map((item, index) => {
      return (
        <li className="user" key={index}>
          <Link to={`/usuario/${item.id}`}>
            <div className="user__card">
              <img src={item.picture.large} alt=""/>
              <h2>{item.name.first} {item.name.last}</h2>
            </div>
          </Link>
        </li> 
      );
    });

    return (
      <div>
        <label htmlFor="findName">Filtro por nombre</label>
        <input id="findName" type="text" onChange={handleFilterName} />

        <p>`Tu listado tiene ${usuarios.length} resultados`</p>

      <ul className="users__list">
        {usuarios}
      </ul>
      </div>
    );
  }
}


export default Home;