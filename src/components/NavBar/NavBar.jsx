import './NavBar.css'

export const NavBar = () => {
  return (
    
    <div>
    <nav id="navbar" class="py-30">
    <div class="container">
      <h1 class="logo"><a href='../assets/img/logos.png'>Gauvago</a></h1>
      <ul>
        <li><a href="#" class="current">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Contact</a></li>    
      </ul>
    </div>
    <div data-aos="fade-up" id="showcase" class="py-80">
        <div class="container">
          <h1>Welcome to Gauvago</h1>
          <p class="large">Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, consectetur quaerat vero, praesentium saepe omnis aut reprehenderit tempora est aspernatur cupiditate doloremque. Ratione reiciendis velit commodi expedita quos provident fugit iusto. Assumenda necessitatibus deleniti eum provident iste voluptate, ipsam nulla!</p>
          <a href="#" class="btn btn-light">About Our Hotel's</a>
        </div>
      </div>
    </nav>
    </div>
    
  )
}

