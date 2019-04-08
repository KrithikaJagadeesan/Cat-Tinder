import React, { Component } from 'react'
import {
  FormControl
} from 'react-bootstrap'

class NewCat extends Component {

constructor(props){
  super(props)
  this.state = {
    form:{
      name: '',
      age: '',
      enjoys: ''
    }
  }
}
render() {
    return (
        <div>
        <br/>
        <h3>New Cat Profile</h3>
        <br/>
            <h5><label id="name">Name</label></h5>
            <FormControl
              type="text"
              name="name"
              onChange={this.handleChange.bind(this)}
              value={this.state.form.name}
            />
            <br/>
            <h5><label id="age">Age</label></h5>
            <FormControl
              type="text"
              name="age"
              onChange={this.handleChange.bind(this)}
              value={this.state.form.age}
            />
            <br/>
            <h5><label id="enjoys">Enjoys</label></h5>
            <FormControl
              as="textarea"
              type="text"
              name="enjoys"
              onChange={this.handleChange.bind(this)}
              value={this.state.form.enjoys}
            />
            <br/>
            <br/>
            <button id= "submit" onClick= {this.submitForm.bind(this)} type="submit">Create Cat Profile</button>
        </div>
    );
}

handleChange(event){
    let {form } = this.state
    form[event.target.name] = event.target.value
    this.setState({form: form})
    }
submitForm(){
    this.props.newSubmit(this.state.form)
    this.setState ({
        form:{
        name : "",
        age : "",
        enjoys : ""
    }
    })
}
}
export default NewCat;
