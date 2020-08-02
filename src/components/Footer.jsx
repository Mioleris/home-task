import React from 'react';

function Footer() {
    return (
        <div className="footer">
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <div className="footer-logo">
                            <span><span>PIXEL</span>ART</span>
                            <p>A user interface is like a joke. If you have to explain it, it’s not that good</p>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="footer-details">
                            <h5>TOPICS</h5>
                            <ul>
                                <li><a href="#/">· First impressions in web design</a></li>
                                <li><a href="#/">· Advanced SEO solutions</a></li>
                                <li><a href="#/">· UX design 101</a></li>
                                <li><a href="#/">· What’s the secret behind minimal designs</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="footer-details">
                            <h5>CONTACTS</h5>
                            <table>
                                <tbody>
                                    <tr>
                                        <td>Street:</td>
                                        <td>4411  Bicetown Road</td>
                                    </tr>
                                    <tr>
                                        <td>City:</td>
                                        <td>New York</td>
                                    </tr>
                                    <tr>
                                        <td>State:</td>
                                        <td>NY</td>
                                    </tr>
                                    <tr>
                                        <td>Zip:</td>
                                        <td>10022</td>
                                    </tr>
                                    <tr>
                                        <td>Phone:</td>
                                        <td>917-369-8748</td>
                                    </tr>
                                    <tr>
                                        <td>Email:</td>
                                        <td>hello@pixelart.com</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;
