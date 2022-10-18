import React from 'react';
import {Link} from 'react-router-dom';
import Sidebar from './Sidebar';

function AccountPage() 
{
    return (
        <>
        <Sidebar/>
        <div>
            <div className='content'>
                <div className='contentText'>
                    <p>User</p>
                    <p>user@gmail.com</p>
                </div>
                <Link to={'/accountview'} className="btn btn-primary btn-sm float-start">Contact Information</Link>
                <Link to={'/accountpassword'} className="btn btn-primary btn-sm float-start"> Password</Link>
                <Link to={'/accountreview'} className="btn btn-primary btn-sm float-start"> Review</Link>
                <Link to={'/logout'} className="btn btn-primary btn-sm float-start"> Logout</Link>
            </div>
        </div>
        </>
    );

}

export default AccountPage;