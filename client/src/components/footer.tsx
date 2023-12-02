import React from 'react';
import './footer.css'

const Footer = () => {
    return (
        <div className="main-footer">
            <div className="container">
                <div className="row">
                    {/* column1 */}
                    <div className="col">
                        <h2 className="title"> Courses</h2>
                        <ul className="list-unstyled">
                            <li> Budgeting</li>
                            <li> Build Your Credit Score</li>
                            <li> Learn to Invest</li>
                            <h2 className="footer-name"> PLUTO E-LEARNING</h2>
                        </ul>
                    </div>
                    {/* column2 */}
                    <div className="col"> 
                        <h2 className="title"> About Us </h2>
                        <ul className="list-unstyled">
                            <li> Meet the Team</li>
                            <li> About Enactus UTM</li>
                            <li> About Uoft</li>
                    <p className="inc"> ©️ Copyright 2023 | PLUTO @ Enactus UTM </p>
                        </ul>
                    </div>
                    {/* column3 */}
                    <div className="col"> 
                        <h2 className="title"> Contact Us </h2>
                        <ul className="list-unstyled">
                            <li> 999-999-9999</li>
                            <li> Contact Us</li>
                            <li> Feedback Report</li>
                        </ul>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Footer;