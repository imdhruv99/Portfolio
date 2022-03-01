import { createContext } from "react";
import themeList from "./Data/ThemeList";

const ThemeContext = createContext();
const lightTheme = themeList.light;
const darkTheme = themeList.dark;

const themeReducer = (state, action) => {
  switch (action.type) {
    case "TOGGLE_THEME":
      return {
        theme: state.theme === darkTheme ? lightTheme : darkTheme,
      };
    default:
      return state;
  }
};
export default ThemeContext;
