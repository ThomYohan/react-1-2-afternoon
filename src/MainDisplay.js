import React, { Component } from 'react'
import data from './data';


export default class MainDisplay extends Component {
    render() {
        const mappedUser = this.props.users.map((user, i) => {
            return (
                <div>
                    <h1>{user.name.first}</h1>
                </div>
            )
        })
        console.log(this.props)
        return(
            <div>
                {mappedUser}
                <h1>{mappedUser}/{this.props.users.length}</h1>
            </div>
        )
    }
}
