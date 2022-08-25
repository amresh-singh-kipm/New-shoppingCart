import React from "react";
import { Carousel } from "react-bootstrap";
import {TbTruckDelivery} from 'react-icons/tb'
import {TbCurrencyRupee} from 'react-icons/tb'
import {VscWorkspaceTrusted} from 'react-icons/vsc'

function SliderSection() {
  return (
    <>
      <div className="slider-section">
        {/* <div className="slider-image">
          <img src="/assets/images/slider-bg.jpg" width="100%"  />
        </div> */}
        <div className="slider-content">
          <div className="container">
            <div className="row">
              <div className="col-md-6 col-lg-6">
                <div className="detail-box">
                  <Carousel>
                    <Carousel.Item interval={1500}>
                      <h1 className="slider-item">
                        <span>Sale 20% Off</span>
                        <br />
                        On Everything
                      </h1>
                      <p>
                        Now you can make these all your by just paying little.So
                        hurry up
                      </p>
                    </Carousel.Item>
                    <Carousel.Item interval={1500}>
                      <h1 className="slider-item">
                        <span>Sale 20% Off</span>
                        <br />
                        On Everything
                      </h1>
                      <p>
                        Shoes are also available on our site.So check out the
                        latest collection
                      </p>
                    </Carousel.Item>
                    <Carousel.Item interval={1500}>
                      <h1 className="slider-item">
                        <span>Sale 20% Off</span>
                        <br />
                        On Everything
                      </h1>
                      <p>Grabs all these offer before they are end</p>
                    </Carousel.Item>
                  </Carousel>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <h3 className="description">Why Shop With Us</h3>
        <div className="row">
          <div className="col-sm-12 col-md-6 col-lg-4">
            <div className="card card-item">
              <div className="image-box">
              <TbTruckDelivery style={{width:"40px",height:"50px"}}/>
              </div>
              <h3>Fast Delivery</h3>
              <p>We deliver product on same day when ordered</p>
            </div>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-4">
            <div className="card card-item">
              <div className="image-box">
              <TbCurrencyRupee style={{width:"40px",height:"50px"}}/>
              </div>
              <h3>Cash On Delivery</h3>
              <p>Cash on delivery is also available on our site</p>
            </div>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-4">
            <div className="card card-item">
              <div className="image-box">
              <VscWorkspaceTrusted style={{width:"40px",height:"50px"}} />
              </div>
              <h3>Quality</h3>
              <p>We provide best quality</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SliderSection;
