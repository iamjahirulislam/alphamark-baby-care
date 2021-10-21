import React, { useEffect, useState } from 'react';

const About = () => {
    const [about, setAbout] = useState([]);
    useEffect(() => {
        fetch('aboutdb.json')
            .then(res => res.json())
            .then(data => setAbout(data))
    }, [])
    return (
        <div className="container">
            <h2 className="pt-5 fs-9 fw-bold text-success">OVERVIEW</h2>
            <p>Alphamark Baby Care is one of the first agencies in Qatar to provide services not only for homes, but also for schools, companies, construction sites, factories, institutions and other establishments.The company seeks excellence to provide health services whether long-term or short-term through specialized teams who are carefully selected and licensed here in Qatar from the Ministry of Health equipped with all the necessary tools to carry out their duty for the customer’s satisfaction.The company aspires to build a good reputation in the healthcare industry due to the outstanding services they have given to the clients and the efficiency of its crew. It also seeks continuation in the development of future plans and to maintain the quality of services and be one of the leading healthcare companies in the country.</p>
            <h5 className="pt-5 fs-7 fw-bold text-success">WE ARE HERE FOR YOU</h5>
            <div className="row">
                {
                    about.map(ab => (
                        <div key={ab._id} className="col-md-6 col-lg-4 col-sm-12">
                            <div className="cart p-2 m-3">
                                <div>
                                    <img className="w-75" src={ab.picture} alt="" />
                                </div>
                                <div>
                                    <h3 className="card-title">{ab.name}</h3>
                                    <p>{ab.description}</p>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default About;