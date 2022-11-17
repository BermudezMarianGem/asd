import React from 'react';
import {Link} from 'react-router-dom';
import logo2 from '../pages/images/landinglogo.png';
import logo from '../pages/images/logo.png';

function LandingPage() 
{
    return (
        <>
        <header className="header">
            <div className="wrap">
            <header className="header-title">
                <div className='title-logo'>
                    <h1 className="logo-title">
                    <img src={logo}  alt="logo" width={100} height={100}></img>
                    AgriKOnnect
                    </h1>
                </div>
            </header>
            </div>
        </header>
        <div className="column-left">
            <div className="content1">
                <p>OPEN YOUR <br></br> STORE</p>
            </div>
            <div className="content">
                <p> Manage your shop efficiently on <br></br>
                    Agrikonnect with our AgriKonnect<br></br> Farmer Center. </p>
            </div>
            <div className="button">
            <button className="bttn"><Link to={'/selectionpage'}> GET STARTED </Link></button>
            </div>
        </div>
        <div className="column-right">
            <div className="icon-ecommerce">
            <img src={logo2} alt="illustration" width={850} height={850}></img>
            </div>
        </div>
        </> 
    );

}

export default LandingPage;