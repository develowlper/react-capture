const capture = (imageRef, ...videoRefs) => {
  return () => {
    const {
      current: { clientHeight, clientWidth }
    } = imageRef;

    const canvas = document.createElement("canvas");
    canvas.width = clientWidth;
    canvas.height = clientHeight;
    const ctx = canvas.getContext("2d");
    videoRefs.forEach(videoRef => {
      const { current: video } = videoRef;
      console.log(video);
      const {
        offsetHeight: height,
        offsetWidth: width,
        offsetTop: top,
        offsetLeft: left
      } = video;
      ctx.drawImage(video, left, top, width, height);
    });
    return canvas.toDataURL();
  };
};

export default capture;
