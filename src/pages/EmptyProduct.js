import React from 'react';
import {Link} from 'react-router-dom';
import Sidebar from './Sidebar';

function EmptyProduct() {

    return(
        <>
        <Sidebar/>
        <div classNameName='page-content-wrapper'>
               
            <div className="container-fluid">
                <h1 className="mt-4">Welcome "User!"</h1>
                <p>
                    You can now post your products
                    <Link to={'/add-product'} className="btn btn-primary btn-sm float-end"> Add Product</Link>
                </p>
            </div>
        </div>
        </>
    );
}

export default EmptyProduct;