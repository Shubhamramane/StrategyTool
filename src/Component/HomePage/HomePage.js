import React, {useContext} from "react";
import Wavinghand from "../../icons/wavinghand.svg";
import Whatsapp from "../../icons/Whatsapp1.svg";
import Youtude from "../../icons/Youtube1.svg";
import Clubhouse from "../../icons/Clubhouse1.svg";
import Craigslist from "../../icons/Craigslist1.svg";
import Facebook from "../../icons/Facebook1.svg";
import GitHub from "../../icons/Github1.svg";
import Gmail from "../../icons/Gmail1.svg";
import Google from "../../icons/Google1.svg";
import Instagram from "../../icons/Instagram1.svg";
import Linkedin from "../../icons/Linkedin1.svg";
import Line from "../../icons/Line1.svg";
import Medium from "../../icons/Monogram1.svg";
import Messenger from "../../icons/Messenger1.svg";
import Pinterest from "../../icons/Pinterest1.svg";
import ProductHunt from "../../icons/Producthunt1.svg";
import QQ from "../../icons/QQ1.svg";
import Quora from "../../icons/Quora1.svg";
import Reddit from "../../icons/Reddit1.svg";
import Salesnavigator from "../../icons/Sale1.svg";
import Slack from "../../icons/Slack1.svg";
import SMS from "../../icons/sms1.svg";
import Snapchat from "../../icons/Snap1.svg";
import Telegram from "../../icons/Telegram1.svg";
import Tiktok from "../../icons/Tiktok1.svg";
import Tumblr from "../../icons/Tumblr1.svg";
import Twitter from "../../icons/Twitter1.svg";
import Wechat from "../../icons/Wechat1.svg";
import YellowPages from "../../icons/YellowPage1.svg";
import SearchbarHome from "../SearchBarHome/SearchBar";
import NavHome from "../Navbar/NavHome";
import {AuthTokenContext} from "../../App";
import Topbar from "../Topbar";
import "../HomePage/HomePage.css"
import Banner from "./Banner";
import EmpowerTeam from "./EmpowerTeam";
import WhoItWork from "./WhoItWork";
import Footer from './Footer';
import { useNavigate } from "react-router-dom";
// import { Twitter } from "@mui/icons-material";
<link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300&family=Roboto:wght@100&display=swap" rel="stylesheet"></link>
function FrontPage({setAuthToken}) {
const authToken = useContext(AuthTokenContext)
const navigate = useNavigate();
const SocialMedia = () =>{
  navigate('/socialmedia')
}
   
  return (
    <div className="Home_background">
    {/* {(authToken.length !== 0) ? <Topbar /> : <NavHome />} */}
    <NavHome setAuthToken={setAuthToken} />
    <h2 className="Landing-Page">
      <img src={Wavinghand} className="Wavinghand_space"></img>
      <b className="homepage_font padding-homepage">Hello, what are we creating today?</b>
    </h2>
    <p className="Landing-para homepage_font">
      Get started by selecting the idea type from the options below
    </p>
    <SearchbarHome />
    <div className="all_buttons container">
      <button className="btn-all homepage_font active">All</button>
      <button className="socialmedia-btn homepage_font" onClick={SocialMedia}>Social Media</button>
      <button className="socialmedia-btn homepage_font">Copywriting</button>
      <button className="socialmedia-btn homepage_font">SEO</button>
      <button className="socialmedia-btn homepage_font">E-Commerce</button>
      <button className="socialmedia-btn homepage_font">Product</button>
    </div>
    <div className="all-channels container">
      <div className="display-flex">
        <div className="display">
          <div className="icon">
            <img src={Linkedin} className="iconns"></img>
          </div>
          <div className="padd">
            <h6 className="channel_content_h6 homepage_font">LinkedIn</h6>
            <p className=" homepage_font">All the tips for increasing your network, productivity, and success of your business.</p>
          </div>
        </div>
        <div className="display">
          <div className="icon">
            <img src={Whatsapp} style={{height:"50px"}}></img>
          </div>
          <div className="padd">
            <h6 className="channel_content_h6 homepage_font">Whatsapp</h6>
            <p className=" homepage_font">Strategies to connect with your clients and customer more effectively.</p>
          </div>
        </div>
        <div className="display">
          <div className="icon">
            <img src={Youtude} className="iconns"></img>
          </div>
          <div className="padd">
            <h6 className="channel_content_h6 homepage_font">Youtube</h6>
            <p className=" homepage_font">Tips and tricks on how to boost your views, engagement, and more.</p>
          </div>
        </div>
      </div>
      <div className="display-flex">
        <div className="display">
          <div className="icon">
            <img src={Clubhouse} className="iconns"></img>
          </div>
          <div className="padd">
            <h6 className="channel_content_h6 homepage_font">Clubhouse</h6>
            <p className=" homepage_font">Ideas and hacks to optimize, refine, connect better with investors and more.</p>
          </div>
        </div>
        <div className="display">
          <div className="icon">
            <img src={Craigslist} className="iconns"></img>
          </div>
          <div className="padd">
            <h6 className="channel_content_h6 homepage_font">Craigslist</h6>
            <p className=" homepage_font">Hacks for improving your advertising and marketing.</p>
          </div>
        </div>
        <div className="display">
          <div className="icon">
            <img src={Facebook} className="iconns"></img>
          </div>
          <div className="padd">
            <h6 className="channel_content_h6 homepage_font">Facebook</h6>
            <p className=" homepage_font">Tips and tricks for creating your online presence, increasing your engagement levels.</p>
          </div>
        </div>
      </div>
      <div className="display-flex">
        <div className="display">
          <div className="icon">
            <img src={GitHub} className="iconns"></img>
          </div>
          <div className="padd">
            <h6 className="channel_content_h6 homepage_font">GitHub</h6>
            <p className=" homepage_font">Strategies to Optimize, update, and design better software.</p>
          </div>
        </div>
        <div className="display">
          <div className="icon">
            <img src={Gmail}  className="gmail"></img>
          </div>
          <div className="padd">
            <h6 className="channel_content_h6 homepage_font">Gmail</h6>
            <p className=" homepage_font">Use Gmail professionally with these tips.</p>
          </div>
        </div>
        <div className="display">
          <div className="icon">
            <img src={Google} className="iconns"></img>
          </div>
          <div className="padd">
            <h6 className="channel_content_h6 homepage_font">Google</h6>
            <p className=" homepage_font">The best how-tos and tricks for google.</p>
          </div>
        </div>
      </div>
      <div className="display-flex">
        <div className="display">
          <div className="icon">
            <img src={Line} className="iconns"></img>
          </div>
          <div className="padd">
            <h6 className="channel_content_h6 homepage_font">Line</h6>
            <p className=" homepage_font">Better ways to add and connect more effectively.</p>
          </div>
        </div>
        <div className="display">
          <div className="icon">
            <img src={Instagram} className="iconns"></img>
          </div>
          <div className="padd">
            <h6 className="channel_content_h6 homepage_font">Instagram</h6>
            <p className=" homepage_font">Optimize your account and get better engagement.</p>
          </div>
        </div>
        <div className="display">
          <div className="icon">
            <img src={Medium} className="iconns"></img>
          </div>
          <div className="padd">
            <h6 className="channel_content_h6 homepage_font">Medium</h6>
            <p className=" homepage_font">All the how-tos about writing, reading, and connecting.</p>
          </div>
        </div>
      </div>
      <div className="display-flex">
        <div className="display">
          <div className="icon">
            <img src={Messenger} style={{height:"50px"}}></img>
          </div>
          <div className="padd">
            <h6 className="channel_content_h6 homepage_font">Messenger</h6>
            <p className=" homepage_font">For better connecting and using tools and features.</p>
          </div>
        </div>
        <div className="display">
          <div className="icon">
            <img src={Pinterest} className="iconns"></img>
          </div>
          <div className="padd">
            <h6 className="channel_content_h6 homepage_font">Pinterest</h6>
            <p className=" homepage_font">The best tips on boards, pinning and analyzing.</p>
          </div>
        </div>
        <div className="display">
          <div className="icon">
            <img src={ProductHunt} className="iconns"></img>
          </div>
          <div className="padd">
            <h6 className="channel_content_h6 homepage_font">ProductHunt</h6>
            <p className=" homepage_font">A complete guide for launching your product or service efficiently.</p>
          </div>
        </div>
      </div>
      <div className="display-flex">
        <div className="display">
          <div className="icon">
            <img src={QQ} className="qq"></img>
          </div>
          <div className="padd">
            <h6 className="channel_content_h6 homepage_font">QQ</h6>
            <p className=" homepage_font">All the how-tos on Connecting, monitoring, engagement.</p>
          </div>
        </div>
        <div className="display">
          <div className="icon">
            <img src={Quora} className="iconns"></img>
          </div>
          <div className="padd">
            <h6 className="channel_content_h6 homepage_font">Quora</h6>
            <p className=" homepage_font">Make your site popular, Improve ranking and traffic and more.</p>
          </div>
        </div>
        <div className="display">
          <div className="icon">
            <img src={Reddit} className="iconns"></img>
          </div>
          <div className="padd">
            <h6 className="channel_content_h6 homepage_font">Reddit</h6>
            <p className=" homepage_font">Learn all the strategies and tricks about the Reddit world.</p>
          </div>
        </div>
      </div>
      <div className="display-flex">
        <div className="display">
          <div className="icon">
            <img src={Salesnavigator} className="iconns"></img>
          </div>
          <div className="padd">
            <h6 className="channel_content_h6 homepage_font">Salesnavigator</h6>
            <p className=" homepage_font">Become a sales navigator pro and learn extended networking and more.</p>
          </div>
        </div>
        <div className="display">
          <div className="icon">
            <img src={Slack} className="iconns"></img>
          </div>
          <div className="padd">
            <h6 className="channel_content_h6 homepage_font">Slack</h6>
            <p className=" homepage_font">Learn about the best business Slack tools.</p>
          </div>
        </div>
        <div className="display">
          <div className="icon">
            <img src={SMS} className="iconns"></img>
          </div>
          <div className="padd">
            <h6 className="channel_content_h6 homepage_font">SMS</h6>
            <p className=" homepage_font">Prepare everything from SMS marketing to personalized messaging.</p>
          </div>
        </div>
      </div>
      <div className="display-flex">
        <div className="display">
          <div className="icon">
            <img src={Snapchat} className="iconns"></img>
          </div>
          <div className="padd">
            <h6 className="channel_content_h6 homepage_font">Snapchat</h6>
            <p className=" homepage_font">Tips on ads, custom filters, lenses, geotagging and more.</p>
          </div>
        </div>
        <div className="display">
          <div className="icon">
            <img src={Telegram} className="iconns"></img>
          </div>
          <div className="padd">
            <h6 className="channel_content_h6 homepage_font">Telegram</h6>
            <p className=" homepage_font">A complete guide: Telegram channels, creating groups, etc.</p>
          </div>
        </div>
        <div className="display">
          <div className="icon">
            <img src={Tiktok} className="tiktok"></img>
          </div>
          <div className="padd">
            <h6 className="channel_content_h6 homepage_font">Tiktok</h6>
            <p className=" homepage_font">All the how-tos about creative content, promoting, and optimizing your brand.</p>
          </div>
        </div>
      </div>
      <div className="display-flex">
        <div className="display">
          <div className="icon">
            <img src={Tumblr} className="iconns"></img>
          </div>
          <div className="padd">
            <h6 className="channel_content_h6 homepage_font">Tumblr</h6>
            <p className=" homepage_font">Tips on targeting your audience, creating visual content, driving leads, and more.</p>
          </div>
        </div>
        <div className="display">
          <div className="icon">
            <img src={Twitter} className="iconns"></img>
          </div>
          <div className="padd">
            <h6 className="channel_content_h6 homepage_font">Twitter</h6>
            <p className=" homepage_font">For Creating useful and interesting tweets for your brand and business.</p>
          </div>
        </div>
        <div className="display">
          <div className="icon">
            <img src={Wechat} className="wechat"></img>
          </div>
          <div className="padd">
            <h6 className="channel_content_h6 homepage_font">Wechat</h6>
            <p className=" homepage_font">an informative guide on subscription, service accounts, and more.</p>
          </div>
        </div>
      </div>
      <div className="display-flex">
        <div className="displayy">
          <div className="iconnss">
            <img src={YellowPages} className="iconns"></img>
          </div>
          <div className="padd">
            <h6 className="channel_content_h6 homepage_font">YellowPages</h6>
            <p className=" homepage_font">Ideas and hacks for business database by name, business or location, and more.</p>
          </div>
        </div>
      </div>
    </div>
    <Banner/>
    <EmpowerTeam/>
    <WhoItWork/>
    <Footer/>
  </div>
  );
}
export default FrontPage;