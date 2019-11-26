import React from 'react';

// wrapped by AdminContainer;

// children
import AdminSearchComponent from './AdminSearchComponent';
import AdminEditComponent from './AdminEditComponent';

/**
 * Input props: 'admin', 'actions' 
 */
export default class AdminComponent extends React.Component {
  
  render() {    
    return (
      <div className="admin"> 
        <h2>Admin Management Page</h2>
        <table>
        <tbody>
          <tr>
            <td>
              <AdminSearchComponent searchResult={this.props.admin.searchResult} actions={this.props.actions} />          
            </td>
            <td>                
            </td>
            <td>
              <AdminEditComponent selected={this.props.admin.selected} actions={this.props.actions} 
                error = {this.props.admin.error} />
            </td>
          </tr>
        </tbody>
        </table>
      </div>    
    )
  }
}