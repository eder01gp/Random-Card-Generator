/* eslint-disable */
import "bootstrap";
import "./style.css";
import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

const numeros = [
  "A",
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
const palos = ["Picas", "Corazones", "Treboles", "Rombos"];
const palo = document.querySelectorAll(".card-palo");
const numero = document.querySelector(".card-body");

let barajaRestante = [];
let barajaMostrada = [];

let counter = 0;

const change_el = document.querySelector("#changeCard_btn");
change_el.addEventListener("click", () => {
  sacarCarta(barajaRestante, barajaMostrada);
});

const resetear_el = document.querySelector("#resetear_btn");
resetear_el.addEventListener("click", () => {
  crearBaraja(barajaRestante);
  sacarCarta(barajaRestante, barajaMostrada);
});

const crearBaraja = barajaRestanteInput1 => {
  barajaRestanteInput1.length = 0;
  barajaMostrada.length = 0;
  for (let P of palos) {
    for (let N of numeros) {
      let carta = [N, P];
      barajaRestanteInput1.push(carta);
    }
  }
  counter = barajaRestanteInput1.length;
  return barajaRestanteInput1;
};

const randomCarta = baraja => {
  return Math.floor(Math.random() * (baraja.length - 1));
};

const sacarCarta = (barajaRestanteInput, barajaMostradaInput) => {
  if (counter == 0) alert("Ya se mostraron todas las cartas");
  else {
    let Ncarta = randomCarta(barajaRestanteInput); // indice
    let Nmostrar = barajaRestanteInput[Ncarta][0];
    let Pmostrar = barajaRestanteInput[Ncarta][1];
    mostrarNumero(Nmostrar);
    mostrarPalo(Pmostrar);
    barajaRestanteInput.splice(Ncarta, 1);
    barajaMostradaInput.push([[Ncarta][0], [Ncarta][1]]);
    counter--;
    console.log(Nmostrar + " " + Pmostrar);
    console.log(barajaMostradaInput.length);
    console.log(barajaRestanteInput.length);
    /* console.log(counter); */
  }
  return;
};

const mostrarNumero = N => {
  numero.innerHTML = `${N}`;
};

const mostrarPalo = P => {
  palo.forEach(element1 => {
    palos.forEach(element2 => {
      element1.classList.remove(`${element2}`);
    });
  });
  palo.forEach(element => {
    element.classList.add(`${P}`);
  });
};

window.onload = function() {
  crearBaraja(barajaRestante);
  sacarCarta(barajaRestante, barajaMostrada);
};
