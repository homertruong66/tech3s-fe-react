import React from 'react';
import { NavLink } from 'react-router-dom';

class MenuComponent extends React.Component {
    render() {
        return ( 
            <div className="menu">
                <ul>
                    <li>
                        <NavLink exact activeClassName="active" to="/">
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink activeClassName="active" to="/admins">
                            Admins
                        </NavLink>
                    </li>
                    <li>
                        <NavLink activeClassName="active" to="/members">
                            Members
                        </NavLink>
                    </li>
                </ul>
            </div>
        );
    }
}

export default MenuComponent;