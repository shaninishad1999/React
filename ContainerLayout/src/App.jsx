import Topmenu from "../components/Topmenu";
import "bootstrap/dist/css/bootstrap.min.css";
import Topbanner from "../components/Topbanner";
import Stucard from "../components/Stucards";

import Container from "react-bootstrap/Container";
const App = () => {
  return (
    <>
      <Container>
        <Topmenu />
        <Topbanner />
        <Stucard />
      </Container>
    </>
  );
};

export default App;
