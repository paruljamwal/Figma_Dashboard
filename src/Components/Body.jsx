import React from 'react'
import girl from "../assets/girl.png"
import boy from "../assets/boy.png"
import hacker from "../assets/hacker.png"





const Body = () => {
  return (
    <div style={{"marginLeft":"5%","border":"1px solid lightgray", "width":"500px", "height":"500px"}}>
     <h2 style={{"margin":"10px"}}>Active Users</h2>
     <div style={{"display":"flex","width":"100%" , "borderBottom":"1px solid lightgray","height":"100px"}}>
       <div>
          <img style={{"width":"60px","margin":"10px"}} src={girl} alt="" />
       </div>
       <div style={{"lineHeight":"5px","marginTop":"20px"}}>
        <p><b>Parul jamwal</b></p> 
        <p>Himanchal pradesh</p>
        
         </div>
     

         
     </div>
         <div style={{"marginBottom":"15px","height":"3px","borderRadius":"2px","flexDirection":"row","width":"90%"}}>
           <div style={{"height":"4px", "backgroundColor":"green","borderRadius":"2px","flexDirection":"row","width":"90%"}}></div>
         </div>
         <div style={{"display":"flex","color":"gray"}}>
           <div style={{"flex":"1","marginBottom":"10px"}}>Proffesional level 15</div>
           <div>1313</div>
         </div>

     <div style={{"display":"flex","width":"100%" , "borderBottom":"1px solid lightgray","height":"100px"}}>
     <div>
          <img style={{"width":"60px","margin":"10px"}} src={boy} alt="" />
       </div>
       <div style={{"lineHeight":"5px","marginTop":"20px"}}>
        <p><b>Paras jamwal</b></p> 
        <p>Chandigarh</p>
         
         </div>
     </div>
     <div style={{"marginBottom":"10px","height":"3px","borderRadius":"2px","flexDirection":"row","width":"90%"}}>
           <div style={{"height":"4px", "backgroundColor":"purple","borderRadius":"2px","flexDirection":"row","width":"60%"}}></div>
         </div>

         <div style={{"display":"flex","color":"gray"}}>
           <div style={{"flex":"1","marginBottom":"10px"}}>Proffesional level 7</div>
           <div>290</div>
         </div>
     <div  style={{"display":"flex","width":"100%" , "borderBottom":"1px solid lightgray","height":"100px"}}>
     <div>
          <img style={{"width":"60px","margin":"10px"}} src={hacker} alt="" />
       </div>
       <div style={{"lineHeight":"5px","marginTop":"20px"}}>
        <p><b>Rahul</b></p> 
        <p>Banglore</p>
         
         </div>
     </div>
     <div style={{"marginBottom":"10px","height":"3px","borderRadius":"2px","flexDirection":"row","width":"90%"}}>
           <div style={{"height":"4px", "backgroundColor":"yellow","borderRadius":"2px","flexDirection":"row","width":"80%"}}></div>
         </div>
         <div style={{"display":"flex","color":"gray"}}>
           <div style={{"flex":"1","marginBottom":"10px"}}>Proffesional level 11</div>
           <div>7654</div>
         </div>
    </div>
  )
}

export default Body