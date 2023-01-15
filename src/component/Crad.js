/* eslint-disable jsx-a11y/alt-text */
import {
  BsLink45Deg,
  BsGithub,
  BsDiscord,
  BsPersonCircle,
} from "react-icons/bs";

import React from "react";

function Crad() {
  return (
    <>
      <h1>PROCARD</h1>
      <div class="card">
        <div class="blob"></div>
        <span class="img">
          <BsPersonCircle />
        </span>
        <h2>
          ADY<br></br>
          <br></br>
          <span>MASIVI</span>
          <br></br>
          <h4 className="metier">Dev. Web</h4>
        </h2>
        <p>
          <div className="logo">
            <a href="https://ady-masivi.vercel.app/">
              {" "}
              <BsLink45Deg />
            </a>
          </div>
          <div className="logo">
            <a href="https://discord.com/channels/@me">
              <BsDiscord />
            </a>
          </div>
          <div className="logo">
            <a href="https://github.com/ady243">
              {" "}
              <BsGithub />
            </a>
          </div>
        </p>
      </div>
    </>
  );
}

export default Crad;
