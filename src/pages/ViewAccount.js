import React from 'react';
import {Link} from 'react-router-dom';
import Sidebar from './Sidebar';
import axios from 'axios';

function ViewAccount() 
{
    const [user, setUser]= React.useState({});
    
    React.useEffect(() => {
        if(Object.keys(user).length === 0){
            axios.get(`http://127.0.0.1:8000/api/user/${JSON.parse(localStorage.getItem('user-info')).id}`).then(res=>{
            if(res.status === 200)
            { 
                const data = JSON.stringify(res.data[0])
                localStorage.setItem('user-info', data)
                setUser(JSON.parse(data))
                console.log(user)
                
            }
        })
            
        };
        

        
    });

    return (
        <>
        <Sidebar/>
        
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="card">
                            <div className="card-header">
                                <h4>Account Details</h4>
                                    <p>Name: {user.firstname} {user.middlename} {user.lastname}</p> 
                                    <p>Birthdate: {user.birthdate}</p>
                                    <p>Gender: {user.gender}</p> <Link to={'/edit-account'} state={user} className="btn btn-danger btn-sm float-end">Edit</Link>
                                    <p>Email: {user.email}</p>
                                    <p>Mobile Phone: {user.mobilephone}</p>
                                    <p>Address: {user.address}</p>
                                    <p>Province: {user.province}</p>
                                    <p>Region: {user.region}</p>
                                    <Link to={'/account'} className="btn btn-danger btn-sm float-end"> BACK</Link>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    );

}

export default ViewAccount;