import React from "react";
import"./Login.scss";
import { Link } from "react-router-dom";

const Login = ()=>{
    return(
<div className="login">
<div className="card">
<div className="left">
    <h4>Welcome Pet Lovers!</h4>
    

</div>
<div className="right">
    <h1>Log in</h1>
    <form >
<input type="text" placeholder="Username"/>
<input type="password" placeholder="Password"/>
<button>Log in</button>
<span>You don't have an account?</span>
    <button><Link style={{ textDecoration: 'none', color: 'white' }} to="/signin">
    Register
          </Link></button>
    </form>
</div>
</div>
</div>

    )
}

export default Login