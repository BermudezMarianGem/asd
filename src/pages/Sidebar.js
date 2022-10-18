import React from 'react';
import {Link} from 'react-router-dom';

const Sidebar = () =>
{
    return(
        <div classNameName='d-flex' id="wrapper">
            <div className="border-end bg-white" id="sidebar-wrapper">
                <div className="sidebar-heading border-bottom bg-light">AgriKonnect</div>
                <div className="list-group list-group-flush">
                    <Link className="list-group-item list-group-item-action list-group-item-light p-3" to="/homepage">Home</Link>
                    <Link className="list-group-item list-group-item-action list-group-item-light p-3" to="/emptyproduct">Products</Link>
                    <Link className="list-group-item list-group-item-action list-group-item-light p-3" to="/transaction">Transactions</Link>
                    <Link className="list-group-item list-group-item-action list-group-item-light p-3" to="/account">Account</Link>
                </div>
            </div>
        </div>
    );

}

export default Sidebar;