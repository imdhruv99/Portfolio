import "./Header.css";
import Nav from "./Nav";

const Header = (props) => {
  const { theme, setTheme } = props;

  return (
    <div className="navigation">
      <div className="logo" style={{ color: theme !== "light" && "white" }}>
        Dhruv Prajapati
      </div>
      <Nav theme={theme} setTheme={setTheme} />
    </div>
  );
};

export default Header;
