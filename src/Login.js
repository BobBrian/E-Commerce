import React, {useState} from 'react'
import './Login.css';
import { Link , useHistory} from 'react-router-dom';
import { auth } from './firebase';


function Login() {

    // These Here were Made to Track the Emails and Passowords of Users
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const history = useHistory();

    // This is here to prevent the page for refreshing. purely for aesthetics
    const signIn = e =>{
        e.preventDefault()

        auth
            .signInWithEmailAndPassword(email,password)
            .then(auth =>{
                history.push('/')
            })
            .catch(error => alert(error.message))




    }

    const register = e =>{
        e.preventDefault()

        auth

            .createUserWithEmailAndPassword(email,password)
            .then((auth) =>{
                // it successfully creates a new user with email password
                if (auth){
                    history.push('/')
                }
            })
            .catch(error => alert(error.message))
    }
    



    return (

        
        <div className="login">
            <Link to ='/'>
            <img className="login_logo" src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"/>

            </Link>

            <div className="login_container">
                <h1>Sign In</h1>
                <form>
                    {/* basically when a user types in an email this function will automatically set the email value to what the user typed in
                    mapping them to the const variable , same Princeple applies to the password */}
                    <h5>E-mail</h5>
                    <input type='text' value={email} onChange={e => setEmail(e.target.value) }        />

                    <h5>Password</h5>
                    <input type='password' value={password} onChange={e => setPassword(e.target.value)} />



                    {/* When the Signin Button is pressed it will intiate a function labelled signIn*/} 
                    <button type = 'submit' onClick ={signIn} className="login_signinbutton">Sign In</button>
                </form>
                <p>
                    This mutual confidentiality agreement sample is for two company owners planning to merge their businesses.
                    They wish for important company inside information to remain confidential throughout their business dealings,
                    so they sign an agreement that obligates them to refrain from disclosing private matters to others.
                </p>
                <button className="login_registerbutton" onClick = {register}>Create Amazon Account</button>

            </div>
            
        </div>
       


        
    )
}

export default Login
