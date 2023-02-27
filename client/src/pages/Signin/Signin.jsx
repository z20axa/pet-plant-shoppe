import React from "react";
import"./Signin.scss";
import { Link } from "react-router-dom";

const Signin = ()=>{
    return(
<div className="login">
<div className="card">
<div className="left">
<h4>Welcome Pet Lovers!</h4>
    
</div>
<div className="right">
    <h1>Sign up</h1>
    <form >
<input type="text" placeholder="Username"/>
<input type="email" placeholder="Email"/>
<input type="password" placeholder="Password"/>
<button>Sign up</button>
   <span>Need an account?</span>
<button><Link style={{ textDecoration: 'none', color: 'white' }} to="/login">
    Login</Link></button>
    </form>
</div>
</div>
</div>

    )
}

export default Signin