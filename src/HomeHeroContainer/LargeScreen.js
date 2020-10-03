import React, { useState, useEffect } from "react";
import "./css/homehero.css";
import Hero from "../lotties/Hero.jpg";

const LargeScreen = () => {
  const [offset, setOffset] = useState(0);
  useEffect(() => {
    function handleScroll() {
      setOffset(window.pageYOffset);
    }
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="bacground transparent ">
      <section className="hero">
        <div className="image">
          <img
            src={Hero}
            alt="Hero"
            className="parallax"
            style={{
              transform: `translateY(${offset * 0.35}px)`,
            }}
          />
        </div>
  <div className="w-100 flex justify-center cont" >
  <div className="w-90 " style={{ color: "#311B92" }}>
  <div className="w-40   fw7">
            <div className=" w-100 fs-normal " style={{ fontSize: "3vw" }}>
              CREATE A UGANDA
            </div>
            <div className=" w-100" style={{ fontSize: "3vw" }}>
              FOR EVERY CITIZEN
            </div>
          </div>
  <div className="Hbtn  mt3 flex redbg justify-center  hover-bg-dark-red items-center pt2 pb2 pointer" style={{width:"10vw"}}>
            <div className="fw7" style={{ fontSize: "1.2vw", color: "#ffffff", }}>GET INVOLVED</div>
          </div>
  </div>
  </div>
      </section>
    </div>
  );
};
export default LargeScreen;
