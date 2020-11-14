import React , {useState} from "react";
import { Link } from "react-router-dom";
import { signin, signInWithGoogle, signInWithGitHub } from "../helpers/auth";


// error handling up next 


 const Login =  () => {

    const [error, setError] = useState(null);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
   
   const handleChange =(e) => {
   setEmail(e.target.value)
   setPassword(e.target.value);   
  };

  const handleSubmit = async(e)  => {
    e.preventDefault();
    
    try {
      await signin(email, password);
    } catch (error) {
      setError({ error: error.message });
    }
  };

  const  googleSignIn = async() =>  {
    try {
      await signInWithGoogle();
    } catch (error) {
     setError({error: error.message});
    }
  }

  const  githubSignIn = async() =>  {
    try {
      await signInWithGitHub();
    } catch (error) {
setError({ error: error.message });
    }
  }


    return (
      <div>
        <form
          autoComplete="off"
          onSubmit={handleSubmit}
        >
          <h1>
            Login to
            <Link to="/">
              Chatty
            </Link>
          </h1>
          <p>
            Fill in the form below to login to your account.
          </p>
          <div>
            <input
              placeholder="Email"
              name="email"
              type="email"
              onChange={handleChange}
              value={email}
            />
          </div>
          <div>
            <input
              placeholder="Password"
              name="password"
              onChange={handleChange}
              value={password}
              type="password"
            />
          </div>
          <div>
            {this.state.error ? (
              <p>{error}</p>
            ) : null}
            <button type="submit">Login</button>
          </div>
          <button onClick = {googleSignIn}>Sign in with google </button>
          <button onClick = {githubSignIn}>Sign in with github </button>
          <hr />
          <p>
            Don't have an account? <Link to="/signup">Sign up</Link>
          </p>
        </form>
      </div>
    );
  
}
export default  Login ;