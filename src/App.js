import {Route, BrowserRouter as Router, Routes}  from "react-router-dom"

import ForgotPassword from "./pages/ForgotPassword";
import Home from "./pages/Home";
import Offers from "./pages/Offers";
import Profile from "./pages/Profile";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";

function App() {
  return (
   <>
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/offers" element={<Offers/>} />
        <Route path="/profile" element={<Profile/>} />
        <Route path="/signin" element={<SignIn/>} />
        <Route path="/signup" element={<SignUp/>} />
        <Route path="/forgotpass" element={<ForgotPassword/>} />
      </Routes>
    </Router>
   </>
  );
}

export default App;
