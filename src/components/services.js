import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Navbar from './nav';
import hand from "../photos/others/hand-1-500x262.png";
import "../styles/services.css";
import priv from "../photos/others/private.jpg"
import anniversary from "../photos/others/anniversary.jpg";
import wedding from "../photos/others/wedding.webp"


export default function Services(){
    return(
        <div  className='services'>
            <Navbar/>
            <div className='services_intro row'>
                <div className='col-sm-6 left'>
                    <h1> <span>Catering</span> <br/> Services</h1>
                    <img src={hand}/>
                </div>
                <div className='col-sm-6 right'>
                    <div className="inner">
                    <p className='firstp'>Book our service now! <br/>(234) 701 0911  076</p>
                    </div>
                </div>

            </div>

            <div className='tab'>
                <h1>Services</h1>
                <h2>Homepage > Service</h2>
            </div>

            <p className="chef_headerP">Stock On Foods</p>
            <h1 className="chef_header">Featured Services</h1>

            <div className='row'>

                <div class="service_column">
                <div class="card">
                <img src={priv} alt="img" />
                <div class="container">
                    <h2>Private Party Theme</h2>
                    <p class="title"></p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labo...</p>
                </div>
                </div>
                </div>

                <div class="service_column">
                <div class="card">
                <img src={anniversary} alt="img" />
                <div class="container">
                    <h2>Anniversary Celebrations</h2>
                    <p class="title"></p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labo...</p>
                </div>
                </div>
                </div>

                <div class="service_column">
                <div class="card">
                <img src={wedding} alt="img" />
                <div class="container">
                    <h2>Wedding Catering Services</h2>
                    <p class="title"></p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labo...</p>
                </div>
                </div>
                </div>


            </div>

            <div className='reach_us_div row mt-5'>
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