import axios from 'axios';
import React , {useState} from 'react';
import {useNavigate, Link} from 'react-router-dom';
import swal from 'sweetalert';
import loginpic from '../pages/images/login.png';

const Register = () => {

    /*const [firstname, setFirstname]=useState("")
    const [middlename, setMiddlename]=useState("")
    const [lastname, setLastname]=useState("")
    const [username, setUsername]=useState("")
    const [mobilephone, setPhone]=useState("")
    const [email, setEmail]=useState("")
    const [orgName, setOrgname]=useState("")
    const [password, setPassword]=useState("")
    const [verified, setVerified] = useState('false');
    const history = useNavigate();

    async function signUp()
    {
        let item={firstname, middlename, lastname, username, mobilephone, email, orgName, password, verified}
        console.warn(item)

        let result = await fetch("http://localhost:8000/api/register",
        {
            method: 'POST',
            body: JSON.stringify(item),
            headers:{
                "Content-Type": 'application/json',
                "Accept": 'application/json',
            }
        })
        
        result = await result.json()
        localStorage.setItem("user-info", JSON.stringify(result));
        history("/login-seller")
    }*/
    const history = useNavigate();
    const [userInput, setUser] = useState({
      firstname: '',
      middlename: '',
      lastname: '',
      username: '',
      orgName: '',
      email: '',
      mobilephone: '',
      password: '',
      verified: 'false',
    });

    const [proof, setProof] = useState([]);
    const [errorList, setError] = useState([]);

    const handleInput = (e) => {
      e.persist();
      setUser({...userInput, [e.target.name]:e.target.value});
    }

    const handleImage = (e) => {
      setProof({image:e.target.files[0]});
    }

    const signUp = (e) => {
      e.preventDefault();

      const formData = new FormData();
      formData.append('image', proof.image);
      formData.append('firstname', userInput.firstname);
      formData.append('middlename', userInput.middlename);
      formData.append('lastname', userInput.lastname);
      formData.append('username', userInput.username);
      formData.append('orgName', userInput.orgName);
      formData.append('mobilephone', userInput.mobilephone);
      formData.append('password', userInput.password);
      formData.append('verified', userInput.verified);


      axios.post(`http://localhost:8000/api/register`, formData).then(res=>{
        if(res.data.status === 200)
        {
            swal('Success', res.data.message,'success');
            setError([]);
            history('/login-seller');
        }
        else if(res.data.status === 422)
        {
            swal('All fields are required', 'error');
            setError(res.data.errors);
        }
      });
    }

    return (
    <div className="Parent">
        <div className="child1">
            <center>
            <img className="login-flat" src={loginpic} alt="login" width={100} height={100}></img>
            </center>
        </div>
        <div className="child2">
            <center>
             <div className="title-create">
                <p>CREATE ACCOUNT</p>
              </div>
              <div className="title-content">
                <p>Sign-up as a seller</p>
              </div>
              <form onSubmit={signUp} encType='multipart/form-data'>
              <div className='input-create'>
              <div className="container">
                <div className="material-textfield">
                  <input placeholder=" " name="firstname" onChange={handleInput} value={userInput.firstname} type="text"/>
                  <label>First name</label>
                  <small className='text-danger'>{errorList.firstname}</small>
                </div>
              </div>
                  <br></br>
              <div className="container">
                <div className="material-textfield">
                  <input placeholder=" " name="middlename" onChange={handleInput} value={userInput.middlename} type="text"/>
                  <label>Middle name</label>
                  <small className='text-danger'>{errorList.middlename}</small>
                </div>
              </div>
                  <br></br>
              <div className="container">
                <div className="material-textfield">
                  <input placeholder=" " name="lastname" onChange={handleInput} value={userInput.lastname} type="text"/>
                  <label>Last name</label>
                  <small className='text-danger'>{errorList.lastname}</small>
                </div>
              </div>
              <br></br>
              <div className="container">
                <div className="material-textfield">
                  <input placeholder=" " name="username" onChange={handleInput} value={userInput.username} type="text"/>
                  <label>Username</label>
                  <small className='text-danger'>{errorList.username}</small>
                </div>
              </div>
              <br></br>
              <div className="container">
                <div className="material-textfield">
                  <select name="orgName" id="orgName" onChange={handleInput} value={userInput.orgName} className="form-control">
                      <option value="default" selected hidden>Select your Organization</option>
                      <option value = "Tayabas Manananim">Tayabas Manananim</option>
                      <option value = "KASAMA PGT">KASAMA PGT</option>
                      <option value = "Tayabas Group of Plants">Tayabas Group of Plants</option>
                  </select>
                  <small className='text-danger'>{errorList.orgName}</small>
                </div>
              </div>
              <br></br>
              <div className="container">
                <div className="material-textfield">
                  <input placeholder=" " name="image" onChange={handleImage} type="file"/>
                  <label>Upload proof of your organization</label>
                  <small className='text-danger'>{errorList.image}</small>
                </div>
              </div>
              <div className="container">
                <div className="material-textfield">
                  <input placeholder=" " name="email" onChange={handleInput} value={userInput.email} type="text"/>
                  <label>Email (Optional)</label>
                </div>
              </div>
              <br></br>
              <div className="container">
                <div className="material-textfield">
                  <input placeholder=" " name="mobilephone" onChange={handleInput} value={userInput.mobilephone} type="text"/>
                  <label>Phone Number</label>
                  <small className='text-danger'>{errorList.mobilephone}</small>
                </div>
              </div>
              <br></br>
              <div className="container">
                <div className="material-textfield">
                  <input placeholder=" " name="password" onChange={handleInput} value={userInput.password} type="password"/>
                  <label>Password</label>
                  <small className='text-danger'>{errorList.password}</small>
                </div>
              </div>
              <br></br>
              </div>
              <div className="button">
                <button type="submit" className="bttn-register"> REGISTER </button>
              </div>
              <div className='login-bttn'>
                <p>Already have an account?<Link to ="/login-seller"><b><u>Login here</u></b></Link></p>
              </div>
              </form>
              
            </center>
        </div>
    </div>
    );

}

export default Register;