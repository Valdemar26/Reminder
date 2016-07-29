import React, {Component} from 'react'

export default class Form extends Component {
  render() {
    return(
      <form id="taskForm" onSubmit={this.props.handleFormSubmit.bind(this)}>
       <div className="input-group" id="inputWrapper">
         <input type="text" className="form-control" id="nameInput" onChange={this.props.handleInputType.bind(this)} placeholder="Type sms-text here..." />
         <span className="input-group-btn">
         <button onClick={this.props.handleFormSubmit.bind(this)} className="btn btn-default" id="submitBtn" type="button">Send!</button>
         </span>
       </div>
      </form>
    )
  }
}