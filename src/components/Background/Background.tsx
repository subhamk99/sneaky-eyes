import { MouseEventHandler, useEffect, useState } from "react";
import "./Background.css";

export const Background = () => {

  const [anchorX, setAnchorX] = useState(0);
  const [anchorY, setAnchorY] = useState(0);
  useEffect(() => {
    const rekt = document.getElementById("bg__image")?.getBoundingClientRect();
    setAnchorX(rekt!.left + rekt!.width / 2);
    setAnchorY(rekt!.top + rekt!.height / 2);
  }, []);

  const handleMouseMove: MouseEventHandler | undefined = (event) => {
    const angleDeg = angle(event.clientX, event.clientY, anchorX, anchorY);
    const eyes= document.getElementsByClassName("eye") as HTMLCollectionOf<HTMLElement>;
    Array.from(eyes).forEach(eye => {
      eye.style.transform = `rotate(${90 + angleDeg}deg)`; 
    })
    
  };

  const angle = (cx:number,cy:number, ex:number,ey:number) => {
    const dy = ey - cy;
    const dx = ex - cx;
    const rad = Math.atan2(dy,dx);
    const deg = rad * 180 / Math.PI;
    return deg;
  }
  return (
    <div onMouseMove={handleMouseMove} className="bg__wrapper">
      <img
        id="bg__image"
        src="./rick_and_morty.jpg"
        alt="background_image"
      ></img>
      <div id="eyes">
        <img
          className="eye"
          src="./eye.png"
          alt="eye_image"
          style={{ top: "450px", right: "180px" }}
        ></img>
        <img
          className="eye"
          src="./eye.png"
          alt="eye_image"
          style={{ top: "420px", right: "40px" }}
        ></img>
        <img
          className="eye"
          src="./eye.png"
          alt="eye_image"
          style={{ top: "130px", right: "-130px" }}
        ></img>
        <img
          className="eye"
          src="./eye.png"
          alt="eye_image"
          style={{ top: "120px", left: "190px" }}
        ></img>
      </div>
    </div>
  );
};
