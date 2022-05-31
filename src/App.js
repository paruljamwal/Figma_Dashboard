
import './App.css';
import Navbar from './Components/Navbar';
import Body from './Components/Body';
import { useContext } from 'react';
import { ThemeContext } from './Context/ThemeContext';
import SideBar from './Components/SideBar';

function App() {
  const {isLight}=useContext(ThemeContext)
  return (
    <div className={`App ${ isLight ? "light" : "dark"}`}>
      <div style={{"display":"flex"}}>
        <div style={{"width":"60px","backgroundColor":"white" , "height":"620px"}}>
            <SideBar></SideBar>
        </div>
        <div>
     <Navbar></Navbar>
     <Body/>
        </div>
      </div>
    </div>
  );
}

export default App;
