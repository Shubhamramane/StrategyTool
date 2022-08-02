import React, {useState, useEffect , useContext} from "react"
import "./App.css";
import NewComponent from "./NewComponent";
import { BrowserRouter , Routes, Route , HashRouter } from "react-router-dom";
import Login from "./Component/SignIn/Login";
import Register from "./Component/SignIn/Register";
import HomePage from "./Component/HomePage/HomePage";
import SocialMedia from "../src/Component/HomePage/SocialMedia"
import {useNavigate} from "react-router-dom"

const AuthTokenContext = React.createContext()

function App() {
  const [authToken , setAuthToken] = useState("")
  
  useEffect(() => {
    

    if(JSON.parse(localStorage.getItem("token")) !== null){
      setAuthToken(JSON.parse(localStorage.getItem("token")))
    }else {
      if(window.location.pathname === "/login") {
        return
      }
      // window.location.pathname = "/login"
    }
  })
  return (
    <>
    <AuthTokenContext.Provider value={authToken}>
      <HashRouter>
        <Routes>
        <Route path="/socialmedia" element={<SocialMedia/>} />
          <Route path="/login" element={<Login setAuthToken={setAuthToken}/>} />
          <Route path="/register" element={<Register/>} />
          {(authToken)?
           <Route path="*" element={<NewComponent setAuthToken={setAuthToken} />} />
          :
          <Route path="/" element={<HomePage setAuthToken={setAuthToken} />} />
          }
        </Routes>
      </HashRouter>
      </AuthTokenContext.Provider>

      {/* <>
      <BrowserRouter>
      <Routes>
       
      </Routes>
      </BrowserRouter>
      </> */}
    </>
  );
}
export default App;
export {AuthTokenContext}