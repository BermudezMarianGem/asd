import React , {useState} from 'react';
import {useHistory, Link} from 'react-router-dom';

const Register = () => {

    const [name, setName]=useState("")
    const [password, setPassword]=useState("")
    const [email, setEmail]=useState("")
    const history = useHistory();

    async function signUp()
    {
        
        let item={name,password,email}
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
        history.push("/login")
    }
    return (
        <div className="col-sm-6 offset-sm-3">
           <h1>CREATE ACCOUNT</h1>
           <p>SIgn-up as a seller</p>
           <input type="text" value={name} onChange={(e)=>setName(e.target.value)} className="form-control" placeholder="name" /><br/>
           <input type="password" value={password}  onChange={(e)=>setPassword(e.target.value)} className="form-control" placeholder="password" /><br/>
           <input type="email" value={email}  onChange={(e)=>setEmail(e.target.value)} className="form-control" placeholder="email" /><br/>

           <button onClick = {signUp} className="btn btn-primary">Register</button>
           <p>Already have an account?<Link to ="/login">Login here</Link></p>
        </div>
    );

}

export default Register;