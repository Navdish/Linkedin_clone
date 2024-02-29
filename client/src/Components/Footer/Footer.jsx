import React from "react";
import "./Footer.css";
import Logo from "../../assets/svg/black-linkedin.svg";
import { Box } from "@mui/material";

const Footer = () => {
  return (
    <Box className="footBox" sx={{ display:"flex", flexDirection:"row", alignItems:"center", backgroundColor:"white", height:"40px"}}>

       <ul className="footer-content" type="none">
        <li>
          <span className="footer-year">
          <img src={Logo} alt='icon'  ></img>
           © 2024 </span>
        </li>
        
        <li>About</li>
        <li>Accessibility</li>
        <li>User Agreement</li>
        <li>Privacy Policy</li>
        <li>Cookie Policy</li>
        <li>Copyright Policy</li>
        <li>Brand Policy</li>
        <li>Guest Controls</li>
        <li>Community Guidelines</li>
        <li>Language</li>
        </ul>
    </Box>
  );
};
export default Footer;