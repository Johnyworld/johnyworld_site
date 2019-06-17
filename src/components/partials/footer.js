import React, { Component } from 'react';
import './footer.css';
import footerProfile from '../images/footer-profile.png'

class Footer extends Component {
    render() {
        return (
            <footer>
                <div className="l-wrapper-wide">
                    <div className="footer-inner">
                        <img className="profile-image" src={footerProfile} alt="profileimage" />
                        <div className="name-wrap">
                            <p className="f-subhead">김재환</p>
                            <p className="f-normal c-blue-bright">Johny Kim</p>
                            <div className="devide"></div>
                        </div>
                        <div className="info-wrap">
                            <p className="f-normal">대한민국 서울 거주</p>
                            <p className="f-normal">johnyworld@naver.com</p>
                        </div>
                        <p className="copyright">Copyright 2015. Jaehwan-Kim All pictures cannot be copied without permission.</p>
                    </div>              
                </div>
            </footer>
        )
    }
}

export default Footer;