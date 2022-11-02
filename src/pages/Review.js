import React from 'react';
import {Link} from 'react-router-dom';
import Sidebars from './Sidebars';

const Review = () =>
{

    return(
        <>
        <Sidebars />
        <div className='page-content-wrapper'>
               
            <div className="container-fluid">
                <h1 className="mt-4">Review Page </h1>
                <Link to={'/account'} className="btn btn-danger btn-sm float-end"> BACK</Link>
            </div>
        </div>
        </>
    );

}

export default Review;