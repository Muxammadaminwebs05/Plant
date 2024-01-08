import React from 'react';
import "./style.scss"
import Button from "../../UI/Button/index.jsx"
import heroimg from "../../assets/images/hero.png";
import heroimg2 from "../../assets/images/hero2.png";
import heroimg3 from "../../assets/images/hero3.png";
import heroimg4 from "../../assets/images/hero4.png";
import heroimg5 from "../../assets/images/hero5.png";
  
const index = () => {
    return (
      <>
        <section>
          <div className="container">
            <div className="row hero">
              <div className="col-lg-6 col-md-12 hero-box1">
                <h2>Growing Beautiful Plants at Home</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu,
                  tempor, accumsan sit amet nunc cursus. Nec tristique at in
                  erat lectus mas sa diam. Lectus elit, nulla elementum
                  fringilla at.
                </p>
                <Button data="Learn More" />
                <div className="hero-box1-shows">
                  <span>
                    <h3>2000+</h3>
                    <p>Delivery</p>
                  </span>{" "}
                  <span>
                    <h3>2000+</h3>
                    <p>Delivery</p>
                  </span>{" "}
                  <span>
                    <h3>2000+</h3>
                    <p>Delivery</p>
                  </span>
                </div>
              </div>
              <div className="col-lg-6 col-md-12 hero-box2">
                <img src={heroimg} alt="hero-img" />
                <img src={heroimg2} alt="hero-img" className="hero-box2-img" />
                <img src={heroimg3} alt="hero-img" className="hero-box2-img2" />
                <img src={heroimg4} alt="hero-img" className="hero-box2-img3" />
                <img src={heroimg5} alt="hero-img" className="hero-box2-img4" />
              </div>
            </div>
          </div>
        </section>
      </>
    );
};

export default index;
