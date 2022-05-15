import React from 'react';

const Footer = () => {
    return (
        <footer className="footer">
            <a href="#" className="logo">
                <img alt="" src="images\logo1.png"/>
            </a>
            <div className="footer-bar">
                <div className="allright">
                    <p> All rights reserved. Designed by <a href="#"> CizThemes</a></p>
                </div>
                <div className="social-footer">
                    <a href="#" className="facebook">
                        <i className="fa fa-facebook"></i>
                    </a>
                    <a href="#" className="twitter">
                        <i className="fa fa-twitter"></i>
                    </a>
                    <a href="#" className="google">
                        <i className="fa fa-google-plus"></i>
                    </a>
                    <a href="#" className="pinterest">
                        <i className="fa fa-pinterest"></i>
                    </a>
                    <a href="#" className="youtube">
                        <i className="fa fa-youtube"></i>
                    </a>
                </div>
                <div className="clearfix"></div>
            </div>
        </footer>
    );
};

export default Footer;