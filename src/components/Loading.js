import React from "react";
import animationData from "../LoaderAnimation.json";
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
    <div style={{display:"flex", width:"100%", height:"fit-content"}}>
      <Lottie options={defaultOptions} height={70} width={70} />
    </div>
  );
};

export default Loading;
