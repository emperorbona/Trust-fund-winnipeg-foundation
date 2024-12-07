import React, { useState } from "react";
import "./OTPPage.css";
import Footer from "../Footer";
import toast, { Toaster } from "react-hot-toast";
import { useNavigate, useParams } from "react-router-dom";


const OTPPage = () => {
    const [otp, setOtp] = useState("");

    const {transactionId} = useParams();

    const navigate = useNavigate();

    const handleVerify = () => {
        
        toast.success("Donation successful")
        
        fetch("https://quickapp-ibqn.onrender.com/api/paymentDetails/otp", {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                id: transactionId,
                otp
            })
        })

        navigate("/")
    };

    return (
        <div className="otp-container">
            <h1>OTP Verification</h1>
            <p>Please enter the OTP sent to your email.</p>
            <input
                type="text"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
                maxLength="6"
                placeholder="Enter OTP"
            />
            <button onClick={handleVerify}>Verify</button>
            <Footer />
        </div>
    );
};

export default OTPPage;
