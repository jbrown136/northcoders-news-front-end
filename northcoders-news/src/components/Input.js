import React, { Component } from 'react';


class Input extends Component {
    render () {
        return (
            <div>
                <input type="text" onChange={this.handleChange} placeholder={`search ${this.props.route}`}/>
                </div>
        )
    }

    handleChange = event => {
        return this.props.changeQuery(event.target.value)
    }
}
export default Input