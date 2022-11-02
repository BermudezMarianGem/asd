import React, {useState} from 'react';
import {Link, useNavigate} from 'react-router-dom';
import axios from 'axios';
import swal from 'sweetalert';
import {useLocation} from 'react-router';


const EditAccount = () => {

    const location = useLocation();
    const history = useNavigate();
    const [errorInput, setError] = useState([]);
    const state = location.state;
    const [userInput, setNewUser] = useState(state);

    const handleInput = (e) => {
        e.persist();
        setNewUser({...userInput, [e.target.name]: e.target.value });
    }

    const updateUser = (e) => {
        e.preventDefault();
        
        const user_id = state.id;
        const data = {
            firstname: userInput.firstname || state.firstname,
            middlename: userInput.middlename || state.middlename,
            lastname: userInput.lastname || state.lastname,
            birthdate: userInput.birthdate || state.birthdate,
            gender: userInput.gender || state.gender,
            username: userInput.username || state.username,
            mobilephone: userInput.mobilephone || state.mobilephone,
            email: userInput.email || state.email,
            address: userInput.address || state.address,
            province: userInput.province || state.province,
            region: userInput.region || state.region,
        }
        console.log(data)
        axios.put(`http://localhost:8000/api/update/${user_id}`, data).then(res=>{
            if(res.data.status === 200)
            {
                swal("Success",res.data.message,"success");
                setError([]);
                history('/accountview');
            }
            else if(res.data.status === 422)
            {
                swal("All fields are mandatory","","error");
                setError(res.data.validationErrors);
            }
            else if(res.data.status === 404)
            {
                swal("Error",res.data.message,"error");
                history('/accountview');
            }
        });
    }


    return (
        <div>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-6">
                        <div className="card">
                            <div className="card-header">
                                <h4>Edit Products 
                                    <Link to={'/accountview'} className="btn btn-danger btn-sm float-end"> BACK</Link>
                                </h4>
                            </div>
                            <div className="card-body">
                                
                                <form onSubmit={(e) => updateUser(e)} >
                                    <div className="form-group mb-3">
                                        <label>First Name</label>
                                        <input type="text" name="firstname" onChange={(e) => handleInput(e)} defaultValue={userInput.firstname} className="form-control" />
                                        <span className="text-danger">{errorInput.firstname}</span>
                                    </div>
                                    <div className="form-group mb-3">
                                        <label>Middle Name</label>
                                        <input type="text" name="middlename" onChange={(e) => handleInput(e)} defaultValue={userInput.middlename}  className="form-control" />
                                        <span className="text-danger">{errorInput.middlename}</span>
                                    </div>
                                    <div className="form-group mb-3">
                                        <label>Last Name</label>
                                        <input type="text" name="lastname" onChange={(e) => handleInput(e)} defaultValue={userInput.lastname}  className="form-control" />
                                        <span className="text-danger">{errorInput.lastname}</span>
                                    </div>
                                    <div className="form-group mb-3">
                                        <label>Birthdate</label>
                                        <input type="date" name="birthdate" onChange={(e) => handleInput(e)} defaultValue={userInput.birthdate}  className="form-control" />
                                        <span className="text-danger">{errorInput.birthdate}</span>
                                    </div>
                                    <div className="form-group mb-3">
                                        <label>Gender</label>
                                        <select type="text" id="gender" name="gender" onChange={(e) => handleInput(e)} defaultValue={userInput.gender} className="form-control" >
                                            <option value="default" selected hidden>Select Gender</option>
                                            <option value = "Male">Male</option>
                                            <option value = "Female">Female</option>
                                            <option value = "Prefer not to say">Prefer not to say</option>
                                        </select>
                                        <span className="text-danger">{errorInput.gender}</span>
                                    </div>
                                    <div className="form-group mb-3">
                                        <label>Username</label>
                                        <input type="text" name="username" onChange={(e) => handleInput(e)} defaultValue={userInput.username}  className="form-control" />
                                        <span className="text-danger">{errorInput.username}</span>
                                    </div>
                                    <div className="form-group mb-3">
                                        <label>Mobile Phone</label>
                                        <input type="text" name="mobilephone" onChange={(e) => handleInput(e)} defaultValue={userInput.mobilephone}  className="form-control" />
                                        <span className="text-danger">{errorInput.mobilephone}</span>
                                    </div>
                                    <div className="form-group mb-3">
                                        <label>Email</label>
                                        <input type="text" name="email" onChange={(e) => handleInput(e)} defaultValue={userInput.email}  className="form-control" />
                                        <span className="text-danger">{errorInput.email}</span>
                                    </div>
                                    <div className="form-group mb-3">
                                        <label>Address - City</label>
                                        <select type="text" id="address" name="address" onChange={(e) => handleInput(e)} defaultValue={userInput.address} className="form-control">
                                            <option value="default" selected hidden>Select Address</option>
                                            <option value = "Lucena">Lucena</option>
                                            <option value = "Tayabas">Tayabas</option>
                                            <option value = "Manila">Manila</option>
                                        </select>
                                        <span className="text-danger">{errorInput.address}</span>
                                    </div>
                                    <div className="form-group mb-3">
                                        <label>Province</label>
                                        <select type="text" id="province" name="province" onChange={(e) => handleInput(e)} defaultValue={userInput.province} className="form-control">
                                            <option value="default" selected hidden>Select Province</option>
                                            <option value = "Batangas">Batangas</option>
                                            <option value = "Cavite">Cavite</option>
                                            <option value = "Laguna">Laguna</option>
                                            <option value = "Quezon">Quezon</option>
                                            <option value = "Rizal">Rizal</option>
                                        </select>
                                        <span className="text-danger">{errorInput.province}</span>
                                    </div>
                                    <div className="form-group mb-3">
                                        <label>Region</label>
                                        <select type="text" id="region" name="region" onChange={(e) => handleInput(e)} defaultValue={userInput.region} className="form-control">
                                            <option value="default" selected hidden>Select Region</option>
                                            <option value = "Calabarzon">Calabarzon</option>
                                            <option value = "Central Luzon">Central Luzon</option>
                                        </select>
                                        <span className="text-danger">{errorInput.region}</span>
                                    </div>
                                    

                                    <div className="form-group mb-3">
                                        <button type="submit" id="updatebtn" className="btn btn-primary">Save</button>
                                    </div>
                                </form>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

}

export default EditAccount; 