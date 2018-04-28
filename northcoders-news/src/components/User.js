import React from 'react';
import {
  Link
} from 'react-router-dom'




const User = (props) => {
    const {user} = props.user
    return (
        <div>
            <div><Link to={`/users/${user.username}`}>{user.username}</Link></div>    
        </div>
        )
}

export default User