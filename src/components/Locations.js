import React from "react";
import { useState, useEffect } from "react";
import "./Locations.css";

const Locations = (props) => {
  const [seeMore, setSeeMore] = useState("...see more");
  const { id, image, name, price, info } = props.obj;

  const [text, setText] = useState(info.substring(0, 80));

  const seeClick = () => {
    if (seeMore == "...see more") {
      setSeeMore("...see less");
      setText(info);
    } else {
      setSeeMore("...see more");
      setText(info.substring(0, 80));
    }
  };

  return (
    <>
      <div className="card">
        <img src={image} className="location-img" />
        <div className="top-info">
          <span className="info-name">{name}</span> <span className="info-price"> ${price} </span>
        </div>
        <p className="info">
          {text}{" "}
          <span
            className="see-more"
            onClick={() => {
              seeClick();
            }}
          >
            {seeMore}
          </span>
        </p>
      </div>
    </>
  );
};

export default Locations;
