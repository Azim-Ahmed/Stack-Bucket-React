import React from "react";
import plusIcon from "../../assets/icons/plus-icon.png";
import SUggestions from "../suggestion";
import FilterOverLay from "./FilterOverLay";
const Create = ({ extra, label }) => {
  return (
    <div>
      <div className="section add-item __shadow--sm">
        <div className="add-item__relative">
          <div className="add-item__input">
            <img className="add-item__icon" src={plusIcon} alt={label} />
            <input
              className="add-item__input-field"
              type="text"
              placeholder={label}
            />
          </div>
          {/* Filter OverLay*/}
          <FilterOverLay />
        </div>
        <div className="horizontal-line"></div>
        {/* suggestions Chips */}
        <SUggestions />
      </div>
    </div>
  );
};

export default Create;
