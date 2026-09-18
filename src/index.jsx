import React from "react";
import ReactDOM from "react-dom/client";
import "./styles.css";
import pizzaData from "./pizzaData";


function App() {
  return (
    <>
      <Greeting personName="Barney Bubble"/>
      <div>
        {pizzaData.map((eachPizza) => <PizzaMenu name={eachPizza.name} />)}
      </div>
    </>
  );
}

function Greeting(dumdums) {
  return (
    <h1 className="text-red-500 text-3xl text-bold">
      Hello React!!! And Hello {dumdums.personName}
    </h1>
  );
}

function PizzaMenu(props) {
  return (
    <>
      <h2 className="text-green-500 text-2xl">{props.name} is great!</h2>
    </>
  );
}

const my_react_app = document.getElementById("app");
const app = ReactDOM.createRoot(my_react_app);

app.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
