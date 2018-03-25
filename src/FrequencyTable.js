import React, { Component } from 'react'
import TableRow from './TableRow'
import FreqTable from './FreqTable.css'

class FrequencyTable extends Component{
    constructor(props){
        super(props)
    }

    render(){
        
        if (this.props.freqData.length){
            let cleanTableDataString = this.props.freqData.slice(1,this.props.freqData.length - 1)
            let tableArray = cleanTableDataString.split(',')
            let tableData = tableArray.map((elem) => {
                elem = JSON.parse(elem.trim())
                return <TableRow key = {Object.keys(elem)[0]}rowData = {elem} />
                }
            )
            return(
                <div className = "Freq">
                <table className = "FreqTable">
                    <tbody>
                    <tr>
                        <th>Word</th>
                        <th>Count</th> 
                    </tr>
                    {tableData}
                    </tbody>
                </table>
                </div>
            )
        }else{
            return(
            <div className = "Freq">
            <table className = "FreqTable">
                <tbody>
                <tr>
                    <th>Word</th>
                    <th>Count</th> 
                </tr>
                </tbody>
            </table>
            </div>
            )
        }
    }
}

<style>
    </style>
export default FrequencyTable