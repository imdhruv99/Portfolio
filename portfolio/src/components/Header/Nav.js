import { Link } from "react-scroll";
import "./Header.css";
import ThemeSwitcher from "./ThemeSwitcher";

const Nav = () => {
  return (
    <div className="navMenu">
      <ul>
        <li>
          <Link to="home">Home</Link>
        </li>
        <li>
          <Link to="Education">Education</Link>
        </li>
        <li>
          <Link to="Experience">Experience</Link>
        </li>
        <li>
          <Link to="Projects">Projects</Link>
        </li>
        <li>
          <Link to="Contact">Contact Me</Link>
        </li>
        <li>
          <ThemeSwitcher />
        </li>
      </ul>
    </div>
  );
};

export default Nav;
