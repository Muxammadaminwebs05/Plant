import React from 'react';
import "./style.scss"
import Button from "../../UI/Button/index.jsx"
import newsImg from "../../assets/images/news.png"
const index = () => {
    return (
      <>
        <div className="container">
          <div className="row news">
            <div className="col-6 news-box1">
              <h2>Subscribe Our Newsletter</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu, at
                tempor, accumsan sit amet nunc cursus.{" "}
              </p>
                        <div className="news-box1-send">
                            <input type="email" placeholder='Enter email...' />
                            <Button data="Subscribe"/>
              </div>
            </div>
            <div className="col-6 news-box2">
              <img src={newsImg} alt="news-img" />
            </div>
          </div>
        </div>
      </>
    );
};

export default index;