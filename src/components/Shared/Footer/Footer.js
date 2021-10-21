import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagramSquare, faFacebookSquare, faTwitterSquare, faYoutube, faCreativeCommonsRemix } from '@fortawesome/free-brands-svg-icons';
import React from 'react';
import './Footer.css'
const Footer = () => {
    return (
        <div >
            <div className="footer-container text-center mt-5 py-5">
                <h2>Alphamark</h2> <br />
                <div className="d-flex align-items-center justify-content-center">
                    <div className="me-5 text-end">
                        <p>Mawna Chawrasta, Gazipur, BD <br /> 1740 Kewya</p>
                    </div>
                    <div className="text-start">
                        <p>Phone: 88 998 009 887 <br /> Mail: jahirul4694@gmail.com</p>
                    </div>
                </div>

                <div>
                    <a className="social-icon" href="https://www.facebook.com/iamjahirulislam" target="_blank"><i className="fab fa-facebook-square fa-3x m-2"></i></a>
                    <a className="social-icon" href="https://twitter.com/iamjohirul" target="_blank"><i className="fab fa-twitter-square fa-3x m-2"></i></a>
                    <a className="social-icon" href="https://www.instagram.com/iamjahirulislam/" target="_blank"><i className="fab fa-instagram-square fa-3x m-2"></i></a>
                    <a className="social-icon" href="https://www.linkedin.com/in/jahirul-islam-9789091b3/" target="_blank"><i className="fab fa-linkedin fa-3x m-2"></i></a>
                </div>
            </div>
            <div className="text-center my-3">
                <p> &#169; 2021 Copyright:Alpha company</p>
            </div>
        </div>
    );
};


export default Footer;