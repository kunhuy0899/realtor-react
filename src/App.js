import {Route, BrowserRouter as Router, Routes}  from "react-router-dom"

import ForgotPassword from "./pages/ForgotPassword";
import Header from "./components/Header";
import Home from "./pages/Home";
import Offers from "./pages/Offers";
import Profile from "./pages/Profile";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";

function App() { 
  return (
   <>
    
    <Router>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/offers" element={<Offers/>} />
        <Route path="/profile" element={<Profile/>} />
        <Route path="/sign-in" element={<SignIn/>} />
        <Route path="/sign-up" element={<SignUp/>} />
        <Route path="/forgot-pass" element={<ForgotPassword/>} />
      </Routes>
    </Router>
   </>
  );
}

export default App;
