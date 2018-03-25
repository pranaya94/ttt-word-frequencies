import React, { Component } from 'react'

class TableRow extends Component{
    
    render(){
        return(
            <tr>
                <td className = "td-word" >{Object.keys(this.props.rowData)[0]}</td>
                <td className = "td-freq" >{Object.values(this.props.rowData)[0]}</td>
            </tr>
        )
    }
}

export default TableRow