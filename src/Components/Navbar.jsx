import React from 'react'
import {useContext} from 'react'
import { ThemeContext } from '../Context/ThemeContext'
const Navbar = () => {

  const {isLight,toggleTheme}=useContext(ThemeContext)


  return (
    <div style={{"display":"flex"}}>
      <div style={{"marginLeft":"5%","marginRight":"150px"}}><h1>My Dashboard</h1></div>
      <div>
      <button onClick={toggleTheme} style={{ "marginTop":"20px","width":"80px", "height":"40px", "borderRadius":"25px"}} >{`${isLight ? "Dark" : "Light"}`}</button>
      </div>
      </div>
  )
}

export default Navbar