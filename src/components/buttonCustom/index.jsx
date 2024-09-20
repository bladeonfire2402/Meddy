import React from "react";

const ButtonCustom = ({ description, func }) => {
  return (
    <div className="Button-wrapper ml-1 px-2 text-allwhite bg-lightblue rounded " onClick={func}>
      <h2 className="">{description}</h2>
    </div>
  );
};

export default ButtonCustom;
