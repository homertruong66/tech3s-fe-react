import React from 'react';

export default class AdminEditComponent extends React.Component {
  
  constructor(props) {
    super(props);

    // internal UI state
    this.state = {
      email: '',
      confirmed_email: '',
      password: '',
      confirmed_password: '',
      first_name: '',
      last_name: ''
    };
  }

  onEmailChange = (event) => {    
    event.persist();  // remove synthetic event
    this.setState(function(prevState, props) {
      return { ...prevState, email: event.target.value };
    });
  }

  onConfirmedEmailChange = (event) => {    
    event.persist(); 
    this.setState(function(prevState, props) {
      return { ...prevState, confirmed_email: event.target.value };
    });
  }

  onPasswordChange = (event) => {
    event.persist();
    this.setState(function(prevState, props) {
      return { ...prevState, password: event.target.value };
    });
  }

  onConfirmedPasswordChange = (event) => {    
    event.persist(); 
    this.setState(function(prevState, props) {
      return { ...prevState, confirmed_password: event.target.value };
    });
  }

  onFirstNameChange = (event) => {
    event.persist();
    this.setState(function(prevState, props) {
      return { ...prevState, first_name: event.target.value };
    });
  }

  onLastNameChange = (event) => {
    event.persist();
    this.setState(function(prevState, props) {
      return { ...prevState, last_name: event.target.value };
    });
  }

  onSave = (event) => {    
    if (this.props.selected.id == null) {
      this.props.actions.createRequest(this.state);
    }
    else {
      this.props.actions.updateRequest(this.props.selected.id, this.state);
    }
  }

  render() {    
    return (
      <div className="admin-edit-form"> 
        <div className="form-element">
          <label>Email: </label>
          <input 
            type="text" onChange={this.onEmailChange} value={this.state.email}>
          </input> 
        </div>
        <div className="form-element">
          <label>Confirmed Email: </label>
          <input 
            type="text" onChange={this.onConfirmedEmailChange} value={this.state.confirmed_email}>
          </input> 
        </div>      
        <div className="form-element">
          <label>Password: </label>
          <input 
            type="password" onChange={this.onPasswordChange} value={this.state.password}>
          </input> 
        </div>  
        <div className="form-element">
          <label>Confirmed Password: </label>
          <input 
            type="password" onChange={this.onConfirmedPasswordChange} value={this.state.confirmed_password}>
          </input> 
        </div> 
        <div className="form-element">
          <label>First Name: </label>
          <input 
            type="text" onChange={this.onFirstNameChange} value={this.state.first_name}>
          </input> 
        </div>
        <div className="form-element">
          <label>Last Name: </label>
          <input 
            type="text" onChange={this.onLastNameChange} value={this.state.last_name}>
          </input> 
        </div>
        <div className="form-element">
          <input type="button" onClick={this.onSave} value="Save"></input>
        </div>
      </div>    
    )
  }
}