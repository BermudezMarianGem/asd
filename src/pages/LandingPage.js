import React from 'react';
import {Link} from 'react-router-dom';
import NavbarLandingPage from './NavbarLandingPage';
import logo2 from '../pages/images/landinglogo.png';

function LandingPage() 
{
    return (
        <>
        <NavbarLandingPage/>
        <div className = "container">
            <div className='row'>
                <div className='col'>
                    <p style={{fontSize: 90, fontWeight: 'bold', color: "#388E3C" }}>OPEN YOUR<br/>STORE</p>
                    <p style={{ fontSize: 20, color: '#388E3C', wordSpacing: 7, }}>Manage your shop efficiently on<br/>Agrikonnect with our AgriKonnect <br/>Farmer Center.</p>
                    <button style={{ padding: 20, backgroundColor: "#388E3C",   }}><Link to={'/selectionpage'}> GET STARTED</Link></button>
                </div>
                
                <div className='col'>
                    <img src={logo2} alt=""/>
                </div>
                
            </div>
        </div>
        </>   
    );

}

export default LandingPage;