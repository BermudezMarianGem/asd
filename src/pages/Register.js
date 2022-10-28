import React , {useState} from 'react';
import {useNavigate, Link} from 'react-router-dom';

const Register = () => {

    const [firstname, setFirstname]=useState("")
    const [middlename, setMiddlename]=useState("")
    const [lastname, setLastname]=useState("")
    const [username, setUsername]=useState("")
    const [mobilephone, setPhone]=useState("")
    const [email, setEmail]=useState("")
    const [password, setPassword]=useState("")
    const history = useNavigate();

    async function signUp()
    {
        
        let item={firstname, middlename, lastname, username, mobilephone, email, password}
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
        <div className="col-sm-6 offset-sm-3">
           <h1>CREATE ACCOUNT</h1>
           <p>SIgn-up as a seller</p>
           <input type="text" value={firstname} onChange={(e)=>setFirstname(e.target.value)} className="form-control" placeholder="Firstname" /><br/>
           <input type="text" value={middlename} onChange={(e)=>setMiddlename(e.target.value)} className="form-control" placeholder="Middlename" /><br/>
           <input type="text" value={lastname} onChange={(e)=>setLastname(e.target.value)} className="form-control" placeholder="Lastname" /><br/>
           <input type="text" value={username} onChange={(e)=>setUsername(e.target.value)} className="form-control" placeholder="Username" /><br/>
           <input type="text" value={mobilephone} onChange={(e)=>setPhone(e.target.value)} className="form-control" placeholder="Mobile Number" /><br/>
           <input type="email" value={email}  onChange={(e)=>setEmail(e.target.value)} className="form-control" placeholder="Email" /><br/>
           <input type="password" value={password}  onChange={(e)=>setPassword(e.target.value)} className="form-control" placeholder="Password" /><br/>
           <button onClick = {signUp} className="btn btn-primary">Register</button>
           <p>Already have an account?<Link to ="/login-seller">Login here</Link></p>
        </div>
    );

}

export default Register;