import React from "react";
import { FaYoutube, FaTwitter } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { Link } from "react-router-dom";

const socialLinks = [
  {
    id: 1,
    path: "/",
    icon: <FaTwitter className="text-2xl" />,
  },
  {
    id: 2,
    path: "/",
    icon: <FaYoutube className="text-2xl" />,
  },
  {
    id: 3,
    path: "/",
    icon: <FaFacebookF className="text-2xl" />,
  },
];

function Footer() {
  return (
    <footer className="footer sm:footer-horizontal bg-neutral text-neutral-content items-center p-4">
      <div className="text-center">
        <p>Copyright © {new Date().getFullYear()} - All right reserved</p>
      </div>
    </footer>
  );
}

export default Footer;
