import React from "react";
import jessicaAvatar from "../assets/images/avatar-jessica.jpeg";

export default function Card() {
  return (
    <div className="container">
      <div className="card">
        
          <div className="image">
            <img src={jessicaAvatar} alt="" />
          </div>
          <div className="cardBody">
            <h3>Jessica Randall</h3>
            <h6>London, United Kingdom</h6>
            <p>"Front-end developer and avid reader."</p>
          </div>
          <div className="buttons col-sm-12">
            <button type="button" className="btn btn-dark ">
              GitHub
            </button>
            <button type="button" className="btn btn-dark">
              Frontend Mentor
            </button>
            <button type="button" className="btn btn-dark">
              Linkedin
            </button>
            <button type="button" className="btn btn-dark">
              Twitter
            </button>
            <button type="button" className="btn btn-dark">
              Instagram
            </button>
          </div>
      </div>
    </div>
  );
}
