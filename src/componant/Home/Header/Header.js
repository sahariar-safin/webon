import React from 'react';
import './Header.scss'
import img1 from '../../../images/h1-rev-img1.png'
import img2 from '../../../images/h1-rev-img-2.png'

const Header = () => {
    return (
        <main className='firstSection'>
            <div className="container intro">
                <div className="row align-items-center justify-content-around">
                    <div className="col-md-4">
                        <p>The essentials</p>
                        <h1>A modern app for brands that want more.</h1>
                        <button>View more</button>
                    </div>
                    <div className="col-md-8 d-flex flex-row justify-content-start">
                        <img className="img-fluid" src={img1} alt="" />
                        <img className="img-fluid" src={img2} alt="" />
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Header;