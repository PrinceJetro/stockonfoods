import React, { useEffect, useState } from 'react';
import { ReactDOM } from "react";
import "../styles/navbar.css";
import { Outlet, Link } from "react-router-dom";
import logo from "../photos/others/logo.png"



// <Link to={"/men"}></Link>
// <Link to={"/women"}><a class="dropdown-item" href="#">Women</a></Link>

export default function Navbar(){
    return(
      <nav class="navbar navbar-expand-lg fixed-top  navbar-light">
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <Link class="navbar-brand" style={{color:"#04623A"}}  to={"/"}> <img src={logo}/>  </Link>

  <div class="collapse navbar-collapse" id="navbarTogglerDemo03">
    <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
      <li class="nav-item">
        <Link class="nav-link" to={"/"}>Home</Link>
      </li>
      <li class="nav-item">
        <Link class="nav-link" to={"/services"}>Services</Link>
      </li>
      <li class="nav-item">
        <Link class="nav-link" to={"/contact"}>Contact</Link>
      </li>
    </ul>
   </div>
</nav>
    )
} 