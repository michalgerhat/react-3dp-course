import React from "react";
import ExternalSourceIcon from "./ExternalSourceIcon";
import "./_footer.css";

export default function Footer() {
  return (
    <div className="footer">
      <p>&copy; Michal Gerhát, Pedagogická fakulta, Univerzita Karlova, 2023.&nbsp;
        <a
          href="https://github.com/michalgerhat/react-3dp-course"
          target="_blank"
          rel="noopener noreferrer"
        >
          Link to GitHub&nbsp;
          <ExternalSourceIcon />
        </a>
      </p>
    </div>
  );
}