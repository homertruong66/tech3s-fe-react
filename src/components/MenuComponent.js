import React from 'react';

class MenuComponent extends React.Component {
    render() {
        return ( 
            <div className="menu">
                <ul>
                    <li>Home</li>
                    <li>Admin</li>
                    <li>Member</li>
                </ul>
            </div>
        );
    }
}

export default MenuComponent;