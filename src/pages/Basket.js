import React from 'react';
import {Link} from 'react-router-dom';
import NavbarCustomer from './NavbarCustomer';

function Basket() {

    return(
        <>
        <NavbarCustomer/>
        <div className='page-content-wrapper'>
               
            <div className="container-fluid">
                <h1 className="mt-4">My Basket</h1>
                <p>
                The basket is empty. Try to explore items.
                    <Link to={'/'} className="btn btn-primary btn-sm float-end"> Search</Link>
                </p>
            </div>
        </div>
        </>
    );
}

export default Basket;