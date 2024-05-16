import './InfoHotel.css'
import { NavBar } from '../NavBar/NavBar'
import ImgDefault from '../../assets/img/hotelLogin.jpg'


export const InfoHotel = () => {

    return (
        <div className="container-infoHotel">
            <NavBar />
            <br />
            <br />
            <div className="house-details">
                <div className="house-title">
                    <br />
                    <div className="row"> 
                    <h1>Hotel Los Panfilos</h1> 
                        <div> 
                            <p>Ubicacion: Peten, Guatemala, Ciudad Panfilo</p>
                        </div>
                    </div>
                </div>
                <div className='gallery'>
                    <div className='gallery-img-1'><img src={ImgDefault} alt="" /></div>
                    <div><img src={ImgDefault} alt="" /></div>
                    <div><img src={ImgDefault} alt="" /></div>
                    <div><img src={ImgDefault} alt="" /></div>
                    <div><img src={ImgDefault} alt="" /></div>
                </div>
                <div class="rating">
                    <input value="5" name="rate" id="star5" type="radio"/>
                    <label title="text" for="star5"></label>
                    <input value="4" name="rate" id="star4" type="radio"/>
                    <label title="text" for="star4"></label>
                    <input value="3" name="rate" id="star3" type="radio" checked=""/>
                    <label title="text" for="star3"></label>
                    <input value="2" name="rate" id="star2" type="radio"/>
                    <label title="text" for="star2"></label>
                    <input value="1" name="rate" id="star1" type="radio"/>
                    <label title="text" for="star1"></label>
                </div>
                <div className="small-details">
                    <h2>Unidad de alquiler entera - Anfitrión: Panfilo</h2>
                    <p>2 guest &nbsp; &nbsp; 2 beds &nbsp; &nbsp; 1 bathroom</p>
                    <h4>Q 1255.00 / day</h4>
                </div>
                <hr className='line'/>
                <form className='check-form'>
                    <div>
                        <label>Check-in</label>
                        <input type='text' placeholder='Add date'/>
                    </div>
                    <div>
                        <label>Check-out</label>
                        <input type='text' placeholder='Add date'/>
                    </div>
                    <div className='guest-field'>
                        <label>Guest</label>
                        <input type='text' placeholder='2 guest'/>
                    </div>
                    <button type='submit'>Check Availablity</button>
                </form>

                <ul className='details-list'>
                    <li>Entire Hotel
                        <span>You will have the hotel flat for you.</span>
                    </li>
                    <li>Enhanced Clean
                        <span>This host has committed to stay nbs cleaning process.</span>
                    </li>
                    <li>Entire Hotel
                        <span>You will have the hotel flat for you.</span>
                    </li>
                    <li>Entire Hotel
                        <span>You will have the hotel flat for you.</span>
                    </li>
                </ul>

            </div>
        </div>
    )
}