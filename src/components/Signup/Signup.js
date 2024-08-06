import React, { Component } from 'react'

import {Button } from '@mui/material'
import NavigateNextIcon from '@mui/icons-material/NavigateNext'

import "./Signup.css"

export default class Signup extends Component {
  render() {
    return (
        <Button className="singup-button" variant="contained">
            
            Signup
            <NavigateNextIcon/>
           
        </Button>
    )
  }
}
