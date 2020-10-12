import React, { Component } from 'react';
// add any needed imports here
import {connect} from 'react-redux';
class Users extends Component {
  state = {
    users: []
  }

  

  render() {
    return (
      <div>
        <ul>
          Users!
          {this.state.users.map(user=>{return(<li>{user.username} is from {user.hometown}</li>)})}
          {/* Write code here that displays the usernames of all users in the Redux store */}
          {/* In addition, display the total number of users curently in the store */}
        </ul>
      </div>
    )
  }
}

//add mapStateToProps here
const mapStateToProps = (state) => {
  // debugger;
  return {
    users: state.users
  }
}
// connect this component to Redux
export default connect(mapStateToProps)(Users)
