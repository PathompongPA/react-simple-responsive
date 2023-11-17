import "./footer.css";
import logo from "../../assets/images/logo.jpg";
export default function Footer() {
  return (
    <div id="box-footer">
      <div id="box-footer-logo" className="box-footer">
        <div id="footer-logo-image-box">
          <img id="footer-logo-image" src={logo} alt="logo"></img>
        </div>
        <p id="footer-logo-title">
          This is my practice web development one site responsive design
        </p>
      </div>

      <div id="box-footer-contact" className="box-footer">
        <h4 id="footer-contact-title" className="title-footer">
          Contact
        </h4>
        <p className="text-footer">tel : 096-165-1363</p>
        <p className="text-footer">email : pathompong.litk@email.com</p>
        <p className="text-footer">address : address</p>
        <p className="text-footer">line ID : lineUser</p>
      </div>

      <div id="box-footer-follow" className="box-footer">
        <h4 className="title-footer">follow</h4>
        <p className="text-footer">facebook</p>
        <p className="text-footer">instagram</p>
        <p className="text-footer">line</p>
      </div>

      <div id="box-footer-about" className="box-footer">
        <h4 className="title-footer">about</h4>
        <p className="text-footer">Home</p>
        <p className="text-footer">Product</p>
        <p className="text-footer">About</p>
        <p className="text-footer">Contact</p>
      </div>
    </div>
  );
}
