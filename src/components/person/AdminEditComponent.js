import React from 'react';

// this is an uncontrolled form
export default class AdminEditComponent extends React.Component {
  
  constructor(props) {
    super(props);

    this.emailInput = React.createRef();
    this.confirmedEmailInput = React.createRef();
    this.passwordInput = React.createRef();
    this.confirmedPasswordInput = React.createRef();
    this.firstNameInput = React.createRef();
    this.lastNameInput = React.createRef();
    this.phoneInput = React.createRef();
  }

  componentDidUpdate() {
    let selected = this.props.selected;
    this.emailInput.current.value = selected.user? selected.user.email : '';
    this.confirmedEmailInput.current.value = selected.user? selected.user.email : '';
    this.passwordInput.current.value = selected.user? selected.user.password : '';
    this.confirmedPasswordInput.current.value = selected.user? selected.user.password : '';
    this.firstNameInput.current.value = selected.first_name;
    this.lastNameInput.current.value = selected.last_name;    
    this.phoneInput.current.value = selected.phone;    
  }

  onSave = (event) => {    
    let viewModel = {      
      first_name: this.firstNameInput.current.value,
      last_name: this.lastNameInput.current.value,
      phone: this.phoneInput.current.value
    }

    if (this.props.selected.id == null) {
      this.props.actions.createRequest({
        ...viewModel,
        email: this.emailInput.current.value, 
        confirmed_email: this.confirmedEmailInput.current.value,
        password: this.passwordInput.current.value,
        confirmed_password: this.confirmedPasswordInput.current.value        
      });
    }
    else {
      this.props.actions.updateRequest(this.props.selected.id, viewModel);
    }
  }

  render() {    
    return (      
      <div className="admin-edit-form"> 
        <p><b>Admin Edit(Create/Update)</b></p>
        {this.props.error.error_code != null?
          <div className="error">
            <p>Http Code: {this.props.error.error_code}</p>
            <p>Error Detail: ("code": {this.props.error.response.code}, 
                              "message": {this.props.error.response.message})</p>
          </div>
          :
          <div className="error">
          </div>
        }

        <div className="form-element">
          <label>Email: </label>
          {this.props.selected.id == null?
            <input type="text" ref={this.emailInput}></input> 
            : 
            <input type="text" ref={this.emailInput} disabled={true}></input>   
          }          
        </div>
        
        {this.props.selected.id == null?
          <div className="form-element">
            <label>Confirmed Email: </label>
            <input type="text" ref={this.confirmedEmailInput}></input> 
          </div>      
          : 
          <div className="form-element">
            <input type="hidden" ref={this.confirmedEmailInput}></input> 
          </div>
        }        

        {this.props.selected.id == null?
          <div className="form-element">
            <label>Password: </label>
            <input type="password" ref={this.passwordInput}></input> 
          </div>          
          :
          <div className="form-element">          
            <input type="hidden" ref={this.passwordInput}></input> 
          </div> 
        }

        {this.props.selected.id == null?
          <div className="form-element">
            <label>Confirmed Password: </label>
            <input type="password" ref={this.confirmedPasswordInput}></input> 
          </div> 
          :
          <div className="form-element">          
            <input type="hidden" ref={this.confirmedPasswordInput}></input> 
          </div> 
        }

        <div className="form-element">
          <label>First Name: </label>
          <input type="text" ref={this.firstNameInput}></input>  
        </div>
        <div className="form-element">
          <label>Last Name: </label>
          <input type="text" ref={this.lastNameInput}></input> 
        </div>
        <div className="form-element">
          <label>Phone: </label>
          <input type="text" ref={this.phoneInput}></input> 
        </div>

        <div className="form-element">
          <input type="button" onClick={this.onSave} value="Save"></input>
        </div>
      </div>    
    )
  }
}