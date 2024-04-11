import React from 'react';
import ReactDOM from 'react-dom';
import "../styles/footer.css";
import cusin from "../photos/others/best cusin.jpeg";
import qual from "../photos/others/qualitative.jpg";
import catfish from "../photos/others/Catfish-Peppersoup.jpeg";
import stream_data from "../data/stream"

export default function Footer(){
    const myList = stream_data.map(items =>(
        <div className='col-6'>
            <img src={items} />
        </div>
    ))



    return(
        <footer className='row'>
            <div className='col-sm-3 first'>
                <h1 className="headers">Recent Post</h1>
                <div className='row'>                    
                    <div className='col-6'>
                        <img src={cusin}/>
                    </div>
                    <div className='col-6'>
                        <h1>Best Cusin</h1>
                        <h2>August 26, 2020</h2>
                    </div>
                    <div className='col-6'>
                    <img src={qual}/>
                    </div>
                    <div className='col-6'>
                    <h1>Qualitative Service</h1>
                    <h2>August 26, 2020</h2>
                    </div>

                </div>
            </div>
            <div className='col-sm-3 stream'>
                <h1 className="headers">Photo Stream</h1>
                
                <div className='row'>
                    {myList}
                </div>
            
            </div>
            <div className='col-sm-3 hrs'>
                <h1 className="headers">Working Hours</h1>
                <p className='days'>Monday To Thursday</p>
                <p className='time'>8:30 am to 10:30 pm</p>
                <p className='days'>Friday To Saturday</p>
                <p className='time'>10:00 am to 18:30 pm</p>
                <p className='days'>Sunday</p>
                <p className='time'>Not available</p>
            </div>
            <div className='col-sm-3 popular_dish'>
                <h1 className="headers">Popular Dish</h1>
                <img src={catfish}/>
            </div>

        </footer>
    )
}