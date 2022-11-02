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
                                    <p>Name: {user.firstname} {user.middlename} {user.lastname}</p> 
                                    <p>Birthdate: {user.birthdate}</p>
                                    <p>Gender: {user.gender}</p> <Link to={'/edit-account'} state={user} className="btn btn-danger btn-sm float-end">Edit</Link>
                                    <p>Email: {user.email}</p>
                                    <p>Mobile Phone: {user.mobilephone}</p>
                                    <p>Address: {user.address}</p>
                                    <p>Province: {user.province}</p>
                                    <p>Region: {user.region}</p>
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