import React from "react";
import "./footer.css"

const Footer =()=>{
    return(
        <div className="footer">
            <div className="footer-item-1">
            <h1>BE THE FIRST TO KNOW</h1>
            <p>Sign up for updates from metta muse.</p>
            <input type="text" placeholder="Enter your e-mail" />
<button>SUBSCRIBE</button>

            </div>
            <div className="footer-item-2">
                <h1>CONTACT US</h1>
                <p>+44 221 133 5360</p>
                <h1>customercare@mettamuse.com</h1>
                <h1>Currency</h1>
                <h4>*USD</h4>
                <p>Transaction will be compiled in Euros and a currency refernce is avilable on hover</p>


            </div>
            <hr></hr>
            <div className="footer-item-3">
                <h1>metta muse</h1>
                <p>About Us</p>
                <p>Stories</p>
                <p>Artisans</p>
                <p>Boutiques</p>
                <p>Contact Us</p>
                <p>EU Compliances Docs</p>
            </div>

            <div className="footer-item-4">
                <h1>QUCIK LINKS</h1>
                <p>Orders & Shipping</p>
                <p>Join/Login as a Seller</p>
                <p>Payment & Pricing</p>
                <p>Return & Refunds</p>
                <p>FAQs</p>
                <p>Privacy Policy</p>
                <p>Terms & Conditions</p>
            </div>
            <div className="footer-item-5">
                <h1>FOLLOW US</h1>
                <img src="../images/insta.png" ></img>
                <img src="../images/a.png"></img>
                <h6>metta muse ACCEPTS</h6>
                <div className="card">
                <img src="../images/Gpay.png"></img>
                <img src="../images/master.png"></img>
                <img src="../images/card1.png"></img>
                <img src="../images/card2.png"></img>
                <img src="../images/card3.png"></img>
                <img src="../images/card4.png"></img>

                </div>
        </div>
        <div>Copyright @ 2023 mettamuse. All rights are reserved</div>
        </div>
    )
}
export default Footer;