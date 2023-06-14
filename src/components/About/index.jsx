import React from 'react';
import "./style.scss"
import Button from "../../UI/Button/index.jsx"
const index = () => {
    return (
      <>
        <div className="container">
          <div className="row about">
            <div className="col-6 about-box1"></div>
            <div className="col-6 about-box2">
              <a href='#'>About Us</a>
              <h2>Continue to Develop to Became Global Company</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu,
                tempor, accumsan sit amet nunc cursus. Nec tristique at in erat
                lectus mas sa diam. Lectus elit, nulla elementum fringilla at.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu,
                tempor, accumsan sit amet nunc cursus. Nec tristique at in erat
                lectus mas sa diam. Lectus elit, nulla elementum fringilla at.
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu,
                tempor, accumsan sit amet nunc cursus.{" "}
              </p>
              <Button data="Read More" />
            </div>
          </div>
        </div>
      </>
    );
};

export default index;