import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles.css';

const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];


console.log(pizzaData);
console.log(pizzaData[0]);

let newPizzaData = pizzaData.map(pizza => {
    return pizza.name;
});
console.log(newPizzaData);

function App() {
    return (
        <>
        <h1 className="text-red-500 text-3xl text-bold">Hello React!!!</h1>
        <Pizza />
        </>
    )
}

function Pizza() {
    return <h2 className="text-green-500 text-2xl">Pizza is great!...Sometimes</h2>
}

const my_react_app = document.getElementById('app');
const app = ReactDOM.createRoot(my_react_app);


app.render(
<React.StrictMode>
    <App />
</React.StrictMode>
);