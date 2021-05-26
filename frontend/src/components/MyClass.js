import React,{Component} from 'react'
import {Modal,Button, Row, Col, Form,Image} from 'react-bootstrap';
export default class MyClass extends Component{
    constructor(props){
        super(props)
    
    }
    clicke(){
        alert('bllllaaaa')
    }
    render(){
        return(
            <div>
                <Button onClick={this.props.myClick}>
                    click
                </Button>
            </div>

        )

    }
}