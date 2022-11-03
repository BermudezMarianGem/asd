import React , {useState}from 'react';
import {useNavigate, Link} from 'react-router-dom';

const LoginCustomer = () =>
{
    const [username, setUsername]=useState("");
    const [password, setPassword]=useState("");
    const history = useNavigate();

    async function customerLogin()
    {
        let item={username,password};
        let result = await fetch("http://localhost:8000/api/loginCustomer",{
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": 'application/json',
            },
            body:JSON.stringify(item)

        });
        result = await result.json();
        localStorage.setItem("user-info",JSON.stringify(result))
        
        if ("error" in result)
        {
            alert("Incorrect Username or Password!")
        }
        else
        {
            history("/customer-homepage")
        }
        
    }
    return(
        <div>
            
            <div className="col-sm-6 offset-sm-3">
                <h1>Customer Login Page</h1>
                <p>Login to continue</p>
                <input type ="text" placeholder="Username" onChange={(e) => setUsername(e.target.value)} className="form-control"/><br/>
                <input type ="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)}className="form-control"/><br/>

                <button onClick={customerLogin}className="btn btn-primary">Login</button>
                <p>Don't have account? <Link to ="/register-customer">Register here</Link></p>
            </div>
            

        </div>
    )
}

export default LoginCustomer;