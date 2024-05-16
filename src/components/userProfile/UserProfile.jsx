import './UserProfile.css'
import { NavBar } from '../NavBar/NavBar'
import { Fotter } from '../Fotter/Fotter'
import {useUser} from '../../shared/hooks/useUser.jsx'
import profileDefault from '../../assets/img/defaultUser.png'
import { getToken } from '../../utils/auth.js'

export const UserProfile = () => {
  const { handleUploadImage, loading, error, imageUrl } = useUser();

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Obtenemos el token de autorización del almacenamiento local
    const token = getToken();
    console.log(token)

    // Creamos un FormData para enviar la imagen al servidor
    const formData = new FormData();
    formData.append('image', e.target.elements.image.files[0]); // Añadimos la imagen al FormData

    try {
        // Enviamos la imagen al servidor incluyendo el token como encabezado
        await handleUploadImage(formData, token);
    } catch (error) {
        console.error('Error uploading image:', error);
    }
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
                    <img src={imageUrl || profileDefault} alt="Profile" />
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
                    <input className="input" type="file" accept="image/*" name="image" />
                </label>
                <button type="submit" className="btn">Guardar</button>
            </form>
        </div>
        <Fotter />
    </div>
);
};

