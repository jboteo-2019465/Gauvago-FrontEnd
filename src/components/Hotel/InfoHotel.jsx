import './InfoHotel.css';
import { NavBar } from '../NavBar/NavBar';
import ImgDefault from '../../assets/img/hotelLogin.jpg';
import { FaHome, FaLocationArrow, FaHeart } from "react-icons/fa";
import { MdCleanHands } from "react-icons/md";
import { GiMeal } from "react-icons/gi";
import { Fotter } from '../Fotter/Fotter';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Swal from 'sweetalert2';
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { useHotel } from '../../shared/hooks/useHotel.jsx';

import { useUser } from '../../shared/hooks/useUser.jsx';
import { jwtDecode } from 'jwt-decode';
import { useReview } from '../../shared/hooks/useReview.jsx';

export const InfoHotel = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const [itemActive, setItemActive] = useState(0);
    const [selectedFiles, setSelectedFiles] = useState([]);
    const { getHotel, selectedHotel, isLoading, uploadHotelImages, getRoomsHotel, room } = useHotel();
    const { submitReview, isLoading: isReviewLoading, error: reviewError, successMessage: reviewSuccess } = useReview();

    const token = localStorage.getItem('authToken');
    const decodedToken = jwtDecode(token);
    const userId = decodedToken ? decodedToken._id : null;

    const handleHotelView = () => {
        navigate('/HotelView');
    };
        navigate('/HotelView')
    }

    const handleReservation = () => {
        navigate('/Reservation')
    }

    const nextItem = () => {
        let nextIndex = itemActive + 1;
        if (nextIndex >= selectedHotel[0].imageUrl.length) {
            nextIndex = 0;
        }
        setItemActive(nextIndex);
    };

    const prevItem = () => {
        let prevIndex = itemActive - 1;
        if (prevIndex < 0) {
            prevIndex = selectedHotel[0].imageUrl.length - 1;
        }
        setItemActive(prevIndex);
    };

    const handleFileChange = (e) => {
        setSelectedFiles(Array.from(e.target.files));
    };

    const handleUpload = () => {
        if (selectedFiles.length > 0) {
            uploadHotelImages(id, selectedFiles);
        }
    };

    const handleReviewSubmit = async (e) => {
        e.preventDefault();
        const form = e.target;
        const reviewData = {
            rating: form.rating.value,
            review: form.comment.value,
            hotelR: id,
        };
        await submitReview(reviewData, token);
    };

    useEffect(() => {
        const fetchData = async () => {
            await getHotel(id);
            await getRoomsHotel(id);
        };

        fetchData();
        const interval = setInterval(nextItem, 5000);
        return () => clearInterval(interval);
    }, [id]);

    return (
        <div className="container-infoHotel">
            <NavBar />
            <br />

            <br />
            <div className="house-details">
                <div className="house-title">
                    <br />
                    {!isLoading && selectedHotel.map((hotelItem, index) => (
                        <div key={index} className="row">
                            <div className="slider">
                                <div className="list">
                                    {hotelItem.imageUrl.map((image, imageIndex) => (
                                        <div key={imageIndex} className={`item ${itemActive === imageIndex ? 'active' : ''}`}>
                                            <img src={image || ImgDefault} />
                                            <div className="content">
                                                <p>Hotel</p>
                                                <h2>{hotelItem.nameHotel}</h2>
                                                <p>
                                                    {hotelItem.slogan || "El lugar de tus sueños"}
                                                </p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                <div className="thumbnail">
                                    {hotelItem.imageUrl.map((image, imageIndex) => (
                                        <div key={imageIndex} className={`item ${itemActive === imageIndex ? 'active' : ''}`} onClick={() => setItemActive(imageIndex)}>
                                            <img src={image || ImgDefault} />
                                        </div>
                                    ))}
                                </div>
                                <div className="rating">
                                    {Array.from({ length: hotelItem.stars }, (_, i) => (
                                        <>
                                            <input
                                                key={i}
                                                value={i + 1}
                                                name="rate"
                                                id={`star${i + 1}`}
                                                type="radio"
                                                checked={true}
                                            />
                                            <label title="text" htmlFor={`star${i + 1}`}></label>
                                        </>
                                    ))}
                                    {Array.from({ length: 5 - hotelItem.stars }, (_, i) => (
                                        <>
                                            <input
                                                key={i + hotelItem.stars}
                                                value={i + 1}
                                                name="rate"
                                                id={`star${i + hotelItem.stars + 1}`}
                                                type="radio"
                                                checked={false}
                                            />
                                            <label title="text" htmlFor={`star${i + 1}`}></label>
                                        </>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <button className="backButton" onClick={handleHotelView}>
                    <div className="backButton-box">
                        <span className="backButton-elem">
                            <svg viewBox="0 0 46 40" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M46 20.038c0-.7-.3-1.5-.8-2.1l-16-17c-1.1-1-3.2-1.4-4.4-.3-1.2 1.1-1.2 3.3 0 4.4l11.3 11.9H3c-1.7 0-3 1.3-3 3s1.3 3 3 3h33.1l-11.3 11.9c-1 1-1.2 3.3 0 4.4 1.2 1.1 3.3.8 4.4-.3l16-17c.5-.5.8-1.1.8-1.9z"
                                ></path>
                            </svg>
                        </span>
                        <span className="backButton-elem">
                            <svg viewBox="0 0 46 40">
                                <path
                                    d="M46 20.038c0-.7-.3-1.5-.8-2.1l-16-17c-1.1-1-3.2-1.4-4.4-.3-1.2 1.1-1.2 3.3 0 4.4l11.3 11.9H3c-1.7 0-3 1.3-3 3s1.3 3 3 3h33.1l-11.3 11.9c-1 1-1.2 3.3 0 4.4 1.2 1.1 3.3.8 4.4-.3l16-17c.5-.5.8-1.1.8-1.9z"
                                ></path>
                            </svg>
                        </span>
                    </div>
                </button>
                {decodedToken.role === 'ADMINHOTEL' && (
                    <div>

                        <h3>Sube Imágenes de tu Hotel!</h3>

                        <label for="file" class="custum-file-upload">
                            <div class="icon">
                            </div>
                            <div class="text">
                                <span>Click to upload image</span>
                            </div>
                            <input onChange={handleFileChange} id="file" type="file" />
                            <button className="backButton" onClick={handleUpload}>up</button>
                        </label>

                    </div>
                )}


                <hr className='line' />
                <ul className='details-list'>
                    <li> <FaHome />  Entire Hotel
                        <span>You will have the hotel flat for you.</span>
                    </li>
                    <li><MdCleanHands /> Enhanced Clean
                        <span>This host has committed to stay nbs cleaning process.</span>
                    </li>
                    <li><FaLocationArrow /> Great Location
                        <span>90% of recent guests gave the location a 5 star rating.</span>
                    </li>
                    <li><FaHeart /> Great Check-in Experience
                        <span>100% of recent guests gave the check-in process a 5 star rating</span>
                    </li>
                </ul>
                <hr className='line' />
                {!isLoading && selectedHotel.map((hotelItem, index) => (
                    <p className='home-desc'>
                        {hotelItem.description}
                    </p>
                ))}

                <ul className="wrapper">
                    <li className="icon facebook">
                        <span className="tooltip">Facebook</span>
                        <svg
                            viewBox="0 0 320 512"
                            height="1.2em"
                            fill="currentColor"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"
                            ></path>
                        </svg>
                    </li>
                    <li className="icon twitter">
                        <span className="tooltip">Twitter</span>
                        <svg
                            height="1.8em"
                            fill="currentColor"
                            viewBox="0 0 48 48"
                            xmlns="http://www.w3.org/2000/svg"
                            className="twitter"
                        >
                            <path
                                d="M42,12.429c-1.323,0.586-2.746,0.977-4.247,1.162c1.526-0.906,2.7-2.351,3.251-4.058c-1.428,0.837-3.01,1.452-4.693,1.776C34.967,9.884,33.05,9,30.926,9c-4.08,0-7.387,3.278-7.387,7.32c0,0.572,0.067,1.129,0.193,1.67c-6.138-0.308-11.582-3.226-15.224-7.654c-0.64,1.082-1,2.349-1,3.686c0,2.541,1.301,4.778,3.285,6.096c-1.211-0.037-2.351-0.374-3.349-0.914c0,0.022,0,0.055,0,0.086c0,3.551,2.547,6.508,5.923,7.181c-0.617,0.169-1.269,0.263-1.941,0.263c-0.477,0-0.942-0.054-1.392-0.135c0.94,2.902,3.667,5.023,6.898,5.086c-2.528,1.96-5.712,3.134-9.174,3.134c-0.598,0-1.183-0.034-1.761-0.104C9.268,36.786,13.152,38,17.321,38c13.585,0,21.017-11.156,21.017-20.834c0-0.317-0.01-0.633-0.025-0.945C39.763,15.197,41.013,13.905,42,12.429"
                            ></path>
                        </svg>
                    </li>
                    <li className="icon instagram">
                        <span className="tooltip">Instagram</span>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            height="1.2em"
                            fill="currentColor"
                            className="bi bi-instagram"
                            viewBox="0 0 16 16"
                        >
                            <path
                                d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"
                            ></path>
                        </svg>
                    </li>
                </ul>

                {room.map((roomItem, index) => (
                    <div key={index}>
                        <hr className='line' />
                        <section className="rooms sec-width" id="rooms">
                            <div className="title">
                                <h2>Rooms</h2>
                            </div>
                            <div className="rooms-container">

                                <article className="room">
                                    <div className="room-image">
                                        <img src={ImgDefault} alt="Luxury room with modern decor" />
                                    </div>
                                    <div className="room-text">
                                        <h3>{roomItem.nameRoom}</h3>
                                        <ul>
                                            <li>
                                                <i className="fas fa-arrow-alt-circle-right"></i>
                                                <GiMeal />  Comida variada
                                            </li>
                                        </ul>
                                        <p>{roomItem.description}</p>
                                        <p>{roomItem.category}</p>
                                        <p className="rate">
                                            <span>Q{roomItem.price} /</span> Day
                                        </p>
                                        <button type="button" className="btnxddd" onClick={handleReservation}>Book Now</button>
                                    </div>
                                </article>

                            </div>
                        </section>
                    </div>
                ))}

                <hr className='line' />
                <form onSubmit={handleReviewSubmit} className="review-form-container">
                    <div className="review-form">
                        <h2>Dejar una Reseña</h2>
                        {reviewError && <div className="error-message">{reviewError}</div>}
                        {reviewSuccess && <div className="success-message">{reviewSuccess}</div>}
                        <label>
                            Calificación:
                            <select name="rating" required>
                                <option value="1">1 Estrella</option>
                                <option value="2">2 Estrellas</option>
                                <option value="3">3 Estrellas</option>
                                <option value="4">4 Estrellas</option>
                                <option value="5">5 Estrellas</option>
                            </select>
                        </label>
                        <label>
                            Comentario:
                            <textarea name="comment" rows="4" required></textarea>
                        </label>
                        <button type="submit" disabled={isReviewLoading}>Enviar Reseña</button>
                    </div>
                </form>
                <hr className='line' />


                <div className="container-xd">
                    <div className="card-x">
                        <div className="stars">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="star">
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                            </svg>

                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="star">
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                            </svg>

                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="star">
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                            </svg>

                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="star">
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                            </svg>

                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="star">
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                            </svg>
                        </div>

                        <div className="infos">
                            <p className="date-time">
                                2 days ago
                            </p>
                            <p className="description">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur.
                            </p>
                        </div>

                        <div className="author">
                            — Itzep Lemus
                        </div>
                    </div>

                    <div className="card-x">
                        <div className="stars">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="star">
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                            </svg>

                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="star">
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                            </svg>

                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="star">
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                            </svg>

                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="star">
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                            </svg>

                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="star">
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                            </svg>
                        </div>

                        <div className="infos">
                            <p className="date-time">
                                2 days ago
                            </p>
                            <p className="description">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur.
                            </p>
                        </div>

                        <div className="author">
                            — Boteo Boteo
                        </div>
                    </div>

                    <div className="card-x">
                        <div className="stars">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="star">
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                            </svg>

                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="star">
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                            </svg>

                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="star">
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                            </svg>

                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="star">
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                            </svg>

                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="star">
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                            </svg>
                        </div>

                        <div className="infos">
                            <p className="date-time">
                                1 day ago
                            </p>
                            <p className="description">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur.
                            </p>
                        </div>

                        <div className="author">
                            — Diego Zabala
                        </div>
                    </div>

                </div>
                <br />
                <div>

                </div>

            </div>
            <Fotter />
        </div>
    )
