import React from 'react';
import './Doctors.css'
import { Button } from 'react-bootstrap'

const Doctors = () => {



    return (
        <div className="container">
            <div>
                <h1 className="p-5 text-primary">WELL EXPERIENCED DOCTORS</h1>
                <div className="row">
                    <div className="col-md-6 col-lg-3 col-sm-12 doctor-cart">
                        <div>
                            <img className="doctor-img" src="https://i.ibb.co/V2dm3Rg/pexels-pavel-danilyuk-5998474.jpg" alt="" />
                        </div>
                        <div>
                            <h3 className="card-title">Dr. Sofia Lorange</h3>
                            <h6>Dental Hygienist </h6>
                            <Button variant="success fw-bold my-1 p-2 text-white">Dr's Info</Button>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-3 col-sm-12 doctor-cart">
                        <div>
                            <img className="doctor-img" src="https://i.ibb.co/vj56Lm4/pexels-tima-miroshnichenko-6234600-1.jpg" alt="" />
                        </div>
                        <div>
                            <h3 className="card-title">Dr. Ruselo</h3>
                            <h6>Orthopedic Surgeon </h6>
                            <Button variant="success fw-bold my-1 p-2 text-white">Dr's Info</Button>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-3 col-sm-12 doctor-cart">
                        <div>
                            <img className="doctor-img" src="https://i.ibb.co/LtbQzWY/pexels-klaus-nielsen-6303556.jpg" alt="" />
                        </div>
                        <div>
                            <h3 className="card-title">Dr. Robert Josef</h3>
                            <h6>Health Care</h6>
                            <Button variant="success fw-bold my-1 p-2 text-white">Dr's Info</Button>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-3 col-sm-12 doctor-cart">
                        <div>
                            <img className="doctor-img" src="https://i.ibb.co/pPPtQBN/pexels-anthony-shkraba-6749777.jpg" alt="" />
                        </div>
                        <div>
                            <h3 className="card-title">Dr. Malisa Orned</h3>
                            <h6>Patient Services Manager</h6>
                            <Button variant="success fw-bold my-1 p-2 text-white">Dr's Info</Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Doctors; <div className="row">
    <div className></div></div>