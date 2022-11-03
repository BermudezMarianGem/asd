import React from 'react';
import {Link} from 'react-router-dom';
import NavbarCustomer from './NavbarCustomer';

const CustomerHomepage = () =>
{
    let customer = JSON.parse(localStorage.getItem('user-info'))
    localStorage.setItem('customer', JSON.stringify(customer))

    return(
        <>
        <NavbarCustomer/>
        <div className='page-content-wrapper'>
               
            <div className="container-fluid">
                <h1 className="mt-4">Welcome { customer.firstname} </h1>
                <p>What would you buy today?</p>
            </div>
            <div className="input-group rounded">
                <input type="search" className="form-control rounded" placeholder="Search by item name" aria-label="Search" aria-describedby="search-addon" /><Link to={"/basket"} className="btn btn-primary">Basket</Link>
            </div><br/>
            <div>
                <h1>Categories</h1>
                <div>
                    <div className="card" style={{ width:160 , marginLeft:20}}>
                        <div className="card-body">
                            <Link to={"/"}className="card-text">Vegetables</Link>
                        </div>
                    </div>
                    <div className="card" style={{ width:160 , marginLeft:20}}>
                        <div className="card-body">
                            <Link to={"/"}className="card-text">Fruits</Link>
                        </div>
                    </div>
                    <div className="card" style={{ width:160 , marginLeft:20}}>
                        <div className="card-body">
                            <Link to={"/"}className="card-text">Sale</Link>
                        </div>
                    </div>
                    <div className="card" style={{ width:160 , marginLeft:20}}>
                        <div className="card-body">
                            <Link to={"/"}className="card-text">Free Delivery</Link>
                        </div>
                    </div>
                </div>
            </div>

            <div>
                <h1>Best Seller</h1>
                <h1>Recommended</h1>
            </div>
        </div>
        </>
    );

}

export default CustomerHomepage;