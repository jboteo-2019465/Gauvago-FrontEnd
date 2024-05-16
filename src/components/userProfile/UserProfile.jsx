import './UserProfile.css'
import { NavBar } from '../NavBar/NavBar'
import { Fotter } from '../Fotter/Fotter'
import profileDefault from '../../assets/img/defaultUser.png'

export const UserProfile = () => {
  return (
    <div className='container'>
      <NavBar />
      <div className="gradiant"></div>
      <div className="container-profile">
        <div class="card">
          <div class="card__img"></div>
          <div className="card__avatar"> <img src={profileDefault} alt="Profile" />  </div>
          <div class="card__title">Cameron Williamson</div>
          <div class="card__subtitle">Web Development</div>
          <div class="card__wrapper">
            <button class="card__btn">Edit</button>
            <button class="card__btn card__btn-solid">Delete</button>
          </div>
        </div>
        <form className="form">
          <p className="title">Información </p>
          <label>
            <input className="input" type="text" placeholder="" required="" />
            <span>Name</span>
          </label>
          <label>
            <input className="input" type="text" placeholder="" required="" />
            <span>Surname</span>
          </label>
          <label>
            <input className="input" type="email" placeholder="" required="" />
            <span>Username</span>
          </label>
          <label>
            <input className="input" type="email" placeholder="" required="" />
            <span>Email</span>
          </label>
          <label>
            <input className="input" type="password" placeholder="" required="" />
            <span>Password</span>
          </label>


        </form>
      </div>
      <Fotter />
    </div>
  )
}