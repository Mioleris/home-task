import React from 'react';

function Banner() {
    return (
        <div className="banner">
            <div className="container">
                <div className="row">
                    <div className="col-md-12 text-center">
                        <h1 className="main-title">PixelArt Agency</h1>
                        <h3 className="secondary-title">We are creative design and development professionals</h3>
                        <div className="banner-actions">
                            <button className="btn white-btn">Lets talk</button>
                            <button className="btn transparent-btn">About us</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Banner;
