import React , {useState}from 'react';
import {useNavigate} from 'react-router-dom';
import loginpic from '../pages/images/login.png';

const LoginAdmin = () =>
{
    const history = useNavigate();
    const [username, setUsername]=useState("");
    const [password, setPassword]=useState("");

    function adminLogin()
    {
        if((username !== 'admin') || (password !== 'password'))
        {
            alert("You don't have right to access this site");
        }
        else
        {
            history('/admin-dashboard');
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
                    <p>ADMIN LOGIN</p>
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
                    <button onClick={adminLogin} className="bttn-login"> LOGIN </button>
                  </div>
                </center>
              
            </div>
        </div>
    );
}

export default LoginAdmin;