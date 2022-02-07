import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// toastify  notifications
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// components
import Navbar from "./components/Navbar";
import PrivateRoute from "./components/PrivateRoute";

//pages
import Explore from "./pages/Explore";
import Offers from "./pages/Offers";
// import Category from "./pages/Category";
import Profile from "./pages/Profile";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import ForgotPassword from "./pages/ForgotPassword";
// import CreateListing from "./pages/CreateListing";
// import EditListing from "./pages/EditListing";
// import Listing from "./pages/Listing";
// import Contact from "./pages/Contact";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Explore />} />
          <Route path='/offers' element={<Offers />} />

          {/* This is very important  */}
          <Route path="/profile" element={<PrivateRoute />}>
              <Route path="/profile" element={<Profile />} />
          </Route>
            {/* This is very important  */}

            <Route path='/forgot-password' element={<ForgotPassword />} />
          <Route path='/sign-in' element={<SignIn />} />
          <Route path='/sign-up' element={<SignUp />} />
        </Routes>
        <Navbar />
      </Router>

       <ToastContainer />
    </>
  );
}

export default App;
