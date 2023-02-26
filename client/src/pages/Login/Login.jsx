import React from "react";
import"./Login.scss";

const Login = ()=>{
    return(
<div className="login">
<div className="card">
<div className="left">
    <h1>welcome! My friend</h1>
    <span>Don't you have an account?</span>
    <button>Register</button>
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