import React from 'react';
import "./style.scss";
import Navbar from "../../components/Navbar/index.jsx"
import Hero from "../../components/Hero/index.jsx";
import Plants from "../../components/Plants/index.jsx";
import About from "../../components/About/index.jsx";
import Product from "../../components/Product/index.jsx";
import Customers from "../../components/Customers/index.jsx";
import News from "../../components/News/index.jsx";
import Instagram from "../../components/Instagram/index.jsx";
import Footer from "../../components/Footer/index.jsx";
const index = () => {
   return (
     <>
       <header>
         <Navbar />
       </header>
       <main>
         <Hero />
         <Plants />
         <About />
         <Product />
         <Customers />
         <News />
         <Instagram />
         </main>
         <footer>
            <Footer/>
         </footer>
     </>
   );
};

export default index;<h1>Home</h1>