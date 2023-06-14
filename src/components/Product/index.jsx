import React from 'react';
import "./style.scss"
import Li from "../../UI/Li/index.jsx"
import plant from "../../assets/images/plant.png";
// import { Button } from 'bootstrap';
import Button from "../../UI/Button/index.jsx"

const index = () => {
    return (
      <>
        <div className="container">
          <div className="product">
            <h2 className="text-center">Our Best Product</h2>
            <ul className="d-flex gap-3 mx-auto justify-content-center">
              <Li LinkData="New Plants" />
              <Li LinkData="New Arrivals" />
              <Li LinkData="Sale" />
            </ul>
            <div className="product-boxes">
              <div className="product-boxes-box">
                <img src={plant} alt="plant-img" />
                <h4>Outdoor Plant</h4>
                <span>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                </span>
                <p>$50.00</p>
              </div>{" "}
              <div className="product-boxes-box">
                <img src={plant} alt="plant-img" />
                <h4>Outdoor Plant</h4>
                <span>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                </span>
                <p>$50.00</p>
              </div>{" "}
              <div className="product-boxes-box">
                <img src={plant} alt="plant-img" />
                <h4>Outdoor Plant</h4>
                <span>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                </span>
                <p>$50.00</p>
              </div>{" "}
              <div className="product-boxes-box">
                <img src={plant} alt="plant-img" />
                <h4>Outdoor Plant</h4>
                <span>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                </span>
                <p>$50.00</p>
              </div>
            </div>
            <div className="btns">
              <Button data="View All" />
            </div>
          </div>
        </div>
      </>
    );
};

export default index;