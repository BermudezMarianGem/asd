import React , {useState} from 'react';
import {useNavigate, Link} from 'react-router-dom';

const RegisterCustomer = () => {

    const [firstname, setfirstname]=useState("")
    const [middlename, setmiddlename]=useState("")
    const [lastname, setlastname]=useState("")
    const [username, setusername]=useState("")
    const [email, setemail]=useState("")
    const [password, setpassword]=useState("")
    const history = useNavigate();

    async function customerSignup()
    {
        
        let item={firstname, middlename, lastname, username, email, password}

        let result = await fetch("http://localhost:8000/api/registerCustomer",
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
        history("/login-customer")
    }
    return (
        <div className="col-sm-6 offset-sm-3">
           <h1>CREATE ACCOUNT</h1>
           <p>SIgn-up as a seller</p>
           <input type="text" value={firstname} onChange={(e)=>setfirstname(e.target.value)} className="form-control" placeholder="Firstname" /><br/>
           <input type="text" value={middlename} onChange={(e)=>setmiddlename(e.target.value)} className="form-control" placeholder="Middlename" /><br/>
           <input type="text" value={lastname} onChange={(e)=>setlastname(e.target.value)} className="form-control" placeholder="Lastname" /><br/>
           <input type="text" value={username} onChange={(e)=>setusername(e.target.value)} className="form-control" placeholder="Username" /><br/>
           <input type="email" value={email}  onChange={(e)=>setemail(e.target.value)} className="form-control" placeholder="Email" /><br/>
           <input type="password" value={password}  onChange={(e)=>setpassword(e.target.value)} className="form-control" placeholder="Password" /><br/>
           <button onClick = {customerSignup} className="btn btn-primary">Register</button>
           <p>Already have an account?<Link to ="/login-customer">Login here</Link></p>
        </div>
    );

}

export default RegisterCustomer;