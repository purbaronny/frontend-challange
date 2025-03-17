"use client"

import BodyCareer from "./career/page"
import BodyContact from "./contact/page"
import BodyOurCustomer from "./customer/page"
import BodyHome from "./home/page"
import BodyService from "./service/page"
import BodyTeam from "./team/page"
import BodyWork from "./work/page"

export default function Body() {
    return (
    //   <div className="bg-white shadow-md p-4">
      <div className="bg-white shadow-md">
        {/* <div id="home" className="py-8">
          <h2 className="text-xl font-semibold">Home</h2>
          <p>Welcome to our homepage!</p>
        </div> */}
        <BodyHome></BodyHome>

        {/* <div id="work" className="py-8">
          <h2 className="text-xl font-semibold">Work</h2>
          <p>Our recent projects and achievements.</p>
        </div> */}
        <BodyWork></BodyWork>
  
        {/* <div id="service" className="py-8">
          <h2 className="text-xl font-semibold">Service</h2>
          <p>Check out our services.</p>
        </div> */}
        <BodyService></BodyService>
  
        {/* <div id="our_customer" className="py-8">
          <h2 className="text-xl font-semibold">Our Customer</h2>
          <p>Meet our valued customers.</p>
        </div> */}
        <BodyOurCustomer></BodyOurCustomer>
  
        {/* <div id="team" className="py-8">
          <h2 className="text-xl font-semibold">Team</h2>
          <p>Meet our dedicated team members.</p>
        </div> */}
        <BodyTeam></BodyTeam>
  
        {/* <div id="career" className="py-8">
          <h2 className="text-xl font-semibold">Career</h2>
          <p>Explore career opportunities with us.</p>
        </div> */}
        <BodyCareer></BodyCareer>
  
        {/* <div id="contact" className="py-8">
          <h2 className="text-xl font-semibold">Contact</h2>
          <p>Get in touch with us.</p>
        </div> */}
        <BodyContact></BodyContact>
      </div>
    );
  }
  