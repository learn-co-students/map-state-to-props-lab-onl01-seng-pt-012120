import React, { Component } from 'react';
import { connect } from 'react-redux';
class Users extends Component {

  render() {
    console.log('this is: ', this)
    return (
      <div>
        <ul>
          Users!
          {this.props.users.map((user, idx) => <li key={idx}>{user.username} from {user.hometown}</li>)}
          <p>{`Total Users is ${this.props.userCount}`}</p>
        </ul>
      </div>
    )
  }
}


const mapStateToProps = state => {
  return {users: state.users, userCount: state.users.length}
}

export default connect(mapStateToProps)(Users)
