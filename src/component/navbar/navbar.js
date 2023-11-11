import { useRef } from "react";
import "./navbar.css";
export default function Navbar() {
  const buttonMenu = useRef();
  const boxMenu = useRef();
  const showMenu = () => {
    console.log(boxMenu.current.style);
    if (boxMenu.current.style.display === "") {
      boxMenu.current.style.display = "block";
    } else {
      boxMenu.current.style.display = "";
    }
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
          <li id="title-home">home</li>
          <li id="title-product">product</li>
          <li id="title-about">about</li>
          <li id="title-contact">contact</li>
        </div>
      </ul>
    </div>
  );
}
