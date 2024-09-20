import Header from "./Header";
import Footer from "./Footer";
import MyData from "./MyData";
import Cybrom from "./Cybrom";
const App = () => {
  return (
    <>
      <h1>Hello New Node</h1>
      {/* <h3>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi eum
        eligendi similique accusantium nesciunt quam, aliquid temporibus tenetur
        tempora nihil debitis magni aperiam obcaecati totam molestias ullam aut,
        quasi dolores. Optio non aut distinctio possimus ab quaerat suscipit
        harum aperiam!
      </h3>
      <h1>
        In React, there are two types of components:
        <br />
        1) Functional Component: A type of component in React that is defined as
        a JavaScript function and typically returns JSX to render content.
        <br />
        2) Class Component: A type of component in React that is defined using
        ES6 classes and extends from React.Component, allowing for the use of
        lifecycle methods and state.
      </h1>
      <br />
      <br /> */}
      <Header />
      <Cybrom />
      <MyData />
      <Footer />
    </>
  );
};

export default App;
