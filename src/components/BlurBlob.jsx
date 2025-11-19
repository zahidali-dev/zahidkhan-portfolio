// components/BlurBlob.jsx
import React from "react";
import PropTypes from "prop-types";

const BlurBlob = ({ position, size, color = "#000000" }) => {
  const { top, left } = position;
  const { width, height } = size;

  return (
    <div
      className="absolute"
      style={{
        top: top,
        left: left,
        width: width,
        height: height,
        transform: "translate(-50%, -50%)",
        pointerEvents: "none", // avoids blocking clicks
      }}
    >
      <div
        style={{
          width: "100%",
          height: "100%",
          backgroundColor: color,
          borderRadius: "50%",
          filter: "blur(60px)",
          opacity: 0.9,
        }}
      />
    </div>
  );
};

BlurBlob.propTypes = {
  position: PropTypes.shape({
    top: PropTypes.string,
    left: PropTypes.string,
  }),
  size: PropTypes.shape({
    width: PropTypes.string,
    height: PropTypes.string,
  }),
  color: PropTypes.string,
};

export default BlurBlob;
