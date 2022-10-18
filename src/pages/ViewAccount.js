import React from 'react';
import {Link} from 'react-router-dom';
import Sidebar from './Sidebar';

function ViewAccount() 
{
    let user = JSON.parse(localStorage.getItem('user-info'))

    return (
        <>
        <Sidebar/>
        
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="card">
                            <div className="card-header">
                                <h4>Account Details</h4>
                                    <p>Firstname: {user.firstname} </p>
                                    <p>Middlename: {user.middlename}</p>
                                    <p>Lastname: {user.lastname}</p>
                                    <p>Username: {user.username}</p>
                                    <p>Mobile Phone: {user.mobilephone}</p>
                                    <p>Email: {user.email}</p>
                                    <Link to={'/account'} className="btn btn-danger btn-sm float-end"> BACK</Link>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    );

}

export default ViewAccount;