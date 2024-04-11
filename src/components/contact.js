import React from "react";
import { ReactDOM } from "react";
import "../styles/contact.css";
import Navbar from './nav';
import location_data from "../data/location_data"


export default function Contact(){

    const handleSubmit = (event) => {
        event.preventDefault(); // Prevent the form from submitting normally
        // Get form field values
        const name = document.getElementById('nameInput').value;
        const phoneNumber = document.getElementById('phoneInput').value;
        const email = document.getElementById('emailInput').value;
        const cateringType = document.getElementById('cateringtype').value;
        const details = document.getElementById('details').value;

        
        if (!name || !phoneNumber || !email || !cateringType || !details) {
            alert("Please fill in all required fields.");
            return;
        }

        alert("Please make sure to attach your CV when sending the email.");
        
        
  // Construct email body
const emailBody = `
Dear Catering Manager,

I am reaching out to express my interest in potential opportunities with your catering services. Please find below my details:

Full Name: ${name}
Phone Number: ${phoneNumber}
Email Address: ${email}
Type of Event Catering Interested In: ${cateringType}

I would also like to share the following details:

${details}

Please find attached my portfolio showcasing my previous catering work. I am eager to discuss any potential collaborations further.

Thank you for considering my application. I am excited about the possibility of working together.

Best Regards,
${name}
`;
      
        
        // Encode email body for mailto URL
        const encodedEmailBody = encodeURIComponent(emailBody);
        
        // Create mailto URL with encoded email body
        const mailtoURL = `mailto:someone@example.com?body=${encodedEmailBody}`;
        
        // Open default email client with pre-filled email body
        window.location.href = mailtoURL;
    };



    const mylist = location_data.map(item =>(
        <div className="location">
        <img src={item.img} />
        <h1 className="location_header">{item.location}</h1>
        <p className="street"> <i className="fa fa-map-marker mr-3"></i>{item.str} </p>
        <p className="phone"> <i className="fa fa-phone mr-3"></i> <a href={`tel:${item.tel}`}>{item.tel}</a> </p>
        <p className="email"> <i className="fa fa-envelope mr-3"></i> <a href={`mailto:${item.mail}`}>{item.mail}</a> </p>
    </div>

    ))

    return(
        <div className="contact">
            <Navbar/>
            <div className="intro">
                <h1>CONTACT US</h1>
            </div>

            <div className='reach_us_div row mt-5 mb-5'>
            <div className='reach_us'>
                <h1>Reach Us</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do</p>
                <input type='text' placeholder='Chat On Whatsap'/>
                <button className='btn btn-danger'>GO</button>

            </div>
            </div>

                <form onSubmit={handleSubmit} id="emailForm">
                <div className="form_div">
                    <h4 className="text-center">BOOK AN</h4>
                    <h1 className="text-center">EVENT</h1>
                    <div className="row text-center">
                        <div className="col-sm-6 div1">
                            <input type="text" id="nameInput" placeholder="Full Name"/>
                            <input type="tel" id="phoneInput" placeholder="Phone Number"/>
                            <input type="email" id="emailInput" placeholder="Email Address"/>
                            <input type="text" id="cateringtype" placeholder="Event"/>
                        </div>
                        <div className="col-sm-6 div2">
                            <textarea id="details" placeholder="Details"></textarea>
                        </div>
                    </div>
                    <div className="text-center">
                        <button type="submit" className="btn">SUBMIT</button>
                    </div>
                </div>   
            </form>

                <div className="locations_div">
                    {mylist}
                </div>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.847061619931!2d3.3648399740808435!3d6.540989222961762!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8dbc92f8babf%3A0x9be1674f92606704!2sPalmgrove%20Bus%20stop!5e0!3m2!1sen!2sng!4v1711717785456!5m2!1sen!2sng" width="100%" height="600" style={{border:"0"}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

                <div className="conclusion">
                    <div>
                    <h5>TIME TO GET STARTED</h5>
                    <h1>HERE TO HELP YOUR <span>EVERYDAY BUSINESS NEEDS</span></h1>
                    <p>Spend less time doing HR tasks and focus on what matters. Together we translate HR into Business usefulness.</p>
                    <button className="btn"><a href="https://wa.me/2349014680154" className="text-light">CHAT ON WHATSAPP</a></button>

                    </div>
                </div>

        </div>
    )
}