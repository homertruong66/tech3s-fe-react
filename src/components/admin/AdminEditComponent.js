import React from 'react';

export default class AdminEditComponent extends React.Component {
  
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      confirmedEmail: '',
      password: ''
    }
  }

  onEmailChange = (event) => {    
    event.persist();  // remove synthetic event
    this.setState(function(prevState, props) {
      return { ...prevState, email: event.target.value };
    });
  }

  onConfirmedEmailChange = (event) => {    
    event.persist();  // remove synthetic event
    this.setState(function(prevState, props) {
      return { ...prevState, confirmedEmail: event.target.value };
    });
  }

  onPasswordChange = (event) => {
    event.persist();
    this.setState(function(prevState, props) {
      return { ...prevState, password: event.target.value };
    });
  }

  render() {    
    return (
      <div className="admin-edit"> 
        <div>
          <label>Email: </label>
          <input 
            type="text" onChange={this.onEmailChange} value={this.state.email}>
          </input> 
        </div>
        <div>
          <label>Confirmed Email: </label>
          <input 
            type="text" onChange={this.onConfirmedEmailChange} value={this.state.confirmedEmail}>
          </input> 
        </div>      
        <div>
          <label>Password: </label>
          <input 
            type="password" onChange={this.onPasswordChange} value={this.state.password}>
          </input> 
        </div>  
      </div>    
    )
  }
}