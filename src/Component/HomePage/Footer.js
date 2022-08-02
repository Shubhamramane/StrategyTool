import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
const FooterPage = () => {
  return (
    <MDBFooter color="blue" className="font-small pt-4 mt-4">
      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid><p className="footer"> &copy; {new Date().getFullYear()} Copyright: <a href="#"> All Rights Reserved. Design & Developed by Hands In Technology</a></p>
         
        </MDBContainer>
      </div>
    </MDBFooter>
  );
}
export default FooterPage;