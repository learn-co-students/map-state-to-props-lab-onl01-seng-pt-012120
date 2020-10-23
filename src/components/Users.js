import React, { Component } from 'react';
import { connect } from 'react-redux'
class Users extends Component {

  render() {
    console.log(this.props)
    return (
      <div>
        <ul>
          Users!
          
          {this.props.users.length}
          {this.props.users.map((u)=> {
            return (

            <li>
              {u.username}
              {u.hometown}
            </li>)
          })}
        </ul>
      </div>
    )
  }
}

const mapStateToProps =(state)=> {
  //console.log(state)
  return{
      users: state.users
  }

}

// connect this component to Redux
export default connect(mapStateToProps) (Users)
