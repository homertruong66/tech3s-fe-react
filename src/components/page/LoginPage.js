import React from 'react';

// this is a controlled form
export default class LoginPage extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      isValid: false
    }
  }

  onLogin = (event) => {
    // if (!this.state.valid) {
    //   return;
    // }

    this.props.actions.login(this.state.email, this.state.password, this.props.history);    
  }

  onEmailChange = (event) => {    
    event.persist();  // remove synthetic event
    this.setState(function(prevState, props) {
      return { ...prevState, email: event.target.value };
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
      <div className="login-form"> 
        <div className="form-element">
          <label>Email: </label>
          <input 
            type="text" onChange={this.onEmailChange} value={this.state.email}>
          </input> 
        </div>
        <div className="form-element">
          <label>Password: </label>
          <input 
            type="password" onChange={this.onPasswordChange} value={this.state.password} >
          </input>  
        </div>
        <div className="form-element">
          <input type="button" onClick={this.onLogin} value="Login"></input>
        </div>
      </div>    
    )
  }
}