import React, { useRef, useState } from "react";
import Video from "../src/Video";
import useCapture from "../src/useCapture";

const defaultProps = {
  src: "./big-buck-bunny_trailer.webm"
};

export default {
  component: Video,
  title: "Video"
};

export const autoplay = () => {
  const ref = useRef();
  return <Video ref={ref} {...defaultProps} autoPlay />;
};

export const control = () => {
  const ref = useRef();

  const play = () => ref.current.play();
  const pause = () => ref.current.pause();
  const stop = () => ref.current.load();

  return (
    <div>
      <div>
        <button onClick={play}>Play</button>
        <button onClick={pause}>Pause</button>
        <button onClick={stop}>Stop</button>
      </div>
      <Video ref={ref} {...defaultProps} crossOrigin="anonymous" />
    </div>
  );
};

export const noRef = () => {
  return <Video {...defaultProps} />;
};

export const capture = () => {
  const ref = useRef();
  const [image, setImage] = useState();
  const capture = useCapture(ref, ref);

  return (
    <div>
      <div>
        <button onClick={() => setImage(capture())}>Capture</button>
      </div>
      <div style={{ display: "flex" }}>
        <Video ref={ref} {...defaultProps} autoPlay loop />
        <img src={image} width={320} height={360} />
      </div>
    </div>
  );
};

export const noRequiredProps = () => {
  const ref = useRef();

  return <Video ref={ref} />;
};
