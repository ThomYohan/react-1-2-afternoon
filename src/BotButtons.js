import React, { Component } from 'react'
import './App.css'

export default class Previous extends Component {
    render() {
        return (
            <div style={{width: "80%", display: "flex", justifyContent: "space-between" }}>
                <h4  onClick={()=>this.props.dec()}style={{color: "white", fontWeight: "bolder"}}> <span> {'<'} </span>Previous</h4>
                <h4 onClick={()=>this.props.inc()}style={{color: "white", fontWeight: "bolder"}}>Next<span> {'>'} </span></h4>
            </div>
        )
    }
}

