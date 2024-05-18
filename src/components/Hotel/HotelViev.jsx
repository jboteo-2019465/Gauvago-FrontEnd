import './HotelView.css'
import { NavBar } from '../NavBar/NavBar'
import ImgDefault from '../../assets/img/hotelLogin.jpg'
import { useNavigate } from 'react-router-dom'


export const HotelView = () => {
    const navigate = useNavigate()

    const handleInfoHotel = () => {
        navigate('/InfoHotel')
    }

    return (
        <div className="hotelView">
            <NavBar />
            <br /><br /><br /><br />
            <header className="section__container header__container">
                <div className="header__image__container">
                    <div className="header__content">
                        <h1>Disfrute de las vacaciones de sus sueños</h1>
                        <p>Reservar Hoteles, Vuelos y estancia</p>
                    </div>
                    <div className="booking__container">
                        <form>
                            <div className="form__group">
                                <div className="input__group">
                                    <input type="text" />
                                    <label>ubicación</label>
                                </div>
                                <p>¿Adónde vas?</p>
                            </div>

                        </form>
                        <button className="btn"><i className="ri-search-line"></i></button>
                    </div>
                </div>
            </header>

            <section className="section__container popular__container">
                <h2 className="section__header">Algunos Hoteles</h2>
                <div className="popular__grid">
                    <div className="popular__card">
                        <div className="container-like-img">
                            <img src={ImgDefault} alt="popular hotel" />
                        <label class="container">
                            <input type="checkbox" />
                            <svg id="Layer_1" version="1.0" viewBox="0 0 24 24" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><path d="M16.4,4C14.6,4,13,4.9,12,6.3C11,4.9,9.4,4,7.6,4C4.5,4,2,6.5,2,9.6C2,14,12,22,12,22s10-8,10-12.4C22,6.5,19.5,4,16.4,4z"></path></svg>
                        </label>
                        </div>
                        <div className="popular__content">
                            <div className="popular__card__header">
                                <h4>The Plaza Hotel</h4>
                                <h4>Q 1300.00</h4>
                            </div>
                            <p>Peten, Guatemala</p>
                            <br />
                            <button className='viewHotel' onClick={handleInfoHotel}>
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
                    <div className="popular__card">
                        <img src={ImgDefault} alt="popular hotel" />
                        <div className="popular__content">
                            <div className="popular__card__header">
                                <h4>Hotel Los Panfilos</h4>
                                <h4>Q 1600.00</h4>
                            </div>
                            <p>MixcoYork, Guatemala</p>
                            <div className="botonxd-container">
                            </div>
                        </div>
                    </div>

                    <div className="popular__card">
                        <img src={ImgDefault} alt="popular hotel" />
                        <div className="popular__content">
                            <div className="popular__card__header">
                                <h4>Tikal Futura</h4>
                                <h4>Q 1000.00</h4>
                            </div>
                            <p>Guatemala, Guatemala</p>
                        </div>
                    </div>

                    <div className="popular__card">
                        <img src={ImgDefault} alt="popular hotel" />
                        <div className="popular__content">
                            <div className="popular__card__header">
                                <h4>Atlantis The Palm</h4>

                                <h4>Q 1200.00</h4>
                            </div>
                            <p>Amatitlan, Guatemala</p>
                        </div>
                    </div>
                    <div className="popular__card">
                        <img src={ImgDefault} alt="popular hotel" />
                        <div className="popular__content">
                            <div className="popular__card__header">
                                <h4>Hotel Las Profundidades</h4>
                                <h4>Q 1550.00</h4>
                            </div>
                            <p>VilaNueva, Guatemala</p>
                        </div>
                    </div>
                    <div className="popular__card">
                        <img src={ImgDefault} alt="popular hotel" />
                        <div className="popular__content">
                            <div className="popular__card__header">
                                <h4>Marina Bay Sands</h4>
                                <h4>Q 1345.00</h4>
                            </div>
                            <p>Solola, Guatemala</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}