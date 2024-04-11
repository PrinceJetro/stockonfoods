import React, {useState} from "react";
import { ReactDOM } from "react";
import  "../styles/populardish.css";
import populardishdata from "../data/populardishdata"




export default function PopularDishes() {
  return (
    <div className="populardish_container row" id="populardish_container">
        <div class="header">
            <p className="populardish_headerP">Goodess & Taste</p>
  <h1 className="populardish_header">Our Popular Dishes</h1>
</div>


<div class="row" id="populardish_div"> 

<div class="column">
   {
    populardishdata.slice(0, 2).map(item =>(
        <div class="image-container">
            <img src={item.img}  style={{ width: "100%"}}/>
            <h1 class="image-description"> {item.name}</h1>
        </div>
    ))
   }
</div>
<div class="column">
   {
    populardishdata.slice(2,4).map(item =>(
        <div class="image-container">
            <img src={item.img}  style={{ width: "100%"}}/>
            <h1 class="image-description"> Credit @<a href={item.link} target="_blank">{item.name}</a> </h1>
        </div>
    ))
   }
</div>
<div class="column">
   {
    populardishdata.slice(4,6).map(item =>(
        <div class="image-container">
            <img src={item.img}  style={{ width: "100%"}}/>
            <h1 class="image-description"> Credit @<a href={item.link} target="_blank">{item.name}</a> </h1>
        </div>
    ))
   }
</div>
<div class="column">
   {
    populardishdata.slice(6,8).map(item =>(
        <div class="image-container">
            <img src={item.img}  style={{ width: "100%"}}/>
            <h1 class="image-description"> Credit @<a href={item.link} target="_blank">{item.name}</a> </h1>
        </div>
    ))
   }
</div>


</div>

    </div>
  );
}