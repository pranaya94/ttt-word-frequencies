import React from 'react'
import ReactDOM from 'react-dom'
import {
    BrowserRouter as Router,
    Route
  } from 'react-router-dom'
import FrequencyGenerator from './FrequencyGenerator'

ReactDOM.render(
    <Router>
        <div>
            <FrequencyGenerator />            
        </div>  
    </Router>, document.getElementById('root'))
