import GlobalStyles from "../../components/Style/GlobalStyles";
import Header from "../../components/Header/Header";
import Greetings from "../../Containers/Greetings/Greetings";
import Skills from "../../Containers/Skills/Skills";
import Footer from "../../Containers/Footer/Footer";

const Home = () => {
  return (
    <div>
      <GlobalStyles />
      <Header />
      <Greetings />
      <Skills />
      <Footer />
    </div>
  );
};

export default Home;
