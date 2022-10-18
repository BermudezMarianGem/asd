import React from 'react';
import {Link} from 'react-router-dom';

function SelectionPage() 
{
    return (
        <div>
            <div className='content'>
                <div className='contentText'>
                    <p>What kind of user are you?</p>
                </div>
                <Link to={'/login-seller'} className="btn btn-primary btn-sm float-start"> Seller</Link>
                <Link to={'/login-customer'} className="btn btn-primary btn-sm float-start"> Customer</Link>
            </div>
        </div>
        
    );

}

export default SelectionPage;