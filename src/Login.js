import React from 'react'
import './Login.css';
import { Link } from 'react-router-dom';


function Login() {
    return (
        
        <div className="login">
            <Link to ='/'>
            <img className="login_logo" src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"/>

            </Link>

            <div className="login_container">
                <h1>Sign In</h1>
                <form>
                    <h5>E-mail</h5>
                    <input type='text'/>

                    <h5>Password</h5>
                    <input type='password'/>

                    <button>Sign In</button>
                </form>
                <p>
                    This mutual confidentiality agreement sample is for two company owners planning to merge their businesses.
                    They wish for important company inside information to remain confidential throughout their business dealings,
                    so they sign an agreement that obligates them to refrain from disclosing private matters to others.
                </p>
                <button>Create Amazon Account</button>

            </div>
            
        </div>
       


        
    )
}

export default Login
