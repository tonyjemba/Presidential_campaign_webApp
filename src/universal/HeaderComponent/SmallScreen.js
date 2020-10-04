import React, { useState, useEffect } from "react";
import {  Space, Badge, Drawer } from "antd";
import Sticky from "react-sticky-el";
import vote from "../../lotties/vote.png";
import {  GrFacebook, GrTwitter ,GrMapLocation} from "react-icons/gr";
import { RiInstagramFill } from "react-icons/ri";
import { MdMyLocation } from "react-icons/md";
import { CgClose, CgMenu } from "react-icons/cg";
import { IoMdCart } from "react-icons/io";
import { IconContext } from "react-icons";

const SmallScreen = () => {
  const [headerBg, setheaderBg] = useState("");
  const [drawer, setDrawer] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 100) {
        setheaderBg("bg-white");
      } else {
        setheaderBg("");
      }
    });
  });
  const fullHeight = global.window.innerHeight;
  const hideDrawer = () => {
    setDrawer(false);
  };
  return (
    <Sticky topOffset={100} stickyClassName={`${headerBg} w-100 betop`}>

    <div className="w-100  flex justify-center">
      <div className=" w-90">
        <Drawer
          title={
            <div className="flex flex-row justify-between">
              <div className=" pointer logo ">
                    <img src={vote} alt="logo" height={40} />
                  </div>
              <div className=" pointer" onClick={() => setDrawer(false)}>
                <IconContext.Provider
                  value={{
                    color: "white",
                    size: "30px",
                  }}>
                  <div className="pointer  ">
                    <CgClose />
                  </div>
                </IconContext.Provider>
              </div>
            </div>
          }
          height={fullHeight}
          placement="top"
          headerStyle={{ borderBottom: "0px", backgroundColor: "#0C0474" }}
          footerStyle={{ backgroundColor: "#0C0474", borderTop: "0px" }}
          bodyStyle={{ backgroundColor: "#0C0474" }}
          closable={false}
          onClose={hideDrawer}
          visible={drawer}
          footer={
            <div className="flex justify-center items-center">
              <Space size="large">
                <div className=" mt1 items-center flex justify-center">
                  <IconContext.Provider
                    value={{
                      color: "white",
                      size: "15px",
                      // className: "global-class-name",
                    }}>
                    <div className="pointer  ">
                      <GrFacebook />
                    </div>
                  </IconContext.Provider>
                </div>
                <div className=" mt1 items-center flex justify-center">
                  <IconContext.Provider
                    value={{
                      color: "white",
                      size: "15px",
                      // className: "global-class-name",
                    }}>
                    <div className="pointer  ">
                      <GrTwitter />
                    </div>
                  </IconContext.Provider>
                </div>
                <div className=" mt1 items-center flex justify-center">
                  <IconContext.Provider
                    value={{
                      color: "white",
                      size: "15px",
                      // className: "global-class-name",
                    }}>
                    <div className="pointer  ">
                      <RiInstagramFill />
                    </div>
                  </IconContext.Provider>
                </div>
                <div className=" mt1 items-center white flex justify-center">
                <IconContext.Provider
                        value={{
                          color: "#ffffff",
                          size: "15.5px",
                        }}>
                        <div className="pointer white  ">
                          <MdMyLocation />
                        </div>
                      </IconContext.Provider>
                </div>
              </Space>
            </div>
          }>
          <div className="flex justify-center flex-column mt4 items-center">
            <Space direction="vertical" size="large">
              <div className="pointer tc white">HOME</div>
              <div className="pointer tc white">EVENTS</div>
              <div className="pointer tc white">NEWS</div>
              <div className="pointer tc white">VIDEOS</div>
              <div className="pointer tc white">ABOUT</div>
              <div className="pointer tc white">CONTACT</div>
              <div className="pointer tc white">STORE</div>
            </Space>
          </div>
        </Drawer>
        
        <div className="flex flex-row justify-between mt2 mb2">
          <div>
            <div className="pointer  mt2" onClick={() => setDrawer(true)}>
              <IconContext.Provider
                value={{
                  color: "#0C0474",
                  size: "30px",
                }}>
                <div className="pointer  ">
                  <CgMenu />
                </div>
              </IconContext.Provider>
            </div>
          </div>
          <div className="w-25 flex    justify-end">
                  <Space size="large">
                    <div>
                      <Badge color="#ff0000" showZero={true} offset={[4, 3]} count={0}>
                        <div className=" mt1 items-center flex justify-center">
                          <IconContext.Provider
                            value={{
                              color: "#0C0474",
                              size: "19px",
                            }}>
                            <div className="pointer  ">
                              <IoMdCart />
                            </div>
                          </IconContext.Provider>
                        </div>
                      </Badge>
                    </div>
                    <div className="tosection hover-bg-dark-red pointer pa2 pl3 pr3 Hbtn">
                      <div className="pointer fw7" style={{ color: "#311B92" }}>
                        DONATE
                      </div>
                    </div>
                  </Space>
                </div>
        </div>
      </div>
    </div>
    </Sticky>

  );
};
export default SmallScreen;
