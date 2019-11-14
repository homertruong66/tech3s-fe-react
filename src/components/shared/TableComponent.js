import React from 'react';

export default class TableComponent extends React.Component {
  
  render() {    
    return (
      <div className="table"> 
          <ol>
            {this.props.list.map(function(item) { 
              return (
                <li>{item}</li>
              );
            })}
          </ol>
      </div>    
    )
  }
}