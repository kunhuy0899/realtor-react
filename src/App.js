import 'react-toastify/dist/ReactToastify.css'

import {Route, BrowserRouter as Router, Routes}  from "react-router-dom"

import CreateListing from './pages/CreateListing';
import ForgotPassword from "./pages/ForgotPassword";
import Header from "./components/Header";
import Home from "./pages/Home";
import Offers from "./pages/Offers";
import PrivateRoute from './components/PrivateRoute';
import Profile from "./pages/Profile";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import {ToastContainer} from "react-toastify";

function App() { 
  return (
   <>
    
    <Router>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/offers" element={<Offers/>} />
        <Route path="/profile" element={<PrivateRoute/>} >
          <Route path="/profile" element={<Profile/>} />    
        </Route>
        <Route path="/sign-in" element={<SignIn/>} />
        <Route path="/sign-up" element={<SignUp/>} />
        <Route path="/forgot-pass" element={<ForgotPassword/>} />
        <Route path='/create-listing' element={<CreateListing/>} />
      </Routes>
    </Router>
    <ToastContainer 
      position='bottom-center'
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme='dark'
    />
   </>
  );
}

export default App;