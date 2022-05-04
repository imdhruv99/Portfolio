import Greetings from "../../Containers/Greetings/Greetings";
import Skills from "../../Containers/Skills/Skills";

const Home = (props) => {
  const { theme } = props;
  return (
    <div>
      <Greetings theme={theme} />
      <Skills theme={theme} />
    </div>
  );
};

export default Home;
