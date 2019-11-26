import React from 'react';

import TableComponent from '../shared/TableComponent';
import PagingBarComponent from '../shared/PagingBarComponent';

/**
 * Input props: 'searchResult', 'actions' (create, searchRequest)
 */
export default class AdminSearchComponent extends React.Component {

  constructor(props) {
    super(props);

    // internal UI state: search criteria
    this.state = {
      // search
      criteria: {}, 
      customCriteria: {}, 
      // sorting
      sortName: 'createdAt', 
      isSortAsc: false, 
      // paging
      pageIndex: 1,
      pageSize: 10
    }
  }

  onEmailChange = (event) => {
    event.persist();  // remove synthetic event    
    this.setState(function(prevState, props) {
      const customCriteria = prevState.customCriteria;
      customCriteria.email = event.target.value;
      return { ...prevState, customCriteria, pageIndex: 1 };
    });
  }

  onSearch = (event) => {           
    this.props.actions.searchRequest(this.state);
  }

  handlePagingInfoChange = (pageIndex, pageSize) => {
    this.setState(function(prevState, props) {      
      return { ...prevState, pageIndex, pageSize };
    });
    // this.props.actions.searchRequest(this.state);   // should not use this because setState function might not be executed right away 
    this.props.actions.searchRequest({ ...this.state, pageIndex, pageSize });
  }  

  onCreate = (event) => {    
    this.props.actions.create();
  }

  formatRowItem = (item) => {
    return item.user.email + ' / ' + item.firstName + ' ' + item.lastName + ' / ' + item.user.phone;
  }
  
  render() {    
    return (
      <div className="admin-search"> 
        <fieldset>
          <legend><b>Admin Search</b></legend>
          <div>
            <label>Email: </label> <input type="text" name="email" onChange={this.onEmailChange} /> 
            <button onClick={this.onSearch} >Search</button>  
          </div>
          <TableComponent 
            list={this.props.searchResult.list} 
            formatRowItem={this.formatRowItem}
            actions={this.props.actions} 
          />
          <PagingBarComponent 
            pageIndex={this.props.searchResult.pageIndex}  
            numOfPages={this.props.searchResult.numOfPages}  
            pageSize = {this.props.searchResult.pageSize}  
            handlePagingInfoChange={this.handlePagingInfoChange}            
          />

          <button onClick={this.onCreate} >Create</button>  
        </fieldset>
      </div>    
    )
  }
}