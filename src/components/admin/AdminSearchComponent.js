import React from 'react';

import TableComponent from '../shared/TableComponent';

export default class AdminSearchComponent extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      email: ''
    }
  }

  onEmailChange = (event) => {
    event.persist();  // remove synthetic event
    this.setState(function(prevState, props) {
      return { ...prevState, email: event.target.value };
    });
  }

  onSearch = (event) => {
    let searchCriteria = {
      custom_criteria: this.state
    }
    this.props.actions.search(searchCriteria);
  }
  
  render() {    
    return (
      <div className="admin-search"> 
          <p>Admin Search</p>
          <div>
            <label>Email: </label> <input type="text" name="email" onChange={this.onEmailChange} /> 
            <button onClick={this.onSearch} >Search</button>  
          </div>
          <TableComponent searchResult={this.props.searchResult} />
      </div>    
    )
  }
}