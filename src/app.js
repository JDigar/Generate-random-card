/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  document.querySelector(".number").innerHTML = generateRandomNumber();
  document.querySelector(".top-suit").innerHTML = randomSimbol;
  document.querySelector(".bottom-suit").innerHTML = randomSimbol;
};

const generateRandomNumber = () => {
  let numbers = [
    "A",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K"
  ];
  let indexNumbers = Math.floor(Math.random() * numbers.length);
  return numbers[indexNumbers];
};

const generateRandomsimbol = () => {
  let simbol = ["♦", "♥", "♠", "♣"];
  let indexSimbol = Math.floor(Math.random() * simbol.length);
  return simbol[indexSimbol];
};

let randomSimbol = generateRandomsimbol();
