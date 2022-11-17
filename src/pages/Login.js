import React , {useState}from 'react';
import {useNavigate, Link} from 'react-router-dom';
import loginpic from '../pages/images/login.png';

const Login = () =>
{
    const [username, setUsername]=useState("");
    const [password, setPassword]=useState("");
    const history = useNavigate();

    async function login()
    {
        let item={username,password};
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
        
        if ("error" in result)
        {
            alert("Incorrect Username or Password!")
        }
        else
        {
            history("/homepage")
        }
        
    }
    return(
        <div className="Parent">
            <div className="child1">
                <center>
                <img className="login-flat" src={loginpic} alt="login" width={100} height={100}></img>
                </center>
            </div>
            <div className="child2">
            
                <center>
                 <div className="title">
                    <p>SELLER LOGIN</p>
                  </div>
                  <div className="title-content">
                    <p>Login to continue</p>
                  </div>
                  <div className='input-farmer'>
                  <div className="container">
                    <div className="material-textfield">
                      <input placeholder=" " onChange={(e) => setUsername(e.target.value)} type="text"/>
                      <label>Username</label>
                    </div>
                  </div>
                      <br></br>
                  <div className="container">
                    <div className="material-textfield">
                      <input placeholder=" " onChange={(e) => setPassword(e.target.value)} type="password"/>
                      <label>Password</label>
                    </div>
                  </div>
                  </div>
                  <div className="button">
                    <button onClick={login} className="bttn-login"> LOGIN </button>
                  </div>
                  <div className='login-bttn'>
                    <p>Don’t have account? <Link to ="/register-seller"><b><u>Register here</u></b></Link></p>
                  </div>
                </center>
              
            </div>
        </div>
    );
}

export default Login;