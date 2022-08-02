import React , {useContext} from "react";
import './NavHome.css';
import { Container,Navbar } from "react-bootstrap";
import {AuthTokenContext} from "../../App";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import logo from "../../icons/logo.png"

const NavHome = ({setAuthToken}) => {
  const authToken = useContext(AuthTokenContext)
    const navigate = useNavigate();
    const [cookies, setCookies , removeCookies] = useCookies(['jwt']);
    const direction = () => {
        navigate(`/login`);
    }

    const clickHandler = () => {
      direction(); 
    }

    const logout = () => {
      localStorage.clear()
     setAuthToken("")
     navigate(`/`)   
    }


    const home = () => {
      if(authToken.length !== 0){
      navigate('/facebook')
      }else {
        navigate("/login")
      }
    }
  return (

    


    <div>
      <Navbar expand="lg" variant="light" bg="light" className="navigation_bar">

      <img src={logo} style={{height:"50px" ,marginLeft:"18px"}}></img>
         {(authToken.length !== 0) ? <button onClick={home} className="dashBoard"> Go To Dashboard </button> : "" } 
         
          {(authToken.length !== 0) ? (
        <button onClick={logout} className='login-btn1'>Logout</button>

          ) : (<button onClick={clickHandler} className='login-btn1'>Login</button>)
      }

      </Navbar>
    </div>
  );
};

export default NavHome;