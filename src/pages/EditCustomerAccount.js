import React, {useState} from 'react';
import {Link, useNavigate} from 'react-router-dom';
import axios from 'axios';
import swal from 'sweetalert';
import {useLocation} from 'react-router';
import NavbarCustomer from './NavbarCustomer';

const EditCustomerAccount = () => {

    const location = useLocation();
    const history = useNavigate();
    const [errorInput, setError] = useState([]);
    const state = location.state;
    const [customerInput, setCustomer] = useState(state);

    const handleInput = (e) => {
        e.persist();
        setCustomer({...customerInput, [e.target.name]: e.target.value });
    }

    const updateCustomer = (e) => {
        e.preventDefault();
        
        const customer_id = state.id;
        const data = {
            firstname: customerInput.firstname || state.firstname,
            middlename: customerInput.middlename || state.middlename,
            lastname: customerInput.lastname || state.lastname,
            mobilephone: customerInput.mobilephone || state.mobilephone,
            email: customerInput.email || state.email,
            password: customerInput.password || state.password,
            address: customerInput.address || state.address,

        }
        
        axios.put(`http://localhost:8000/api/updateCustomer/${customer_id}`, data).then(res=>{
            if(res.data.status === 200)
            {
                swal("Success",res.data.message,"success");
                setError([]);
                history('/customer-account');
            }
            else if(res.data.status === 422)
            {
                swal("All fields are mandatory","","error");
                setError(res.data.validationErrors);
            }
            else if(res.data.status === 404)
            {
                swal("Error",res.data.message,"error");
                history('/customer-account');
            }
        });
    }

    
    return (
        <>
        <NavbarCustomer/>
        
        <div>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-6">
                        <div className="card">
                            <div className="card-header">
                                <h4>Edit Profile
                                    <Link to={'/account'} className="btn btn-danger btn-sm float-end"> BACK</Link>
                                </h4>
                            </div>
                            <div className="card-body">
                                
                                <form onSubmit={(e) => updateCustomer(e)} >

                                    <div className="form-group mb-3">
                                        <label>First Name</label>
                                        <input type="text" name="firstname" onChange={(e) => handleInput(e)} defaultValue={customerInput.firstname} className="form-control" />
                                        <span className="text-danger">{errorInput.firstname}</span>
                                    </div>
                                    <div className="form-group mb-3">
                                        <label>Middle Name</label>
                                        <input type="text" name="middlename" onChange={(e) => handleInput(e)} defaultValue={customerInput.middlename} className="form-control" />
                                        <span className="text-danger">{errorInput.middlename}</span>
                                    </div>
                                    <div className="form-group mb-3">
                                        <label>Last Name</label>
                                        <input type="text" name="lastname" onChange={(e) => handleInput(e)} defaultValue={customerInput.lastname} className="form-control" />
                                        <span className="text-danger">{errorInput.lastname}</span>
                                    </div>
                                    <div className="form-group mb-3">
                                        <label>Contact Number</label>
                                        <input type="text" name="mobilephone" onChange={(e) => handleInput(e)} defaultValue={customerInput.mobilephone} className="form-control" />
                                        <span className="text-danger">{errorInput.mobilephone}</span>
                                    </div>
                                    <div className="form-group mb-3">
                                        <label>Email</label>
                                        <input type="text" name="email" onChange={(e) => handleInput(e)} defaultValue={customerInput.email} className="form-control" />
                                        <span className="text-danger">{errorInput.email}</span>
                                    </div>
                                    <div className="form-group mb-3">
                                        <label>New Password</label>
                                        <input type="password" name="password" onChange={(e) => handleInput(e)} defaultValue={customerInput.password} className="form-control" />
                                        <span className="text-danger">{errorInput.password}</span>
                                    </div>
                                    <div className="form-group mb-3">
                                        <label>Address</label>
                                        <input type="text" name="address" onChange={(e) => handleInput(e)} defaultValue={customerInput.address} className="form-control" />
                                        <span className="text-danger">{errorInput.address}</span>
                                    </div>

                                    <div className="form-group mb-3">
                                        <button type="submit" id="updatebtn" className="btn btn-primary">Save Changes</button>
                                    </div>
                                </form>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    );

}

export default EditCustomerAccount; 