import React from 'react';
import {useHistory} from 'react-router-dom';

function LandingPage() 
{
    const history = useHistory();
    return (
        <div>
            <div className='content'>
                <p>Open your store</p>
                <div className='contentText'>
                    <p>Manage your shop efficiently on Agrikonnect with our AgriKonnect Farmer Center.</p>
                </div>
                <div className="form-group mb-3">
                <button className="btn btn-primary" onClick={() => history.push('/add-product')}>Get Started</button>
                </div>
            </div>
        </div>
        
    );

}

export default LandingPage;