import React, { Component } from 'react';
import { connect } from 'react-redux'

class Users extends Component {
  
  render() {
    const renderUsers = this.props.users.map(user => <li>{user.username}</li>)
    
    return (
      <div>
        <ul>
          Users!
          {renderUsers}
          {this.props.userCount}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {users: state.users, userCount: state.users.length}
}

export default connect(mapStateToProps)(Users)
