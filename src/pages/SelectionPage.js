import React from 'react';
import {Link} from 'react-router-dom';
import NavbarLandingPage from './NavbarLandingPage'
function SelectionPage() 
{
    return (
        <>
        <NavbarLandingPage/>
        <div>
            <div className='content'>
                <div className='contentText'>
                    <p>What kind of user are you?</p>
                </div>
                <Link to={'/login-seller'} className="btn btn-primary btn-sm float-start"> Seller</Link>
                <Link to={'/login-customer'} className="btn btn-primary btn-sm float-start"> Customer</Link>
            </div>
        </div>
        </>
    );

}

export default SelectionPage;