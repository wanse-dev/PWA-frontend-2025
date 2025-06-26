import { Link } from "react-router-dom";
import { sections } from "../../consts/sections";

import "./Navigation.css";

export const Navigation = () => {
  return (
    <div className="tw-navigation">
      <ul>
        {sections.map((section) => (
          <li key={section.link}>
            <Link to={section.link}>{section.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
