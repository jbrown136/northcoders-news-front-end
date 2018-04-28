import React, { Component } from 'react';
import api from '../apiRequests.js'
import  Input from './Input.js'
import User from './User.js'



class Users extends Component {
    state = {
      users: []
    }
    componentDidMount () {
      this.props.resetQuery()
      api.getUsers()
      .then(users => {
        this.setState({users})
      })
    }
  render () {
      const allUsers = this.state.users.filter(user => user.user.username.toLowerCase().includes(this.props.query.toLowerCase())).map(user => {
        return (
        <div id="users">
        <User user={user} key={user.user._id} />
        </div>
        )
      })
    return <div className="main">
    <div id="title">Users</div>
    <Input route="users" changeQuery={this.props.changeQuery}/>
    <div>{allUsers}</div>
    </div>
  }
  }

  export default Users