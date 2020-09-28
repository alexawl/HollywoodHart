import React from "react";

// reactstrap components
// import {
// } from "reactstrap";

// core components
import ColorNavbar from "components/Navbars/ColorNavbar.js";
import FooterGray from "components/Footers/FooterGray.js";
// sections for this page





import SectionComments from "./index-sections/SectionComments.js";




function Index() {
  document.documentElement.classList.remove("nav-open");
  React.useEffect(() => {
    document.body.classList.add("index-page");
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    return function cleanup() {
      document.body.classList.remove("index-page");
    };
  });
  return (
    <>
      <ColorNavbar />

      <div className="main">
      
      </div>
             

      <SectionComments />
     
  
     
      <FooterGray /> 
    </>
  );
}

export default Index;
