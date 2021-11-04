import React from "react";
import animationData from "../LoadingAnimation.json";
import Lottie from "react-lottie";

const Loading = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <div style={{display:"flex", width:"100%", height:"100vh"}}>
      <Lottie options={defaultOptions} height={350} width={350} />
    </div>
  );
};

export default Loading;
