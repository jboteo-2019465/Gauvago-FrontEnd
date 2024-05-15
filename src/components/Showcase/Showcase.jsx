import React, { useState, useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';

export const Showcase = () => {

    useEffect(() => {
        Aos.init({ duration: 2000 });
      }, []);
  return (
    <div>
         <div id="showcase" className="showcase">
        <div className="overlay"></div>
        <div data-aos="zoom-out" className="container">
          <h1>Welcome to Gauvago</h1>
          <p className="large">Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, consectetur quaerat vero, praesentium saepe omnis aut reprehenderit tempora est aspernatur cupiditate doloremque. Ratione reiciendis velit commodi expedita quos provident fugit iusto. Assumenda necessitatibus deleniti eum provident iste voluptate, ipsam nulla!</p>
          <a href="#" className="btn btn-light">About Our Hotel's</a>
        </div>
      </div>
    </div>
  )
}


