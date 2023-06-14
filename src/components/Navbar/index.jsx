import React from 'react';
import "./style.scss";
import Li from "../../UI/Li/index.jsx"
import Button from "../../UI/Button/index.jsx"
const index = () => {
   return (
     <>
       <div className="container">
         <nav className='nav'>
           <div className="nav-left">
             <h1>Plant</h1>
           </div>
           <ul className="nav-center">
             <Li LinkData="Home" />
             <Li LinkData="Services" />
             <Li LinkData="About Us" />
             <Li LinkData="Blog" />
             <Li LinkData="Contact" />
           </ul>
           <div className="nav-right">
             <Li LinkData="Login" />
             <Button data="Sing Up" />
           </div>
         </nav>
       </div>
     </>
   );
};

export default index;