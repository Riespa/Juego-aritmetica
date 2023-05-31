const boxInput = document.getElementById("contenedor");
const numberDivs = document.querySelectorAll(".number");
const operandoElements = document.querySelectorAll(".operando");
const resultadoElement = document.querySelectorAll(".resultado");
const signos = ["+", "-", "*", "/"];


// Funcion para crear la tabla de juego de 6x6
function crearDivs() {
  for (let i = 1; i <= 36; i++) {
    const div = document.createElement("div");
    div.classList.add("box");

    if (
      i === 1 ||
      i === 3 ||
      i === 5 ||
      i === 13 ||
      i === 15 ||
      i === 17 ||
      i === 25 ||
      i === 27 ||
      i === 29
    ) {
      div.classList.add("number");

      //Una vez creado el class number construir el input con sus propiedades

      let input = document.createElement("input");
      input.type = "text";
      input.inputMode = "numeric";
      input.name = "numberInput";
      input.className = "casilla";
      input.pattern = "[1-9]";
      input.autofocus = true;
      input.autocomplete = "off";
      div.appendChild(input);
    } else if (
      i === 6 ||
      i === 18 ||
      i === 30 ||
      i === 31 ||
      i === 33 ||
      i === 35
    ) {
      div.classList.add("resultado");
    } else if (
      i === 2 ||
      i === 4 ||
      i === 7 ||
      i === 9 ||
      i === 11 ||
      i === 14 ||
      i === 16 ||
      i === 19 ||
      i === 21 ||
      i === 23 ||
      i === 26 ||
      i === 28
    ) {
      div.classList.add("operando");
    } else if (
      i === 8 ||
      i === 10 ||
      i === 12 ||
      i === 20 ||
      i === 22 ||
      i === 24 ||
      i === 32 ||
      i === 34 ||
      i === 36
    ) {
      div.classList.add("black");
    }

    div.id = "div" + i;

    contenedor.appendChild(div);
  }
}

// Funcion para asignar de manera aleatoria los operadores aritmeticos
// a los elementos "operando"
function asignarOperadoresAleatorios(operandoElements, resultadoElement) {
  if (operandoElements.length) {
    operandoElements.forEach((el) => {
      const randomIndex = Math.floor(Math.random() * signos.length);
      el.textContent = signos[randomIndex];
    });
  }

  // Se genera resultado aleatorio del 1 al 10
  const resultadoAleatorio = Math.floor(Math.random() * 10) + 1;
  resultadoElement.textContent = resultadoAleatorio;

  console.log(resultadoAleatorio);
}

asignarOperadoresAleatorios(operandoElements, resultadoElement);