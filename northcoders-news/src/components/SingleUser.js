import React, { Component } from 'react';
import '../styles/singleUser.css';
import api from '../apiRequests.js'

class SingleUser extends Component {
    state = {
        user: {}
    }
    componentDidMount () {
        return api.getUser(this.props.match.params.username)
        .then(user => {
            this.setState({
                user
            })
        })
    }

    render () {
        const {user, comment_count} = this.state.user
        if(Object.keys(this.state.user).length === 0) return null
        else {
        return (
            <div id="main">
            <div id="profile_picture">
                <img src={user.avatar_url} alt="" />
                </div>
                <div>Username: {user.username}</div>
                <div> Name: {user.name}</div>
                <div>Number of comments: {comment_count}</div>
            </div>
        )
    }
    }
}

export default SingleUser