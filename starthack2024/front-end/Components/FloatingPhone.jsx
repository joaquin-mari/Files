import React, { useState } from "react";
import { PieChart } from "react-minimal-pie-chart";
import { MdCameraAlt, MdHome, MdPersonOutline } from "react-icons/md";
import "./FloatingPhone.css";
import { CameraScreen } from "./CameraScreen";
import { ProfileScreen } from "./ProfileScreen";

//That contains the moch data for our charts
const dataMock = [
  { title: "Proteins", value: 25, color: "#acd1c0" },
  { title: "Greens", value: 20, color: "#ddd4b7" },
  { title: "Calories", value: 30, color: "#deb887" },
  { title: "Fat", value: 25, color: "#201e21" },
];

export default function FloatingPhone() {
  //these are useStates to manage changing the screens
  const [showCamera, setShowCamera] = useState(false);
  const [showProfile, setShowProfile] = useState(false);

  return (
    <div className="floating-phone">
      <div className="screen">
        {
          //this is for managing the different screens
        }
        {showCamera && <CameraScreen />}
        {showProfile && <ProfileScreen />}
        {!showCamera && !showProfile && (
          <div className="chart-and-labels">
            {
              //This part is to create the donut chart on top of the main page
            }
            <div className="chart-container">
              <PieChart data={dataMock} radius={35} lineWidth={50} animate />
            </div>
            {
              //These are for the different bar charts at the middle of the page
              //I mapped through every one of the items in the dataMock to create the barcharts
            }
            <div className="labels-container">
              {dataMock.map((item, index) => (
                <div key={index} className="bar-chart-container">
                  <span>{item.title}</span>
                  <progress
                    data-title={item.title}
                    value={item.value}
                    max="100"
                  />
                </div>
              ))}
            </div>
          </div>
        )}
        {
          //This div contains the navigation bar of my app
          //the setters are for changing from one screen to another
          //I used as icons the icons from react-icons
        }
        <div className="nav-bar">
          <MdCameraAlt
            className="icon"
            onClick={() => {
              setShowCamera(true);
              setShowProfile(false);
            }}
          />
          <MdHome
            className="icon"
            onClick={() => {
              setShowCamera(false);
              setShowProfile(false);
            }}
          />
          <MdPersonOutline
            className="icon"
            onClick={() => {
              setShowCamera(false);
              setShowProfile(true);
            }}
          />
        </div>
      </div>
    </div>
  );
}
