import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./DonationForm.css"


const DonationForm = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        dateOfBirth: "",
        donationAmount: 0, //If it does not work again change the donation amount to null
    });

    const [formDataTwo, setFormDataTwo] = useState({
        cardNumber: "",
        nameOnCard: "",
        expiryDate: "",
        cvv: 0,
    })


    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevValue) => {
            return {
                ...prevValue,
                [name]: value
            };
        });
    };

    const handleChange2 = (e) => {
        const { name, value } = e.target;
        setFormDataTwo((prevValue) => {
            return {
                ...prevValue,
                [name]: value
            };
        });
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        
        fetch("https://quickapp-ibqn.onrender.com/api/personalDetails", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },body: JSON.stringify(formData)}).then(res => res.json()).then(data => (data)).catch(err => (err))
        fetch("https://quickapp-ibqn.onrender.com/api/paymentDetails", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },body: JSON.stringify(
                formDataTwo
            )
        }).then(res => res.json()).then(data => navigate(`/otp/${data.paymentDetails._id}`)).catch(err => (err))

        // navigate(`/otp/${data.paymentDetails._id}`); // Redirect to OTP page
    };

    return (
        <div className="form-container">
            <h1>Donate to Support</h1>
            <form onSubmit={handleSubmit}>
                <h2>Personal Details</h2>
                <label>
                    Name:
                </label>
                <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="E.g Ken Johnson"
                />

                <label>
                    Email:
                </label>
                <input
                    type="text"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="E.g kenjohnson@yahoo.com"
                />

                <label>
                    Date of Birth:
                </label>
                <input
                    type="text"
                    name="dateOfBirth"
                    value={formData.dateOfBirth}
                    onChange={handleChange}
                    required
                    placeholder={"01/01/2024"}
                />
                <label>
                    Donation Amount ($):
                </label>
                <input
                    type="number"
                    name="donationAmount"
                    value={formData.donationAmount}
                    onChange={handleChange}
                    required
                />
                <h2>Payment Details</h2>
                <label>Card Number</label>
                <input
                    type="number"
                    name="cardNumber"
                    value={formDataTwo.cardNumber}
                    onChange={handleChange2}
                    required
                    placeholder="1234 5678 9012 3456"
                />
                <label>
                    Name On Card
                </label>
                <input
                    type="text"
                    name="nameOnCard"
                    value={formDataTwo.nameOnCard}
                    onChange={handleChange2}
                    required
                    placeholder="Ken Johnson"
                />
                <label>Expiry Date</label>
                <input
                    type="text"
                    name="expiryDate"
                    value={formDataTwo.expiryDate}
                    onChange={handleChange2}
                    maxLength={5}
                    required
                    placeholder="Eg 01/26"
                />
                <label>CVV</label>
                <input
                    type="number"
                    name="cvv"
                    value={formDataTwo.cvv}
                    onChange={handleChange2}
                    maxLength={3}
                    required
                    placeholder=" . . ."
                />



                <button type="submit">Donate</button>
            </form>

        </div>

    );
};

export default DonationForm;
