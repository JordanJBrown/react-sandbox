import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import "./styles.css";
import pizzaData from "./pizzaData";

function App() {
  const [adjectives, setAdjectives] = useState([]);

  useEffect(() => {
    async function getAdjective() {
      const res = await fetch(
        `https://api.datamuse.com/words?rel_jjb=pizza&max=300`,
      );
      const data = await res.json();
      setAdjectives(data);
    }

    getAdjective();
  }, []);

  return (
    <>
      <Greeting personName="Barney Bubble" />
      <br />
      <div>
        {pizzaData.map((eachPizza) => {
          const randomAdjective =
            adjectives.length > 0
              ? adjectives[Math.floor(Math.random() * adjectives.length)].word
              : "great";
          return (
            <PizzaMenu name={eachPizza.name} adjective={randomAdjective} key={eachPizza.name} />
          );
        })}
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
      <h2 className="text-green-500 text-2xl">
        {props.name} is {props.adjective}!
      </h2>
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
