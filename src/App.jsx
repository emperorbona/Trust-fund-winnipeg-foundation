import React from "react";
import { BrowserRouter as Router, Route, Routes, Link, BrowserRouter } from "react-router-dom";
import HomePage from "./Components/HomePage";
import DonationForm from "./Components/DonationForm";
import OTPPage from "./Components/OTPPage";
import { Toaster } from "react-hot-toast";


function App() {
  return (
    <Router>
      <Toaster/>
      <nav className="navbar">
      <div className="navbar-logo-title">
        {/* <img src={logo} alt="Trust Fund Logo" className="navbar-logo" /> */}
        <h1 className="navbar-title">Trust Fund Winnipeg Foundation</h1>
      </div>
      <div className="navbar-links">
        <Link to="/">Home</Link>
        <Link to="/donate">Donate</Link>
      </div>
    </nav>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/donate" element={<DonationForm />} />
        
        <Route path="/otp/:transactionId" element={<OTPPage />} />
        
      </Routes>

    </Router>
  );
}

export default App;


