import React from "react";

function Footer() {
  var current_Year = new Date().getFullYear();
  return (
    <footer>
      <p>Copyright @ {current_Year}</p>
    </footer>
  );
}

export default Footer;
