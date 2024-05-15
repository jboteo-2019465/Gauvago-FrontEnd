import React, { useState, useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import './Showcase.css'
import imgHotel from '../../assets/img/room-2.jpg'
import ScrollReveal from 'scrollreveal';

export const Showcase = () => {

  const scrollRevealOption = {
    distance: "50px",
    origin: "bottom",
    duration: 1000
  }

  ScrollReveal().reveal("room__grid", {
    ...scrollRevealOption
  })

    useEffect(() => {
        Aos.init({ duration: 2000 });
      }, []);
  return (
    <div>
         <div id="showcase" className="showcase">
        <div className="overlay"></div>
        <div data-aos="zoom-out" className="container">
          <h1>The Perfect Base For You</h1>
          <a href="#" className="btn btn-light">About Our Hotel's</a>
        </div>
      </div>
      <div id="reservation" >
      <section className="py-30">
    <div className="container">
      <h2>Make your Reservation Today!</h2>
      <span className="btn btn-dark">Make Reservation</span>
    </div>
  </section>
      </div>
      <div className='hotels-section'>
      <section className="section__container room__container">
      <p className="section__subheader">OUR LIVING ROOM</p>
      <h2 className="section__header">The Most Memorable Rest Time Starts Here.</h2>
      <div className="room__grid">
        <div className="room__card">
          <div className="room__card__image">
            <img src={imgHotel} alt="room" />
            <div className="room__card__icons">
              <span><i className="ri-heart-fill"></i></span>
              <span><i className="ri-paint-fill"></i></span>
              <span><i className="ri-shield-star-line"></i></span>
            </div>
          </div>
          <div className="room__card__details">
            <h4>Deluxe Ocean View</h4>
            <p>
              Bask in luxury with breathtaking ocean views from your private
              suite.
            </p>
            <h5>Starting from <span>$299/night</span></h5>
            <button className="btn">Book Now</button>
          </div>
        </div>
        <div className="room__card">
          <div className="room__card__image">
            <img src="assets/room-2.jpg" alt="room" />
            <div className="room__card__icons">
              <span><i className="ri-heart-fill"></i></span>
              <span><i className="ri-paint-fill"></i></span>
              <span><i className="ri-shield-star-line"></i></span>
            </div>
          </div>
          <div className="room__card__details">
            <h4>Executive Cityscape Room</h4>
            <p>
              Experience urban elegance and modern comfort in the heart of the
              city.
            </p>
            <h5>Starting from <span>$199/night</span></h5>
            <button className="btn">Book Now</button>
          </div>
        </div>
        <div className="room__card">
          <div className="room__card__image">
            <img src="assets/room-3.jpg" alt="room" />
            <div className="room__card__icons">
              <span><i className="ri-heart-fill"></i></span>
              <span><i className="ri-paint-fill"></i></span>
              <span><i className="ri-shield-star-line"></i></span>
            </div>
          </div>
          <div className="room__card__details">
            <h4>Family Garden Retreat</h4>
            <p>
              Spacious and inviting, perfect for creating cherished memories
              with loved ones.
            </p>
            <h5>Starting from <span>$249/night</span></h5>
            <button className="btn">Book Now</button>
          </div>
        </div>
      </div>
    </section>
        
      </div>
    </div>
  )
}


