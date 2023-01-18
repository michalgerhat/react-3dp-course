import React, { useEffect } from "react";
import ArrowDown from "./ArrowDown";

export default function TitleArrowDown() {
  const [show, setShow] = React.useState(true);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY === 0) {
        setShow(true);
      }
      else {
        setShow(false);
      }
    });
    return () => window.removeEventListener("scroll", () => {});
  }, []);

  return (
    <div className={`title-arrow ${!show && "title-arrow-hidden"}`}>
      <a href="#chapter-list">
        <ArrowDown />
      </a>
    </div>
  );
}