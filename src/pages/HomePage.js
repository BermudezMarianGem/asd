import React from 'react';
import Sidebars from './Sidebars';

const Homepage = () =>
{
    let user = JSON.parse(localStorage.getItem('user-info'))
    localStorage.setItem('user', JSON.stringify(user))

    return(
        <>
        <Sidebars />
        <div className='page-content-wrapper'>
               
            <div className="container-fluid">
                <h1 className="mt-4">Welcome { user.firstname} </h1>
                <p>The starting state of the menu will appear collapsed on smaller screens, and will appear non-collapsed on larger screens. When toggled using the button below, the menu will change.</p>
                <p>
                    Make sure to keep all page content within the
        
                    . The top navbar is optional, and just for demonstration. Just create an element with the
               
                    ID which will toggle the menu when clicked.
                </p>
            </div>
        </div>
        </>
    );

}

export default Homepage;