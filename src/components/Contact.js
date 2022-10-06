import React from "react";
import "./Contact.css";

export default function Contact() {
  return (
    <div>
      <br />
      Contact information:
      <ul>
        <li>
          <Link title={"mail"} link="mailto:chichoch@gmail.com" />
        </li>
        <li>
          <Link title="github" link="https://github.com/chichoch" />
        </li>
      </ul>
    </div>
  );
}

const Link = ({ title, link }) => {
  return (
    <a href={link} className="color" target="_blank" rel="noopener noreferrer">
      {title}
    </a>
  );
};
