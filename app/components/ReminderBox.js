import React, {Component} from 'react';
import Form from './Form';
import Date from './Date'


export default class ReminderBox extends Component {
  constructor() {
    super()
    this.state = {
      inputValue: ''
    }
  }

    handleInputType(e) {
      this.setState({
        inputValue: e.target.value
      })
    }

    handleFormSubmit(e) {
      console.log('form submitted')
    }


  render() {
    return(
      <div id="reminderBox">
        <div id="formContainer">
        <h3>Remind me about..</h3>
          <Form handleFormSubmit={this.handleFormSubmit.bind(this)} handleInputType={this.handleInputType.bind(this)}/>
        </div>
        <Date />
      </div>
    )
  }
}