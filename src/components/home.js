import React from 'react';
import ReactDOM from 'react-dom';
import "../styles/home.css";
import Navbar from './nav';
import hand from "../photos/others/hand-1-500x262.png";
import chef from "../photos/others/chef.png";
import PopularDishes from './populardishes';
import Chef from './chef';
import fork from "../photos/others/fork.png";
import user from "../photos/others/user.png";
import locations from "../photos/others/location.png";
import area from "../photos/others/area.png";
import Footer from './footer';




export default function Home(){
    return(
        <div className='container-fluid'>
            <Navbar/>
            <div className='intro row'>
                <div className='col-sm-6 left'>
                    <h1> <span>Catering</span> <br/> Services</h1>
                    <img src={hand}/>
                </div>
                <div className='col-sm-6 right'>
                    <img src={chef}/>
                    <div className="inner">
                    <p className='firstp'>Book our service now! <br/>(234) 701 0911  076</p>
                    <h1>Special menu for</h1>
                    <p className='secondp'>Praesent vestibulum aenean nonummy hendrerit mauris. Cum sociis natoque et magnis dis parturient montes asceturridiculus mus. Nulla dui. Fusce feugiat</p>
                    <a href=''>View Menu</a>
                    </div>
                </div>

            </div>

            <div className='offers row'>
                <div className='col-sm-4 offer1'>

                    <div>
                    <i className='fa fa-coffee'></i>
                    <h1>Good Rest</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
                    </div>
                    <div>
                    <i className='fa fa-bookmark-o'></i>
                    <h1>Best Cusin</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
                    </div>

                </div>

                <div className='col-sm-4 services'>
                    <div className='div1'>
                        <div className='div2'>
                            <p className='p1'>Best One</p>
                            <h1>Our Services</h1>
                            <hr/>
                            <p className='p2'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy.</p>
                        </div>
                    </div>

                </div>

                <div className='col-sm-4 offer2'>
                <div>
                    <i className='fa fa-clock-o'></i>
                    <h1>24/7</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
                    </div>
                    <div>
                    <i className='fa fa-cutlery'></i>
                    <h1>Special Event Catring</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
                    </div>

                </div>

            </div>

            <PopularDishes/>
            <p className="chef_headerP">This is</p>
            <h1 className="chef_header">Our Chef</h1>
            <Chef/>

            <div className='row achievements'>
                <div className='col-sm-3'>
                    <div>
                        <img src={fork}/>
                    </div>
                        <h2>Events Served</h2>
                        <h1>20</h1>
                </div>
                <div className='col-sm-3'>
                    <div>
                        <img src={user}/>
                    </div>
                        <h2>Qualified Staff</h2>
                        <h1>26</h1>
                </div>
                <div className='col-sm-3'>
                    <div>
                        <img src={locations}/>
                    </div>
                        <h2>Our Locations</h2>
                        <h1>15</h1>
                </div>
                <div className='col-sm-3'>
                    <div>
                        <img src={area}/>
                    </div>
                        <h2>Area Serving</h2>
                        <h1>40</h1>
                </div>

            </div>
            
            <div className='reach_us_div row'>
            <div className='reach_us'>
                <h1>Reach Us</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do</p>
                <input type='text' placeholder='Chat On Whatsap'/>
                <button className='btn btn-danger'>GO</button>

            </div>
            </div>
        </div>
    )
}