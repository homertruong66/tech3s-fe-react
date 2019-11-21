import React from 'react';

// wrapped by AdminContainer;

// children
import AdminSearchComponent from './AdminSearchComponent';
import AdminEditComponent from './AdminEditComponent';

export default class AdminComponent extends React.Component {
  
  render() {    
    return (
      <div className="admin"> 
          <AdminSearchComponent searchResult={this.props.admin.searchResult} actions={this.props.actions} />
          <hr/>
          <AdminEditComponent selected={this.props.admin.selected} actions={this.props.actions} 
            error = {this.props.admin.error} />
      </div>    
    )
  }
}