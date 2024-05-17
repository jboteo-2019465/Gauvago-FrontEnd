import './UserProfile.css'
import { NavBar } from '../NavBar/NavBar'
import { Fotter } from '../Fotter/Fotter'
import { useUser } from '../../shared/hooks/useUser.jsx'
import profileDefault from '../../assets/img/defaultUser.png'

export const UserProfile = () => {
  const { handleUploadImage, loading, error, imageUrl, user } = useUser();

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
                <label>
                    {/* Input para seleccionar la imagen */}
                    <input className="input" type="file" accept="image/*" name="image" onChange={handleImageChange} />
                </label>
                <button type="submit" className="btn">Guardar</button>
            </form>
        </div>
        <Fotter />
    </div>
<<<<<<< HEAD
);
};
=======
  );
};


>>>>>>> 4e45ac9e62e71e468d8e695be4ffa8ba3f8f3502
