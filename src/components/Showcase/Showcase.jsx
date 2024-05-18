import React, { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import './Showcase.css';
import imgHotel from '../../assets/img/room-2.jpg';
import { useHotel } from '../../shared/hooks/useHotel.jsx';
import { useNavigate } from 'react-router-dom';


export const Showcase = () => {
  const { hotel, isLoading } = useHotel();
  const navigate = useNavigate();

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  const handleToHotels = () =>{
    navigate('/HotelView')
  }

  console.log('Hotel in Showcase:', hotel);

  return (
    <div>
      <div id="showcase" className="showcase">
        <div className="overlay"></div>
        <div data-aos="zoom-out" className="container">
          <h1>The Perfect Base For You</h1>
          <span onClick={handleToHotels} className="btn btn-light">About Our Hotel's</span>
        </div>
      </div>
      <div id="reservation">
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
            {!isLoading && Array.isArray(hotel) && hotel.map((hotelItem, index) => (
              <div key={index} className="room__card">
                <div className="room__card__image">
                  <img src={imgHotel} alt="room" />
                  <div className="room__card__icons">
                    <span><i className="ri-heart-fill"></i></span>
                    <span><i className="ri-paint-fill"></i></span>
                    <span><i className="ri-shield-star-line"></i></span>
                  </div>
                </div>
                <div className="room__card__details">
                  <h4>{hotelItem.nameHotel}</h4>
                  <p>{hotelItem.description}</p>
                  <h5>from {hotelItem.address}</h5>
                  <button className="btn">Book Now</button>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};
