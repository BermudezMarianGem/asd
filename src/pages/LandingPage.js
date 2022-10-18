import React from 'react';
import {Link} from 'react-router-dom';

function LandingPage() 
{
    return (
        <div>
            <div className='content'>
                <p>Open your store</p>
                <div className='contentText'>
                    <p>Manage your shop efficiently on Agrikonnect with our AgriKonnect Farmer Center.</p>
                </div>
                <Link to={'/selectionpage'} className="btn btn-primary btn-sm float-start"> Get Started</Link>
            </div>
        </div>
        
    );

}

export default LandingPage;