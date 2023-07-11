const contenedor = document.getElementById("contenedor");
const numberDivs = document.querySelectorAll(".number");
const signos = ["+", "-", "*", "/"];

function crearInput(div) {
  const input = document.createElement("input");
  input.type = "text";
  input.inputMode = "numeric";
  input.name = "numberInput";
  input.className = "casilla";
  input.pattern = "[1-9]";
  input.autofocus = true;
  input.autocomplete = "off";
  div.appendChild(input);
}

function asignarOperadoresAleatorios() {
  const operandoElements = document.querySelectorAll(".operando");
  const resultadoElements = document.querySelectorAll(".resultado");

  operandoElements.forEach((operandoElement) => {
    const randomIndex = Math.floor(Math.random() * signos.length);
    operandoElement.textContent = signos[randomIndex];
  });

  resultadoElements.forEach((resultadoElement) => {
    const resultadoAleatorio = Math.floor(Math.random() * 10) + 1;
    resultadoElement.textContent = resultadoAleatorio;
  });
}

function calcularResultado(operando, numero1, numero2) {
  let resultado;

  switch (operando) {
    case "+":
      resultado = numero1 + numero2;
      break;
    case "-":
      resultado = numero1 - numero2;
      break;
    case "*":
      resultado = numero1 * numero2;
      break;
    case "/":
      resultado = numero1 / numero2;
      break;
    default:
      resultado = NaN;
  }

  return resultado;
}

function verificarOperaciones() {
  numberDivs.forEach((numberElement, i) => {
    const operandoElement = document.querySelector(`#div${i + 1} .operando`);
    const resultadoElement = document.querySelector(`#div${i + 1} .resultado`);

    const numero = parseInt(numberElement.firstChild.value);
    const operando = operandoElement.textContent;
    const resultado = parseInt(resultadoElement.textContent);

    const resultadoCalculado = calcularResultado(operando, numero, resultado);

    if (resultadoCalculado === resultado) {
      console.log(`La operación es correcta en el div ${i + 1}`);
    } else {
      console.log(`La operación es incorrecta en el div ${i + 1}`);
    }
  });
}

function crearDivs() {
  for (let i = 1; i <= 36; i++) {
    const div = document.createElement("div");
    div.classList.add("box");

    if ([1, 3, 5, 13, 15, 17, 25, 27, 29].includes(i)) {
      div.classList.add("number");
      crearInput(div);
    } else if ([6, 18, 30, 31, 33, 35].includes(i)) {
      div.classList.add("resultado");
    } else if (
      [2, 4, 7, 9, 11, 14, 16, 19, 21, 23, 26, 28].includes(i)
    ) {
      div.classList.add("operando");
    } else if (
      [8, 10, 12, 20, 22, 24, 32, 34, 36].includes(i)
    ) {
      div.classList.add("black");
    }

    div.id = "div" + i;
    contenedor.appendChild(div);
  }
}

crearDivs();
asignarOperadoresAleatorios();

const submitBtn = document.getElementById("submit");
submitBtn.addEventListener("click", verificarOperaciones);