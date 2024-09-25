import React from "react";


const RoundedButton = ({ description, func }) => {
  return (
    <div className="Button-wrapper ml-1 px-2 text-allwhite bg-lightblue rounded-lg " onClick={func}>
      <h6 className="mb-0">{description}</h6>
    </div>
  );
};

export default RoundedButton
