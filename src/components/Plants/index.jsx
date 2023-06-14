import React from 'react';
import "./style.scss";
import plant from "../../assets/images/plant.png"
const index = () => {
    return (
      <>
        <div className="container">
          <div className="row plants-row">
            <div className="col-4 plants1">
              <h2>We have lots of plants collection for you and your family</h2>
              <a href="#">
                See all collection <i className="fa-regular fa-arrow-right"></i>
              </a>
            </div>
            <div className="col-8 plants2">
              <div className="plant-box">
                <img src={plant} alt="plant-img" />
              </div>
              <div className="plant-box">
                <img src={plant} alt="plant-img" />
              </div>
              <div className="plant-box">
                <img src={plant} alt="plant-img" />
              </div>
            </div>
          </div>
        </div>
      </>
    );
};

export default index;