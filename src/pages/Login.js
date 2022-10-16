import React , {useState}from 'react';
import {useHistory, Link} from 'react-router-dom';

const Login = () =>
{
    const [email, setEmail]=useState("");
    const [password, setPassword]=useState("");
    const history = useHistory();

    async function login()
    {
        console.warn(email,password)
        let item=(email,password);
        let result = await fetch("http://localhost:8000/api/login",{
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": 'application/json',
            },
            body:JSON.stringify(item)

        });
        result = await result.json();
        localStorage.setItem("user-info",JSON.stringify(result))
        history.push("/add-product")
    }
    return(
        <div>
            
            <div className="col-sm-6 offset-sm-3">
                <h1>Seller Login Page</h1>
                <p>Login to continue</p>
                <input type ="text" placeholder="email" onChange={(e) => setEmail(e.target.value)} className="form-control"/><br/>
                <input type ="password" placeholder="password" onChange={(e) => setPassword(e.target.value)}className="form-control"/><br/>

                <button onClick={login}className="btn btn-primary">Login</button>
                <p>Don't have account? <Link to ="/register">Register here</Link></p>
            </div>
            

        </div>
    )
}

export default Login;