import "./ThemeSwitcher.css";

const ThemeSwitcher = () => {
  return (
    <div>
      <label className="switch">
        <input type="checkbox" id="switcher" />
        <span className="slider round"></span>
      </label>
      {/* <div id="toggle">
      <i className="indiator"></i>
    </div> */}
    </div>
  );
};

export default ThemeSwitcher;
