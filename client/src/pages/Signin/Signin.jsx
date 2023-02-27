import React from "react";
import"./Signin.scss";
import { Link } from "react-router-dom";

const Signin = ()=>{
    return(
<div className="login">
<div className="card">
<div className="left">
    <h1>How are you?</h1>
    <span>If you have an account, please log in.</span>
    <button><Link style={{ textDecoration: 'none', color: 'white' }} to="/login">
    login
          </Link></button>
</div>
<div className="right">
    <h1>Sign in</h1>
    <form >
<input type="text" placeholder="Username"/>
<input type="email" placeholder="Email"/>
<input type="password" placeholder="Password"/>
<button>Sign in</button>
    </form>
</div>
</div>
</div>

    )
}

export default Signin