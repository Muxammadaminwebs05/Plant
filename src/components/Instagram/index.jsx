import React from 'react';
import "./style.scss"
import instagram from "../../assets/images/instagram.png";
import ins from "../../assets/images/ins.png";
const index = () => {
    return (
      <>
        <div className="container">
          <div className="row instagram">
            <h2>Follow Us on Instagram</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu,
              tempor, accu msan sit amet nunc cursus. Nec tristique at in erat
              lectus
            </p>
            <div className="instagram-boxes">
              <div className="instagram-boxes-box">
                <img src={instagram} alt="instagram" />
                <div className="instagram-boxes-box-small">
                  <img src={ins} alt="" />
                </div>
              </div>{" "}
              <div className="instagram-boxes-box">
                <img src={instagram} alt="instagram" />
                <div className="instagram-boxes-box-small">
                  <img src={ins} alt="" />
                </div>
              </div>{" "}
              <div className="instagram-boxes-box">
                <img src={instagram} alt="instagram" />
                <div className="instagram-boxes-box-small">
                  <img src={ins} alt="" />
                </div>
              </div>{" "}
              <div className="instagram-boxes-box">
                <img src={instagram} alt="instagram" />
                <div className="instagram-boxes-box-small">
                  <img src={ins} alt="" />
                </div>
              </div>{" "}
              <div className="instagram-boxes-box">
                <img src={instagram} alt="instagram" />
                <div className="instagram-boxes-box-small">
                  <img src={ins} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
};

export default index;