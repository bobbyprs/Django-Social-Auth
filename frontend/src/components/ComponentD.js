import React, { Component } from 'react'

 class ComponentD extends Component {
     constructor(props) {
         super(props)
     
         this.state = {
              name:'shing'
         }
     }
     
    render() {
        return (
            <div>
                <h1 style={{color:'red'}}>{this.name}</h1>
            </div>
        )
    }
}
export default ComponentD
