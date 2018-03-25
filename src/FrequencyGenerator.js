import React, { Component } from 'react'
import InputBox from './InputBox'

import FrequencyTable from './FrequencyTable'

class FrequencyGenerator extends Component {

    constructor(){
        super()
        this.state = {
            freqData : '',
            fileLoaded : false
        }
        this.handleInputChange = this.handleInputChange.bind(this)
    }

    handleInputChange(freqData){
        this.setState({  freqData : freqData })
    }

    componentWillMount(){
        let xhr = new XMLHttpRequest()
        xhr.onreadystatechange = () => {
            if(xhr.status === 201 && xhr.readyState === 4){
                this.setState({
                    fileLoaded : true
                })
            }
        }
        xhr.open('GET','/api/fetchfile',true)
        xhr.send()
    }

    render(){
        if(this.state.fileLoaded){
        return(
            <div>
            <InputBox handleInputChange = {this.handleInputChange}/>
            <FrequencyTable freqData = {this.state.freqData}/>
            </div>
            )
        }else{
            return(
                <div>Fetching file...</div>
            )
        }
    }
}

export default FrequencyGenerator