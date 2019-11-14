import React from 'react';

import AdminSearchComponent from './AdminSearchComponent';
import AdminEditComponent from './AdminEditComponent';

export default class AdminComponent extends React.Component {
  
  render() {    
    return (
      <div className="admin"> 
          <AdminSearchComponent list={this.props.admin.list} />
          <hr/>
          <AdminEditComponent />
      </div>    
    )
  }
}