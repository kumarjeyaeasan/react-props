import React from "react";

function Cards(props) {
  return (
    <div>
      <div className="card">
        <div className="top">
          <h2 className="name">{props.title}</h2>
          <img className="circle-img" src={props.imgSrc} alt="avatar_img" />
        </div>
        <div className="bottom">
          <p className="info">{props.ph}</p>
          <p className="info">{props.email}</p>
        </div>
      </div>
    </div>
  );
}

export default Cards;
