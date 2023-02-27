import React from "react";
import"./Login.scss";
import { Link } from "react-router-dom";

const Login = ()=>{
    return(
<div className="login">
<div className="card">
<div className="left">
    <h1>Hey! My friend</h1>
    <span>you don't have an account?</span>
    <button><Link style={{ textDecoration: 'none', color: 'white' }} to="/signin">
    Register
          </Link></button>

</div>
<div className="right">
    <h1>Log in</h1>
    <form >
<input type="text" placeholder="Username"/>
<input type="password" placeholder="Password"/>
<button>Log in</button>
    </form>
</div>
</div>
</div>

    )
}

export default Login