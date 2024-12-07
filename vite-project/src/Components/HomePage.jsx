import React from "react";
import "./HomePage.css";

function HomePage() {
    return (
        <div className="home-container">
            <h1 className="fade-in">Welcome to Trust Fund Winnipeg Foundation</h1>
            <p className="slide-in">
                Trust Fund Winnipeg Foundation is a platform dedicated to making a difference in the lives of those in need. 
                Every donation you make goes toward impactful causes that create real change.
            </p>
            <p className="slide-in">
                Click on "Donate" above to contribute and help us achieve our mission. Together, we can build a better world!
            </p>
            <div className="features-container fade-in">
                <h2>Why Choose Us?</h2>
                <ul>
                    <li>🌍 **Global Impact**: Supporting communities worldwide.</li>
                    <li>🤝 **Transparency**: Every dollar is accounted for.</li>
                    <li>💡 **Innovation**: Sustainable and creative solutions.</li>
                    <li>❤️ **Community Focus**: Empowering local initiatives.</li>
                </ul>
            </div>
            <div className="call-to-action bounce">
                <a href="/donate" className="donate-button">Donate Now</a>
            </div>
        </div>
    );
}

export default HomePage;
