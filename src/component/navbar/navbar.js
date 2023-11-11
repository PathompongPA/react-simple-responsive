import { useRef } from "react";
import "./navbar.css";
export default function Navbar() {
  const buttonMenu = useRef();
  const boxMenu = useRef();
  const home = useRef();
  const product = useRef();
  const about = useRef();
  const contact = useRef();
  const showMenu = () => {
    console.log(boxMenu.current.style);
    if (boxMenu.current.style.display === "") {
      boxMenu.current.style.display = "flex";
    } else {
      boxMenu.current.style.display = "";
    }
  };
  const goto = (element) => {
    element.current?.scrollIntoView(true);
  };
  return (
    <div id="box-navbar">
      <ul id="box-title">
        <div id="box-title-left">
          <li id="title-logo">LOGO</li>
          <div id="box-menu" onClick={showMenu} ref={buttonMenu}>
            {">>"}
          </div>
        </div>
        <div id="box-title-right" ref={boxMenu}>
          <li id="title-home" className="title-sub-menu" onClick={goto(home)}>
            home
          </li>
          <li
            id="title-product"
            className="title-sub-menu"
            onClick={goto(product)}
          >
            product
          </li>
          <li id="title-about" className="title-sub-menu" onClick={goto(about)}>
            about
          </li>
          <li
            id="title-contact"
            className="title-sub-menu"
            onClick={goto(contact)}
          >
            contact
          </li>
        </div>
      </ul>
    </div>
  );
}
