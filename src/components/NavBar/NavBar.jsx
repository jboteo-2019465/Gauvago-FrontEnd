import { useEffect } from 'react'
import './NavBar.css'
import Aos from 'aos'
import 'aos/dist/aos.css'


export const NavBar = () => {

  useEffect(()=>{
    Aos.init({duration: 2000})
  }, [])
  return (
    
    <div>
    <nav id="navbar" className="py-30">
    <div className="container">
      <h1 className="logo"><a href='../assets/img/logos.png'>Gauvago</a></h1>
      <ul>
        <li><a href="#" className="current">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Contact</a></li>    
      </ul>
    </div>
    <div data-aos="fade-up" id="showcase" className="py-80">
        <div className="container">
          <h1>Welcome to Gauvago</h1>
          <p className="large">Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, consectetur quaerat vero, praesentium saepe omnis aut reprehenderit tempora est aspernatur cupiditate doloremque. Ratione reiciendis velit commodi expedita quos provident fugit iusto. Assumenda necessitatibus deleniti eum provident iste voluptate, ipsam nulla!</p>
          <a href="#" className="btn btn-light">About Our Hotel's</a>
        </div>
      </div>
    </nav>
    </div>
    
  )
}

