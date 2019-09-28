import React, { forwardRef, useEffect } from "react";
import PropTypes from "prop-types";

const Video = forwardRef(({ src, type, ...props }, ref) => {
  if (!ref) {
    throw new Error(
      "ref is undefined or null. Video needs a ref to work properly."
    );
  }
  return (
    <video ref={ref} {...props}>
      <source src={src} type={type} />
      Your browser does not support the video tag.
    </video>
  );
});

Video.propTypes = {
  src: PropTypes.string.isRequired,
  type: PropTypes.oneOf(["video/ogg", "video/mp4", "video/ogg"])
};

export default Video;
