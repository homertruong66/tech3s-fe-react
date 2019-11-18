import React from 'react';

export default class TableComponent extends React.Component {
  
  render() {    
    return (
      <div className="table"> 
          <ol>
            {this.props.searchResult.list.map(function(item, index) { 
              return (
                <li key={index}>{item.user.email}</li>
              );
            })}
          </ol>
      </div>    
    )
  }
}