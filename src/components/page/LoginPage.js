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

  onSubmit = (event) => {
    event.preventDefault();
    // if (!this.state.valid) {
    //   return;
    // }

    this.props.actions.login(this.state.email, this.state.password);
    // this.props.history.push('/app');
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
      <div className="login"> 
        <div>
          <label>Email: </label>
          <input 
            type="text" onChange={this.onEmailChange} value={this.state.email}>
          </input> 
        </div>
        <div>
          <label>Password: </label>
          <input 
            type="password" onChange={this.onPasswordChange} value={this.state.password} >
          </input>  
        </div>
        <div>
          <input type="submit" onClick={this.onSubmit} value="Login"></input>
        </div>
      </div>    
    )
  }
}