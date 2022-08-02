import React, { Component , useState, useContext, useEffect } from "react";
import axios from "axios";
import './SignIn.css';
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";
import setToken from "../../helper/setToken"
import { AuthTokenContext } from "../../App";
import Loader from "./Loader"

const Login = ({setAuthToken}) => {
    const authToken = useContext(AuthTokenContext)
    const [identifier, setIdentifier] = useState()
    const [password , setPassword] = useState()
    const [cookies, setCookies] = useCookies(['jwt']);
    const [jwt, setJwt] = useState('')
    const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
    const navigate = useNavigate();

    

    useEffect(() => {
        if(authToken.length !== 0){
            // console.log("authToken", authToken)
            // console.log("inside if conditon of login page")
            navigate("/facebook")
        }
    })

    const renderError = () => {
        if (isError) {
          return (
            <div
              className="alert alert-danger alert-dismissible fade show"
              role="alert"
            >
              You have entered an invalid username or password
            </div>
          );
        }
      };
    
    
    const submitHandler = (e) => {
        e.preventDefault();
        setIsLoading(true);
        setIsError(false);
        axios
      .post(`https://strategytooladmin.handsintechnology.in/api/auth/local/`, { identifier, password })
      .then((res) => {
        // console.log(res.data.jwt)
        // console.log("this is response",res)
        // console.log("this is token", res.data.jwt)
        localStorage.setItem("token", JSON.stringify(res.data.jwt))
        // setToken(res.data.jwt)
        setAuthToken(res.data.jwt)
        navigate("/facebook")
        
        
        // setCookies('jwt', jwt , {path:"/"});
      })
      .catch((error) => {
        //reject the promise and pass t error object back to the form
        // reject(error);
        setIsLoading(false)
        setIsError(true);
        setTimeout(() => setIsError(false), 4000);
        // console.log(error)
      });
      // setIsLoading(false);
    } 

    const register = () => {
      navigate('/register')
    }

 return (
            <div className="background_color">
            <div className="outer">
          <div className="inner">
            <form onSubmit={submitHandler}>
               {(isLoading)?
             
               <Loader/>
               
                :
                <>
                <h3 className="outer robotic-font">Log in</h3>
                <div className="form-group">
                    <label className="robotic-font">Email</label>
                    <input type="email" value={identifier} onChange={(e) => setIdentifier(e.target.value)} className="form-control" placeholder="Enter email" required/>
                </div>
                <div className="form-group">
                    <label className="robotic-font">Password</label>
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="form-control" placeholder="Enter password" required />
                </div>
                <button type="submit" className="btn btn-dark btn-lg btn-block robotic-font">Sign in</button>
                <span className="sign-up">
                Not Registered? <span to="/register" className="robotic-font sign_up_left" onClick={register}>SignUp</span>
                </span>
                <span className="forgot-password text-right">
                    Forgot <span href="#" className="robotic-font forgot_password">password?</span>
                </span>
                </>
              }
            </form>
            <br/>
            {renderError()}
            </div>
            </div>
            </div>
        );

    
}

export default Login