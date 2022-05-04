import React, { useState } from "react";
import styled from "styled-components";

import Home from "./Pages/Home";
import Header from "./components/Header/Header";
import Footer from "./Containers/Footer/Footer";
import GlobalStyles from "./components/Style/GlobalStyles";

const App = () => {
  const [theme, setTheme] = useState("light");

  const Page = styled.div`
    background-color: ${theme !== "light" && "black"};
    color: ${theme !== "light" && "white"};
    transition: all 0.5s ease;
  `;

  return (
    <Page>
      <GlobalStyles />

      <Header theme={theme} setTheme={setTheme} />

      <Home theme={theme} />

      <Footer />
    </Page>
  );
};

export default App;
