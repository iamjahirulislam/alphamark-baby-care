import './Banner.css'
import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Banner = () => {
    return (
        <div>
            <div className="test-section ">
                <br />
                <h2 className="banner-title ">Alphamark Baby Care</h2>
                <p className="banner-details">Here all the best services available for our beloved customers<br />
                    and we are provide best services all the patients</p>

                <Link to='/doctors'>
                    <Button variant="info fw-bold fs-5 my-3 p-3 text-white">Doctors Info</Button>
                </Link>
            </div>
        </div>
    );
};

export default Banner;