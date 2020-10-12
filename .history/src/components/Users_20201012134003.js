import React, { Component } from 'react';
// add any needed imports here
import {connect} from 'react-redux';
import manageUsers from './reducers/manageUsers'
class Users extends Component {
  
  displayUsers(){
    let uList = manageUsers.state.users.map(user=>{return <li>{user.name}</li>})
    return uList.join("")
  }

  render() {
    return (
      <div>
        <ul>
          Users!
          {/* Write code here that displays the usernames of all users in the Redux store */}
          {/* In addition, display the total number of users curently in the store */}
          {/* {this.state.users.forEach(user=>(displayUser(user)))} */}
          {this.displayUsers}
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
