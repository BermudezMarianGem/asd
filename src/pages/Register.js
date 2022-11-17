import React , {useState} from 'react';
import {useNavigate, Link} from 'react-router-dom';
import loginpic from '../pages/images/login.png';

const Register = () => {

    const [firstname, setFirstname]=useState("")
    const [middlename, setMiddlename]=useState("")
    const [lastname, setLastname]=useState("")
    const [username, setUsername]=useState("")
    const [mobilephone, setPhone]=useState("")
    const [email, setEmail]=useState("")
    const [orgName, setOrgname]=useState("")
    const [password, setPassword]=useState("")
    const history = useNavigate();

    async function signUp()
    {
        
        let item={firstname, middlename, lastname, username, mobilephone, email, orgName, password}
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
        localStorage.setItem("user-info", JSON.stringify(result))
        history("/login-seller")
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
              <div className='input-create'>
              <div className="container">
                <div className="material-textfield">
                  <input placeholder=" " value={firstname} onChange={(e)=>setFirstname(e.target.value)} type="text"/>
                  <label>First name</label>
                </div>
              </div>
                  <br></br>
              <div className="container">
                <div className="material-textfield">
                  <input placeholder=" " value={middlename} onChange={(e)=>setMiddlename(e.target.value)} type="text"/>
                  <label>Middle name</label>
                </div>
              </div>
                  <br></br>
              <div className="container">
                <div className="material-textfield">
                  <input placeholder=" " value={lastname} onChange={(e)=>setLastname(e.target.value)} type="text"/>
                  <label>Last name</label>
                </div>
              </div>
              <br></br>
              <div className="container">
                <div className="material-textfield">
                  <input placeholder=" " value={username}  onChange={(e)=>setUsername(e.target.value)} type="text"/>
                  <label>Username</label>
                </div>
              </div>
              <br></br>
              <div className="container">
                <div className="material-textfield">
                  <input placeholder=" " value={orgName}  onChange={(e)=>setOrgname(e.target.value)} type="text"/>
                  <label>Organization Name</label>
                </div>
              </div>
              <br></br>
              <div className="container">
                <div className="material-textfield">
                  <input placeholder=" " value={email}  onChange={(e)=>setEmail(e.target.value)} type="text"/>
                  <label>Email (Optional)</label>
                </div>
              </div>
              <br></br>
              <div className="container">
                <div className="material-textfield">
                  <input placeholder=" " value={mobilephone}  onChange={(e)=>setPhone(e.target.value)} type="text"/>
                  <label>Phone Number</label>
                </div>
              </div>
              <br></br>
              <div className="container">
                <div className="material-textfield">
                  <input placeholder=" " value={password}  onChange={(e)=>setPassword(e.target.value)} type="password"/>
                  <label>Password</label>
                </div>
              </div>
              <br></br>
              </div>
              <div className="button">
                <button onClick = {signUp} className="bttn-register"> REGISTER </button>
              </div>
              <div className='login-bttn'>
                <p>Already have an account?<Link to ="/login-seller"><b><u>Login here</u></b></Link></p>
              </div>
            </center>
        </div>
    </div>
    );

}

export default Register;