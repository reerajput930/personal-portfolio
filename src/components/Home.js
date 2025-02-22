import Homeimg from "./images/homeImg.jpg";
import profileimg from "./images/profilepic.jpg";
import Typewriting from "./Typewriting";
import Icons from "./Icons";
import React, { useEffect } from "react";
import github from "./icons/github.png";
import "../index.css";
import style from "./Home.module.css";
import BigScreenNavbar from "./BigScreenNavbar";

export default function Home() {
  return (
    <>
    <div
      className={style.homeBlock}
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection:"column"
      }}
      id="me"
      >
      <BigScreenNavbar/>
      <div className={style.floatRight}>
        {" "}
        <a href="mailto:rajputriya930@gmail.com">rajputriya930@gmail.com</a>
      </div>
      <div className={style.floatLeft}>
        <Icons />
      </div>

      <div className={style.innerBlock}>
        <div>
          <h3 className={style.userup}>Hello World , my name is</h3>
          <h2 className={style.userName}>RIYA RAJPUT (REE) </h2>

          {/* <Typewriting print="Who Brings Imagination into Reality Via Coding!" /> */}
          <h2 className={style.userDesc} id="typewriter">
            Who Brings Imagination into Reality Via Coding!
          </h2>
          <div className={style.userDetail}>
            <p>
            Looking for a {" "}
              <span className={style.hightlight}>CO-OP/internship</span> with
              to kickstart my career in the Tech world. I have a keen interest in network
security, operations, and troubleshooting, Additionally have real-world experience in Frontend, Back-end, and Full-stack development.I am pursuing  <span className={style.hightlight} > postgraduate studies in cybersecurity in Sault College,ON Canada </span> 
to fuel my passion for solving new challenges every day and protecting digital systems
            </p>
            <p>
              I have completed a{" "}
              <span className={style.hightlight}>
                bachelor's in computer science
              </span>  from Guru Nanak Dev University, India.
            </p>
            <p>
              Had the
opportunity to work with  <span className={style.hightlight}>  Microsoft and Google </span>, gaining exposure to security and cloud technologies, Recently I did{" "}
              <span className={style.hightlight}>
                {" "}
                CompTIA Network+
              </span>{" "}
              , and{" "}
              <span className={style.hightlight}>
                {" "}
               ISC2 CC 
              </span>
              , Certifications with tons of Cisco Labs and project.
            </p>
          </div>
          {/* <div className={style.quote} style={{fontFamily:"monospace",fontSize:"21px",fontWeight:"300",marginTop:"10px"}} id="typewriter">Computer Science Graduate! (2023) </div>
          <a href="https://drive.google.com/file/d/1-ewMQOmVygvlwHXwZXdboP8dKdKDNlvy/view?usp=sharing" target="_blank">
          <div className="uni" style={{fontFamily:"monospace",fontSize:"21px",fontWeight:"300",marginTop:"10px",cursor:"pointer",textDecoration: "underline"}} id="typewriter">Guru Nanak Dev University,Amritsar!</div> */}

          {/* </a> */}

          <button className={style.btnContact}> <a target="_blank" href="https://www.linkedin.com/in/riya-rajput-23400a200/"> Contact me </a></button>
        </div>
      </div>
    </div>
    </>
  );
}
