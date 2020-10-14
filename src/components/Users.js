import React, { Component } from 'react';
import { connect } from 'react-redux'

class Users extends Component {

  render() {
    return (
      <div>
        <ul>
          Users!
          <br />
          {this.props.users.map(u => <li>{u.username}, from {u.hometown}</li>)}
          <br />
          Number of Users: {this.props.userCount}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return { users: state.users, userCount: state.users.length }
}

export default connect(mapStateToProps)(Users)
