import React, { useState, useEffect } from 'react';
import "./Login.scss";
import { Link } from "react-router-dom";


import { useMutation } from '@apollo/client';
import { LOGIN_USER } from '../../utils/mutations';

import Auth from '../../utils/auth';

const Login = () => {
    const [userFormData, setUserFormData] = useState({ email: '', password: '' });
    const [validated] = useState(false);
    const [showAlert, setShowAlert] = useState(false);

    const [login, { error }] = useMutation(LOGIN_USER);

    useEffect(() => {
        if (error) {
            setShowAlert(true);
        } else {
            setShowAlert(false);
        }
    }, [error]);

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setUserFormData({ ...userFormData, [name]: value });
    };

    const handleFormSubmit = async (event) => {
        event.preventDefault();

        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }

        try {
            const { data } = await login({
                variables: { ...userFormData },
            });

            console.log(data);
            Auth.login(data.login.token);
        } catch (e) {
            console.error(e);
        }

        // clear form values
        setUserFormData({
            email: '',
            password: '',
        });
    };


    return (
        <div className="login">
            <div className="card">
                <div className="left">
                    <h1>Hey! My friend</h1>
                </div>
                <div className="right">
                    <h1>Existing Users</h1>
                    <form onSubmit={handleFormSubmit}>
                        <input type="text" name="email" onChange={handleInputChange} value={userFormData.email} placeholder="Email" />
                        <input type="password" name="password" onChange={handleInputChange} value={userFormData.password} placeholder="Password" />
                      
                        <button>
                            Sign In
                        </button>
                    </form>
                </div>
            </div>
        </div>

    )
}


export default Login;

