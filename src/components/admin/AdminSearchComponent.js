import React from 'react';

import TableComponent from '../shared/TableComponent';

export default class AdminSearchComponent extends React.Component {
  
  render() {    
    return (
      <div className="admin-search"> 
          <p>Admin Search</p>
          <div>
            <label>Email: </label> <input type="text" name="email" /> <button>Search</button>  
          </div>
          <TableComponent list={this.props.list} />
      </div>    
    )
  }
}