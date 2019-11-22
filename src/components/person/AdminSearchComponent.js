import React from 'react';

import TableComponent from '../shared/TableComponent';

export default class AdminSearchComponent extends React.Component {

  constructor(props) {
    super(props);

    // internal UI state: search criteria
    this.state = {
      criteria: {}, 
      custom_criteria: {}, 
      sort_name: 'createdAt', 
      is_sort_asc: false, 
      page_index: 1,
      page_size: 10
    }
  }

  onEmailChange = (event) => {
    event.persist();  // remove synthetic event    
    this.setState(function(prevState, props) {
      const custom_criteria = prevState.custom_criteria;
      custom_criteria.email = event.target.value;
      return { ...prevState, custom_criteria };
    });
  }

  onSearch = (event) => {           
    this.props.actions.searchRequest(this.state);
  }

  onCreate = (event) => {    
    this.props.actions.create();
  }

  formatRowItem = (item) => {
    return item.user.email + ' / ' + item.first_name + ' ' + item.last_name + ' / ' + item.user.phone;
  }
  
  render() {    
    return (
      <div className="admin-search"> 
          <p><b>Admin Search</b></p>
          <div>
            <label>Email: </label> <input type="text" name="email" onChange={this.onEmailChange} /> 
            <button onClick={this.onSearch} >Search</button>  
          </div>
          <TableComponent 
            list={this.props.searchResult.list} 
            formatRowItem={this.formatRowItem}
            actions={this.props.actions} 
          />

          <button onClick={this.onCreate} >Create</button>  
      </div>    
    )
  }
}