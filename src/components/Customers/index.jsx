import React from 'react';
import "./style.scss"
import customersimg from "../../assets/images/cus.png"
import userimg from "../../assets/images/user.png"
import vec from "../../assets/images/vec.png";
const index = () => {
    return (
      <>
        <div className="container">
          <div className="row customers">
            <div className="col-6 customers-box1">
              <h2>What Our Customers Says</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu,
                tempor, accumsan sit amet nunc cursus. Nec tristique at in erat
                lectus mas sa diam. Lectus elit, nulla elementum fringilla at.
              </p>
              <div className="customers-box1-slide">
                <div className="customers-box1-slide-user">
                  <div className="customers-box1-slide-user-box1 d-flex">
                    <img src={userimg} alt="user-img" />
                    <span>
                      <h4>Hasanul Islam</h4>
                      <p>Marketing CEO</p>
                    </span>
                  </div>
                  <div className="customers-box1-slide-user-box2">
                    <img src={vec} alt="vec-img" />
                  </div>
                </div>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu,
                  tempor, accumsan sit amet nunc cursus. Nec tristique at in
                  erat lectus mas sa diam. Lectus elit, nulla elementum
                  fringilla at.
                </p>
              </div>
            </div>
            <div className="col-6 customers-box2">
              <img src={customersimg} alt="customers-img" />
            </div>
          </div>
        </div>
      </>
    );
};

export default index;