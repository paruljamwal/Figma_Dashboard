import React from 'react'
import dp from '../assets/man.png'
import plus from '../assets/plus.png'
import credit from '../assets/credit.png'
import bar from '../assets/bar.png'
import cog from '../assets/cogwheel.png'
import mes from '../assets/message.png'
import basket from '../assets/basket.gif'
const SideBar = () => {
  return (
    <div style={{"display":"flex","flexDirection":"column", "marginTop":"10px","marginLeft":"7px"}}>
       <div >
             <img style={{"width":"50px"}} src={dp} alt="" />
       </div>

       <div style={{"marginTop":"100px","marginLeft":"7px"}}>
       <img style={{"width":"40px"}} src={bar} alt="" />
       </div>
       <div  style={{"marginTop":"20px","marginLeft":"7px"}}>
       <img style={{"width":"40px"}} src={mes} alt="" />
       </div>
       <div  style={{"marginTop":"20px","marginLeft":"7px"}}>
       <img style={{"width":"40px"}} src={basket} alt="" />
       </div>
       <div  style={{"marginTop":"20px","marginLeft":"7px"}}>
       <img style={{"width":"40px"}} src={mes} alt="" />
       </div>
       <div  style={{"marginTop":"20px","marginLeft":"7px"}}>
       <img style={{"width":"40px"}} src={cog} alt="" />
       </div>
       <div style={{"marginTop":"100px","marginLeft":"7px"}}>
       <img style={{"width":"40px"}} src={plus} alt="" />
       </div>
    </div>
  )
}

export default SideBar