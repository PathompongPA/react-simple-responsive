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
    setTimeout(() => {
      console.log(buttonMenu.current.classList);
      buttonMenu.current.classList.toggle("change");
      if (boxMenu.current.style.display === "") {
        boxMenu.current.style.display = "flex";
      } else {
        boxMenu.current.style.display = "";
      }
    }, 100);
  };

  const goto = (element) => {
    element.current?.scrollIntoView(true);
  };

  return (
    <div id="box-navbar">
      <ul id="box-title">
        <div id="box-title-left">
          <div id="title-logo">LOGO</div>
          <div id="box-menu" onClick={showMenu} ref={buttonMenu}>
            <div className="box-hamburger-menu">
              <div className="bar1"></div>
              <div className="bar2"></div>
              <div className="bar3"></div>
            </div>
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
