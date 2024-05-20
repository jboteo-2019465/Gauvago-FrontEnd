import './HotelView.css'
import { NavBar } from '../NavBar/NavBar'
import { Fotter } from '../Fotter/Fotter'
import ImgDefault from '../../assets/img/hotelLogin.jpg'
import { useNavigate } from 'react-router-dom'
import { useHotel } from '../../shared/hooks/useHotel.jsx';
import { useDepartment } from '../../shared/hooks/useDepartments.jsx'


export const HotelView = () => {
    const { hotel, isLoading } = useHotel();
    const {department, isLoadingDepa} = useDepartment()
    const navigate = useNavigate()


    const handleInfoHotel = (id) => {
        navigate(`/InfoHotel/${id}`)
    }

    console.log('Hotel in Showcase:', hotel);
    console.log('Departments', department)

    return (
        <div className="hotelView">
            <NavBar />
            <header className="section_container header_container">
                <div className="header_image_container">
                    <div className="header__content">
                        <h1>Disfrute de las vacaciones de sus sueños</h1>
                        <p>Reservar Hoteles, Vuelos y estancia</p>
                    </div>
                    <div className="booking__container">
                        <form>
                            <div className="form__group">
                                <div className="input__group">
                                    <input type="text" />
                                    <label></label>
                                </div>
                                <p>¿Adónde vas?</p>
                            </div>

                        </form>
                        <button className="btn"><i className="ri-search-line"></i></button>
                    </div>
                </div>
            </header>


            <div>
                <section className="section__container room__container">
                    <h2 className="section__header">Escoje tu proxima estadía</h2>
                    <div className="room__grid">
                        {!isLoading && Array.isArray(hotel) && hotel.map((hotelItem, index) => (
                            <div key={index} className="room__card">
                                <div className="room__card__image">
                                    <img src={ImgDefault} alt="room" />
                                    <div className="room__card__icons">
                                        <label class="container-xdd">
                                            <input type="checkbox" />
                                            <svg id="Layer_1" version="1.0" viewBox="0 0 24 24" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><path d="M16.4,4C14.6,4,13,4.9,12,6.3C11,4.9,9.4,4,7.6,4C4.5,4,2,6.5,2,9.6C2,14,12,22,12,22s10-8,10-12.4C22,6.5,19.5,4,16.4,4z"></path></svg>
                                        </label>
                                        <span><i className="ri-shield-star-line"></i></span>
                                    </div>
                                </div>
                                <div className="room__card__details">
                                    <h4>{hotelItem.nameHotel}</h4>
                                    <p>{hotelItem.description}</p>
                                    <h5>from {hotelItem.address}</h5>
                                    <button className='viewHotel' onClick={() => handleInfoHotel(hotelItem._id)}>
                                        <p>Ver</p>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            class="h-6 w-6"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            stroke-width="4"
                                        >
                                            <path
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                                d="M14 5l7 7m0 0l-7 7m7-7H3"
                                            ></path>
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            </div>
            <Fotter />
        </div>
    )
}