import React, { useState} from 'react';
import { Link } from 'react-router-dom';
import { signup, signInWithGoogle, signInWithGitHub } from "../helpers/auth";


const Signup = () => {


  const [error, setError] = useState(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
 


 const handleChange = (e) => {
  setEmail(e.target.value);
  setPassword(e.target.value)  
  }

// asynchronous function awaiting email and password to access 
  const handleSubmit= async(event) =>  {
    event.preventDefault();
    setError(error.message);
    try {
      await signup(email, password);
    } catch (error) {
      setError(error.message);
    }
  }

  const googleSignIn = async()  =>{
    try {
      await signInWithGoogle();
    } catch (error) {
      setError(error.message);
    }
  }

  const githubSignIn = async() => {
    try {
      await signInWithGitHub();
    } catch (error) {
      console.log(error)
      this.setState({ error: error.message });
    }
  }


    
        return (
            
                 <div>
        <form onSubmit={handleSubmit}>
          <h1>
            Sign Up to 
            <Link to="/"> Chatty</Link>
          </h1>
          
          <p>Fill in the form below to create an account.</p>
          <div>
            <input placeholder="Email" name="email" type="email" onChange={handleChange} value={this.state.email}></input>
          </div>
          <div>
            <input placeholder="Password" name="password" onChange={handleChange} value={this.state.password} type="password"></input>
          </div>
          <div>
            {this.state.error ? <p>{this.state.error}</p> : null}
            <button type="submit">Sign up</button>
            <p>Or</p>
            
            <button  onClick={googleSignIn}>
            Sign up with Google
          </button>
          
          <button onClick={githubSignIn}>
            Sign up with GitHub
          </button>
          </div>
          <hr></hr>
          <p>Already have an account? <Link to="/login">Login</Link></p>
        </form>
            </div>
        )
    
}
export default Signup;
