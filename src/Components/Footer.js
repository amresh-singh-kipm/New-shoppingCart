import React from 'react'
import {ImAmazon} from 'react-icons/im'
import {CgMenuRound} from 'react-icons/cg'
import {VscAccount} from 'react-icons/vsc'
import {FcNews} from 'react-icons/fc'
import {FcGoogle} from 'react-icons/fc'
import {FaFacebookMessenger} from 'react-icons/fa'
import {BsTwitter} from 'react-icons/bs'
function Footer() {
    return (
        <div className='fuild-container footer'>
            <div className='container'>
                <div className='row'>
                    <div className='col-sm-12 col-md-6 col-lg-3'>
                    <div className='footer-details'>
                     <h1><ImAmazon/> <strong>Amazon</strong></h1>
                     <h5><strong>ADDRESS:</strong>28 White tower, Street Name New York City, USA</h5>
                    <h5><strong>TELEPHONE:</strong>+91 987 654 3210</h5>
                    <h5><strong>EMAIL:</strong>yourmain@gmail.com </h5>
                    </div>
                    </div>
                    <div className='col-sm-12 col-md-6 col-lg-3'>
                    <div className='footer-details'>
                     <h1><CgMenuRound/> <strong>Menu</strong></h1>
                    <h5>Home</h5>
                    <h5>About</h5>
                    <h5>Services</h5>
                    <h5>Testimonial</h5>
                    <h5>Blog</h5>
                    <h5>Contact</h5>
                    </div>
                    </div>
                    <div className='col-sm-12 col-md-6 col-lg-3'>
                    <div className='footer-details'>
                     <h1><VscAccount /> <strong>Account</strong></h1>
                    <h5>Account</h5>
                    <h5>Checkout</h5>
                    <h5>Login</h5>
                    <h5>Register</h5>
                    <h5>shopping</h5>
                    </div>
                    </div>
                     <div className='col-sm-12 col-md-6 col-lg-3'>
                     <div className='footer-details'>
                     <h1><FcNews/> <strong>News</strong></h1>
                    <h5>
                    Subscribe by our newsletter and get update protidin.</h5>
                    </div>
                    </div>
                </div>
                
            </div>
            <div className='footer-section'>
                <div className='row'>
                    <div className='col-sm-9 col-md-9 col-lg-9'>
                    <p>Copyright 2021 © All right reserved by
            <span> Amazon</span>
            </p>
                    </div>
                    <div className='col-sm-3 col-md-3 col-lg-3'>
                        <div className='row'>
                            <div className='col-3 col-sm-4 col-md-4 col-lg-4'>
                            <FcGoogle/>
                            </div>
                            <div className='col-3 col-sm-4 col-md-4 col-lg-4'>
                            <FaFacebookMessenger/>
                            </div>
                            <div className='col-3 col-sm-4 col-md-4 col-lg-4'>
                            <BsTwitter/>
                            </div>
                        </div>
                </div>
                </div>
            </div>
        </div>
    )
}

export default Footer