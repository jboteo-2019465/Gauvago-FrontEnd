import './UserProfile.css'
import { NavBar } from '../NavBar/NavBar'
import { Fotter } from '../Fotter/Fotter'
import {useUser} from '../../shared/hooks/useUser.jsx'
import profileDefault from '../../assets/img/defaultUser.png'

export const UserProfile = () => {
  const { handleUploadImage, loading, error, imageUrl } = useUser();

  const handleImageChange = (event) => {
    const imageFile = event.target.files[0];
    handleUploadImage(imageFile);
};

const handleSubmit = (event) => {
  event.preventDefault();
  const formData = new FormData();
  formData.append('image', event.target.elements.image.files[0]);
  handleUploadImage(formData);
  event.target.reset();
};

return (
    <div className='container'>
<<<<<<< HEAD
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
=======
        <NavBar />
        <div className="gradiant"></div>
        <div className="container-profile">
            <div className="card">
                <div className="card__img"></div>
                <div className="card__avatar"> 
                    {/* Mostramos la imagen de perfil del usuario */}
                    <img src={profileDefault} alt="Profile" />
                </div>
                <div className="card__title">Cameron Williamson</div>
                <div className="card__subtitle">Web Development</div>
                <div className="card__wrapper">
                    <button className="card__btn">Edit</button>
                    <button className="card__btn card__btn-solid">Delete</button>
                </div>
            </div>
            <form className="form" onSubmit={handleSubmit}>
            <p className="title">Información </p>
            <label>
              <input className="input" type="text" placeholder="" required="" />
              <span>Name</span>
            </label>
            <label>
              <input className="input" type="text" placeholder="" required="" />
              <span>Surname</span>
            </label>
>>>>>>> 80cd3a73fb3d0ae323e946137dcfa8bbea940894
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
<<<<<<< HEAD


        </form>
      </div>
      <Fotter />
    </div>
  )
}
=======
                <label>
                    {/* Input para seleccionar la imagen */}
                    <input className="input" type="file" accept="image/*" name="image" onChange={handleImageChange} />
                </label>
                <button type="submit" className="btn">Guardar</button>
            </form>
        </div>
        <Fotter />
    </div>
);
};

>>>>>>> 80cd3a73fb3d0ae323e946137dcfa8bbea940894
