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
            orgName: userInput.orgName || state.orgName,
            brgy: userInput.brgy || state.brgy,
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
                                        <label>Organization Name</label>
                                        <select type="text" id="orgName" name="orgName" onChange={(e) => handleInput(e)} defaultValue={userInput.orgName} className="form-control">
                                            <option value="default" selected hidden>Select your Organization</option>
                                            <option value = "Tayabas Manananim">Tayabas Manananim</option>
                                            <option value = "KASAMA PGT">KASAMA PGT</option>
                                            <option value = "Tayabas Group of Plants">Tayabas Group of Plants</option>
                                        </select>
                                        <span className="text-danger">{errorInput.orgName}</span>
                                    </div>
                                    <div className="form-group mb-3">
                                        <label>Barangay</label>
                                        <select type="text" id="brgy" name="brgy" onChange={(e) => handleInput(e)} defaultValue={userInput.brgy} className="form-control">
                                            <option value="default" selected hidden>Select your Barangay</option>
                                            <option value = "Alitao">Alitao</option>
                                            <option value = "Alsam Ibaba">Alsam Ibaba</option>
                                            <option value = "Alsam Ilaya">Alsam Ilaya</option>
                                            <option value = "Alupay">Alupay</option>
                                            <option value = "Angeles Zone I">Angeles Zone I</option>
                                            <option value = "Angeles Zone II">Angeles Zone II</option>
                                            <option value = "Angeles Zone III">Angeles Zone III</option>
                                            <option value = "Angeles Zone IV">Angeles Zone IV</option>
                                            <option value = "Angustias Zone I">Angustias Zone I</option>
                                            <option value = "Angustias Zone II">Angustias Zone II</option>
                                            <option value = "Angustias Zone III">Angustias Zone III</option>
                                            <option value = "Angustias Zone IV">Angustias Zone IV</option>
                                            <option value = "Anos">Anos</option>
                                            <option value = "Ayaas">Ayaas</option>
                                            <option value = "Baguio">Baguio</option>
                                        </select>
                                        <span className="text-danger">{errorInput.brgy}</span>
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