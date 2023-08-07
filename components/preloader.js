import React, { useEffect } from "react";
import { preLoaderAnim } from "../animations";
import styles from "../css/preloader.module.css";

function Preloader() {
  useEffect(() => {
    preLoaderAnim();
  }, []);

  return (
    <div className={`${styles.preloader} preloader`}>
      <div
        className={`${styles.textContainer} texts-container`}
      >
        <span className=" md:hidden mr-3 text-transparent bg-clip-text bg-gradient-to-b from-[#FF4BCE] to-[#860EFF]">
          TetraTechSol
        </span>
        <span className=" hidden md:block mr-3 text-transparent bg-clip-text bg-gradient-to-b from-[#FF4BCE] to-[#860EFF]">
          Development,
        </span>
        <span className=" hidden md:block mr-3 text-transparent bg-clip-text bg-gradient-to-b from-[#FF4BCE] to-[#860EFF]">
          Design,
        </span>
        <span className=" hidden md:block mr-3 text-transparent bg-clip-text bg-gradient-to-b from-[#FF4BCE] to-[#860EFF]">
          Animation,
        </span>
        <span className=" hidden md:block mr-3 text-transparent bg-clip-text bg-gradient-to-b from-[#FF4BCE] to-[#860EFF]">
          Marketing
        </span>
      </div>
    </div>
  );
}

export default Preloader;
