import Counter from "./components/Counter";
import Header from "./components/Header";
import "./styles/App.scss";

function App() {
  return (
    <>
      <Header />
      <div id="content">
        <Counter />
      </div>
    </>
  );
}

export default App;
