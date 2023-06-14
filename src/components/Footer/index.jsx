import React from 'react';
import "./style.scss";
import foot1 from "../../assets/images/foot1.png";
import foot2 from "../../assets/images/foot2.png";
import foot3 from "../../assets/images/foot3.png";
import Li from "../../UI/Li/index.jsx"
const index = () => {
   return (
     <>
       <div className="container">
         <div className="footer">
           <div className="footer-left">
             <h2>Plant</h2>
             <p>
               Lorem ipsum dolor sit amet, consectetur adi piscing elit. Diam
               nibh posuere duis eu non sit integer at placerat amet.
             </p>
             <div className="footer-left-links">
               <a href="#">
                 <img src={foot1} alt="img" />
               </a>
               <a href="#">
                 <img src={foot2} alt="img" />
               </a>
               <a href="#">
                 <img src={foot3} alt="img" />
               </a>
             </div>
           </div>
           <div className="footer-right">
             <ul>
               Navigation
               <Li LinkData="Home" className="saq" />
               <Li LinkData="About" />
               <Li LinkData="Help & Support" />
               <Li LinkData="Product" />
             </ul>{" "}
             <ul>
               About Us
               <Li LinkData="Contact" />
               <Li LinkData="Address" />
               <Li LinkData="Blog" />
               <Li LinkData="About Us" />
             </ul>
             <ul>
               Help
               <Li LinkData="Coustomers Services" />
               <Li LinkData="FAQs" />
               <Li LinkData="We Are Hiring" />
               <Li LinkData="Returns" />
             </ul>
           </div>
         </div>
       </div>
     </>
   );
};

export default index;