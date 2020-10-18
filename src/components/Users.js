import { connect } from 'react-redux'
import React, { Component } from 'react';

class Users extends Component {

  render() {
    return (
      <div>
      
        <ul>
          Users!
          <p> Number of Users: {this.props.numberUsers} </p>
          {this.props.users.map(data => {
          return <li>{data.username}</li>})}
        </ul>
      </div>
    )
  }
}
const mapStateToProps = state => {
  return { users: state.users,
  numberUsers: state.users.length}
}


export default connect(mapStateToProps)(Users);
