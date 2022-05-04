import React from "react";
import "./footer.css";
import { SiGmail } from "react-icons/si";
import { BsTelegram } from "react-icons/bs";
import { IoLogoWhatsapp } from "react-icons/io";
import { BsLinkedin } from "react-icons/bs";
// import { BsFacebook } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { SiUpwork } from "react-icons/si";
export default function Footer() {
  return (
    <footer>
      <a href="" className="footer__logo">
        AppXNext
      </a>

      <div className="footer__socials">
        <a href="mailto:robeltsegay1212@gmail.com">
          <SiGmail></SiGmail>
        </a>
        <a href="https://github.com/Robeltsegay" target="_blank">
          <BsGithub />
        </a>
        <a href="https://www.linkedin.com/feed/" target="_blank">
          <BsLinkedin />
        </a>
        <a
          href="https://www.upwork.com/nx/job-post/instant/title"
          target="_blank"
        >
          <SiUpwork />
        </a>
      </div>
      <div className="footer__copyright">
        <small>&copy; AppXNext. All rights reserved</small>
      </div>
    </footer>
  );
}
