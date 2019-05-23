import React from 'react';
import {Link} from 'react-router-dom';

class UserDetail extends React.Component {

  componentWillUnmount() {
    this.props.resetNameFilter();
  }

  render() {
    const {users} = this.props;
    const id = this.props.match.params.id;
    console.log('*', id);

    const newUser = users.find(item => item.id===parseInt(id));

    return(
      <div>
        {newUser !== undefined ?
        <div>
          <img src={newUser.picture.medium} alt={`imagen de ${newUser.name.first}`} />
          <h2 className="user__name">{newUser.name.first}</h2>
          <small>{newUser.dob.age}</small>
        </div>
        : <p>'No tengo info para ti'</p>}

        <Link to="/"> VOLVER AL LISTADO</Link>
      </div>

    );
  }
}
export default UserDetail;

