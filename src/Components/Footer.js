import React, { useEffect, useState, handleClose } from "react";

function Footer() {
  return (
    <div className="footerBox">
      <footer className="footer text-center pt-2 pb-2 text-white">
        <div className="container">
          <h5 className="text-uppercase mb-4">Location</h5>
          <p className=" mb-0 text-smoke">
            South Florida
            <br />
            United States
          </p>
        </div>
      </footer>
      <div className="copyright py-2 text-center text-white">
        <div className="text-smoke container">
          <small>Copyright © AlexKpot 2021</small>
        </div>
      </div>
    </div>
  );
}

export default Footer;
