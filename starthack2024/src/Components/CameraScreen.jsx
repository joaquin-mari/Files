import React, { useRef } from "react";
import Webcam from "react-webcam";
import { MdCameraAlt } from "react-icons/md";
import "./CameraScreen.css";

//This is the camera screen, it uses react webcam to access the laptops camera
//Its still not able however to take pictures yeat

export const CameraScreen = () => {
  const webcamRef = useRef(null);
  const capture = React.useCallback(() => {
    const imageSrc = webcamRef.current.getScreenshot();
    console.log(imageSrc);
  }, [webcamRef]);

  //Here is the Webcam component with a dummy button for taking pictures
  return (
    <div className="screen-inner">
      <Webcam
        audio={false}
        ref={webcamRef}
        screenshotFormat="image/jpeg"
        className="webcam"
      />
      <button className="capture-btn" onClick={capture}>
        <MdCameraAlt size={30} />
      </button>
    </div>
  );
};
