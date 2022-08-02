import React from "react";
import "./FrontPageBanner.css";
import { Row, Col } from "react-bootstrap";
import LandingPage from "../../LandingPageIcon/computersvg.svg";
import Laptop from '../../LandingPageIcon/Laptopp.png';
import SocialMedia1 from '../../LandingPageIcon/SocialMedia1.svg';
import SocialMedia2 from '../../LandingPageIcon/SocialMedia2.svg';
import SocialMedia3 from '../../LandingPageIcon/SocialMedia3.svg';
import Boy from '../../LandingPageIcon/boy1.png';
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@100&display=swap" rel="stylesheet"></link>
const Banner = () => {
  return (
    <div>
      <div style={{backgroundColor:"white"}}>
      {/* <div className="container"> */}
      <Row className="banner_padding">
        <Col className="banner" lg={5}>
          <h4 className="homepage_font home_banner_title"><b>We help brands and startups grow organically</b></h4>
          <p className="homepage_font home_banner_para">
            To stand out on social, you need the right strategies and tools.
            With STRATEGY TOOL, you’ve got everything you need to build your
            following and grow your brand across all digital channels. We have
            the perfect Growth Hacks for your business which you can implement
            on your OWN
          </p>
          <button className="call homepage_font"><b>Book a Call</b></button>
          <button className="click homepage_font"><b>Click</b></button>
        </Col>
        <Col lg={5}>
          <img src={Boy} className="boy_img"></img>
        </Col>
      </Row>
      {/* </div> */}
      </div>

      <div>
        <div className="banner_div">
            <Row>
                <Col lg={6} className="order-md-1">
                <img src={LandingPage} className="computer_img"></img>
                </Col>
                <Col lg={6} className="order-md-2">
                <div className="text_on_img">
                    <h4 className="homepage_font simplest_way">The Simplest Way to Market your Business on your OWN</h4>
                    <button className="try_strategy homepage_font">
                    <b>Try Strategy Tool Today</b>
                    </button>
                </div>
                </Col>
            </Row>
        
        
        </div>
      </div>
      <div className="apply">
        <div className="socialmedia_width">
          <h3 className="apply_social_media homepage_font">
            Strategy Tool is the First and Only tool that allows everyone and
            anyone to apply
            <br /> the social media techniques in their day to day business.
            
          </h3>
          <h1 className="apply_directly homepage_font">
            <b>Professional, Proven and Applied Techniques for you to implement
            directly..</b>
          </h1>
          <Row>
            <Col>
              <p className="SocialMediaIcon_center homepage_font">
                <img src={SocialMedia1} className='SocialMediaIcon'></img><br/>
                No longer will you be forced to pay outrageous fees, and wait
                weeks to months for so called professional marketers and
                strategist to create and implement ideas for you.
              </p>
            </Col>
            <Col>
            <p className="SocialMediaIcon_center homepage_font">
              <img src={SocialMedia2} className='SocialMediaIcon'></img><br/>
                Learn from Scratch. No Prior knowledge required. You’ll be able
                to create your own professional ideas with our Growth Hack
                Techniques.
              </p>
            </Col>
            <Col>
            <p className="SocialMediaIcon_center1 homepage_font">
              <img src={SocialMedia3} className='SocialMediaIcon'></img><br/>
                And not only that, but you’ll be able to implement various
                campaigns on your OWN in minutes… not weeks. And the end-result
                can be even better than what the professionals deliver!
              </p>
            </Col>
          </Row>
        </div>
      </div>
      <div className="container">
        <Row>
          <Col lg={6}>
            <h2 className="learn homepage_font">
              Learn what works <br />
              (and what doesn’t)
            </h2>
            <p className="learn_para homepage_font">
            It’s your business and you cannot afford to experiment with its
            growth. With Strategy Tool, learn all the tricks and trade on how to
            achieve success in the Digital and Social World.
            <ul className="learn_ul">
              <li className="homepage_font">Growth Hacks for all Social Media Platforms</li>
              <li className="homepage_font"> Proven and Successful Strategies</li>
              <li className="homepage_font">Performance Tracking</li>
            </ul>
          </p>
          </Col>
          <Col lg={6}>
          <img src={Laptop} className="laptop"></img>
          </Col>
        </Row>
      </div>
    </div>
  );
};
export default Banner;