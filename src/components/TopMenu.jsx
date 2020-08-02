import React, { useState } from 'react';

function TopMenu() {
    const [ showMenu, setShowMenuState ] = useState(false);

    function handleOnSubmenuClick(e) {
        e.preventDefault();
        let listItem = e.target.parentElement;

        if (listItem.classList.contains('active')) {
            listItem.classList.remove('active');
        } else {
            listItem.classList.add('active');
        }
    }

    return (
        <div className="top-menu">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="text-logo">
                            <span>
                                <span>PIXEL</span>ART
                            </span>
                        </div>
                        <div onClick={ () => setShowMenuState(!showMenu)} className="burger">
                            <div></div>
                            <div></div>
                            <div></div>
                        </div>
                        <ul className={`top-menu-nav ${showMenu ? "open" : ""}`}>
                            <li>
                                <button className="btn purple-btn get-in-touch-btn">Get in touch</button>
                            </li>
                            <li className="nav-item">
                                <a href="#/">About us</a>
                            </li>
                            <li className="nav-item has-submenu">
                                <a onClick={ handleOnSubmenuClick } href="#/">Portfolio</a>
                                <ul className="top-menu-sub-nav">
                                    <li className="nav-item">
                                        <a href="#/">Creative web design</a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="#/">Mobile applications</a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="#/">Print design</a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="#/">Branding solutions</a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="#/">Miscellaneous</a>
                                    </li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <a href="#/">Contact us</a>
                            </li>
                            <li className="nav-item has-submenu">
                                <a onClick={ handleOnSubmenuClick } href="#/">Gallery</a>
                                <ul className="top-menu-sub-nav">
                                    <li className="nav-item">
                                        <a href="#/">Art works</a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="#/">Latest designs</a>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                        <div className="clearfloat"></div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TopMenu;
