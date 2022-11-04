import React from 'react';
import {Link} from 'react-router-dom';
import logo from '../pages/images/logo.png';
import logo2 from '../pages/images/landinglogo.png';

function SelectionPage() 
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
            <div className="content2">
                <p>What kind of user <br></br> are you?</p>
            </div>
            <div className="button">
            <button className="bttn-seller"><Link to={'/login-seller'}> SELLER </Link></button><br></br>
            <button className="bttn-customer"><Link to={'/login-customer'}> CUSTOMER </Link></button>
            </div>
        </div>
        <div className="column-right">
            <div className="icon-ecommerce">
            <img src={logo2} alt="illustration" width={700} height={700}></img>
            </div>
        </div>
        </>
    );

}

export default SelectionPage;