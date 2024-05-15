import { Fotter } from "./Fotter/Fotter"
import { NavBar } from "./NavBar/NavBar"
import { Showcase } from "./Showcase/Showcase"

export const HomePage = () => {
  return (
    <div>
      <NavBar/>
      <Showcase/>

      <Fotter/>
    </div>
  )
}

