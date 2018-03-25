import React, { Component } from 'react'

class InputBox extends Component {
  
    constructor(props){
        super(props)
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(e){
        if(!e.target.value || e.target.value == 0){
            console.log("bad input") //since blanks and zeroes are common bad inputs handle at font end
            this.props.handleInputChange('') //to display empty table
            return
        }
        let N = e.target.value
        let xhr = new XMLHttpRequest()
        xhr.onreadystatechange = () => {
            if(xhr.status === 200 && xhr.readyState === 4){
                this.props.handleInputChange(xhr.response)
            }else if(xhr.status === 400 && xhr.readyState === 4){                
                console.log("bad input")
            }
        }       
        xhr.open('GET','/api/wordcount?count=' + N,true)
        xhr.send()
    }

    render() {
    return (
      <div style={{"display":"flex"}}>
      <input type = "number" placeholder = "Enter number" style={{"width" : "40%", "margin" : "auto","borderRadius" : "40px", 
      "borderStyle" : "none", "padding" : "20px 40px", "lineHeight" : "28px", "fontSize" : "20px", "outline" : "none"}}
      onChange={this.handleChange}></input>
      </div>
    )
  }
}

export default InputBox
