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
        <div className="profile-info">
          <div className="profile-down">
            <img src={profileDefault} alt="Oa" />
            <div className="profile-title">User</div>
            <div className="profile-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, laudantium iure odio ea facere minus reiciendis enim quibusdam atque animi voluptates culpa, iste necessitatibus officia. Ipsa animi eos quo in!</div>
          </div>
        </div>
        <form class="form">
          <p class="title">Información </p>
            <label>
              <input class="input" type="text" placeholder="" required="" />
              <span>Name</span>
            </label>
            <label>
              <input class="input" type="text" placeholder="" required="" />
              <span>Surname</span>
            </label>
          <label>
            <input class="input" type="email" placeholder="" required="" />
            <span>Username</span>
          </label>
          <label>
            <input class="input" type="email" placeholder="" required="" />
            <span>Email</span>
          </label>
          <label>
            <input class="input" type="password" placeholder="" required="" />
            <span>Password</span>
          </label>
          <div className='flex'>
            <button class="submit">Edit</button>
            <button class="submit">Delete</button>
          </div>

        </form>
      </div>
      <Fotter />
    </div>
  )
}


