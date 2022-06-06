
import React, { Component } from 'react'
import {Link} from "react-router-dom";

class Footer extends Component {
    render(){
        return (
            
    <div>

        <footer class="footer spad">
        <div class="container">
            <div class="row">
                <div class="col-lg-3 col-md-6 col-sm-6">
                    <div class="footer__about">
                        <div class="footer__about__logo">
                            <Link to="/">
                                <img src="img/logo.png" alt="" />
                            </Link>
                        </div>
                        <ul>
                            <li>Address: 60-49 Road 11378 New York</li>
                            <li>Phone: +65 11.188.888</li>
                            <li>Email: 
                                <Link to="https://preview.colorlib.com/cdn-cgi/l/email-protection" class="__cf_email__" data-cfemail="8ee6ebe2e2e1ceede1e2e1fce2e7eca0ede1e3">[email&#160;protected] </Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6 col-sm-6 offset-lg-1">
                    <div class="footer__widget">
                        <h6>Useful Links</h6>
                        <ul>
                            <li>
                                <Link to="#">About Us</Link>
                            </li>
                            <li>
                                <Link to="#">About Our Shop</Link>
                            </li>
                            <li>
                                <Link to="#">Secure Shopping</Link>
                            </li>
                            <li>
                                <Link to="#">Delivery infomation</Link>
                            </li>
                            <li>
                                <Link to="#">Privacy Policy</Link>
                            </li>
                            <li>
                                <Link to="#">Our Sitemap</Link>
                            </li>
                        </ul>
                        <ul>
                            <li>
                                <Link to="#">Who We Are</Link>
                            </li>
                            <li>
                                <Link to="#">Our Services</Link>
                            </li>
                            <li>
                                <Link to="#">Projects</Link>
                            </li>
                            <li>
                                <Link to="/contact">Contact</Link>
                            </li>
                            <li>
                                <Link to="#">Innovation</Link>
                            </li>
                            <li>
                                <Link to="#">Testimonials</Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="col-lg-4 col-md-12">
                    <div class="footer__widget">
                        <h6>Join Our Newsletter Now</h6>
                        <p>Get E-mail updates about our latest shop and special offers.</p>
                        <form action="#">
                            <input type="text" placeholder="Enter your mail" />
                            <button type="submit" class="site-btn">Subscribe</button>
                        </form>
                        <div class="footer__widget__social">
                            <Link to="#">
                                <i class="fa fa-facebook"></i>
                            </Link>
                            <Link to="#">
                                <i class="fa fa-instagram"></i>
                            </Link>
                            <Link to="#">
                                <i class="fa fa-twitter"></i>
                            </Link>
                            <Link to="#">
                                <i class="fa fa-pinterest"></i>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-lg-12">
                    <div class="footer__copyright">
                        <div class="footer__copyright__text">
                            <p>
                                Copyright &copy; All rights reserved | This template is made with 
                                <i class="fa fa-heart" aria-hidden="true"></i> by 
                                <Link to="https://colorlib.com/" target="_blank">Colorlib</Link>
                            </p>
                        </div>
                        <div class="footer__copyright__payment">
                            <img src="img/payment-item.png" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </footer>

    </div>

        )
    }
}

export default Footer;
