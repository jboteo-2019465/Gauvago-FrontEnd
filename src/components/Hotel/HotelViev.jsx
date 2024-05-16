import './HotelView.css'
import { NavBar } from '../NavBar/NavBar'
import ImgDefault from '../../assets/img/hotelLogin.jpg'


export const HotelView = () => {
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
                            <div className="form__group">
                                <div className="input__group">
                                    <input type="text" />
                                    <label>Registrarse</label>
                                </div>
                                <p>Agregar fecha</p>
                            </div>
                            <div className="form__group">
                                <div className="input__group">
                                    <input type="text" />
                                    <label>Verificar</label>
                                </div>
                                <p>Agregar fecha</p>
                            </div>
                            <div className="form__group">
                                <div className="input__group">
                                    <input type="text" />
                                    <label>Invitados</label>
                                </div>
                                <p>Agregar invitados</p>
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
                        <img src={ImgDefault} alt="popular hotel" />
                        <div className="popular__content">
                            <div className="popular__card__header">
                                <h4>The Plaza Hotel</h4>
                                <h4>Q 1300.00</h4>
                            </div>
                            <p>Peten, Guatemala</p>
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