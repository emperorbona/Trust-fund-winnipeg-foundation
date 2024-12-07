import React from "react";

function Footer() {
    const yearly = new Date()
    return (
        <footer>
            <p>CopyRight ⓒ {yearly.getFullYear()}</p>
        </footer>
    )
}

export default Footer;