const contenedor = document.getElementById("contenedor");
const numberDivs = document.querySelectorAll(".number");

const signos = ["+", "-", "*", "/"];

console.log(numberDivs);

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

// Funcion para asignar de manera aleatoria los operadores aritmeticos
// a los elementos "operando"
function asignarOperadoresAleatorios() {
  const operandoElements = document.querySelectorAll(".operando");
  const resultadoElement = document.querySelectorAll(".resultado");

  for (const el of operandoElements) {
    const randomIndex = Math.floor(Math.random() * signos.length);
    el.textContent = signos[randomIndex];
  }

  // Se genera resultado aleatorio del 1 al 10
  resultadoElement.forEach((resultadoElement) => {
    const resultadoAleatorio = Math.floor(Math.random() * 10) + 1;
    resultadoElement.textContent = `${resultadoAleatorio}`;
  });
}

function verificarOperaciones() {
  // Se identifican los valores ingresados en input.casilla, y los operandos de div.operando
  const inputDivs = document.querySelectorAll(".casilla");
  const inputValores = Array.from(inputDivs).map((input) => input.value);
  
  let operacionResultante1 = null;
  let operacionResultante2 = null;
  let operacionResultante3 = null;
  let operacionResultante4 = null;
  let operacionResultante5 = null;
  let operacionResultante6 = null;

  console.log("funcion activa");
  // console.log(inputValores);
  for (let i = 0; i < inputValores.length; i++) {
    const numberElement1 = inputValores[i];
    const numberElement2 = inputValores[i + 1];
    const numberElement3 = inputValores[i + 2];
    const numberElement4 = inputValores[i + 3];
    const numberElement5 = inputValores[i + 4];
    const numberElement6 = inputValores[i + 5];
    const numberElement7 = inputValores[i + 6];
    const numberElement8 = inputValores[i + 7];
    const numberElement9 = inputValores[i + 8];

    const operandoElement1 = document.querySelectorAll(".operando")[i];
    const operandoElement2 = document.querySelectorAll(".operando")[i + 1];
    const operandoElement3 = document.querySelectorAll(".operando")[i + 2];
    const operandoElement4 = document.querySelectorAll(".operando")[i + 3];
    const operandoElement5 = document.querySelectorAll(".operando")[i + 4];
    const operandoElement6 = document.querySelectorAll(".operando")[i + 5];
    const operandoElement7 = document.querySelectorAll(".operando")[i + 6];
    const operandoElement8 = document.querySelectorAll(".operando")[i + 7];
    const operandoElement9 = document.querySelectorAll(".operando")[i + 8];
    const operandoElement10 = document.querySelectorAll(".operando")[i + 9];
    const operandoElement11 = document.querySelectorAll(".operando")[i + 10];
    const operandoElement12 = document.querySelectorAll(".operando")[i + 11];

    const resultadoElement1 = document.querySelectorAll(".resultado")[i];
    const resultadoElement2 = document.querySelectorAll(".resultado")[i + 1];
    const resultadoElement3 = document.querySelectorAll(".resultado")[i + 2];
    const resultadoElement4 = document.querySelectorAll(".resultado")[i + 3];
    const resultadoElement5 = document.querySelectorAll(".resultado")[i + 4];
    const resultadoElement6 = document.querySelectorAll(".resultado")[i + 5];

    // Verificar que el número sea un entero
    if (
      Number.isNaN(numberElement1) ||
      Number.isNaN(numberElement2) ||
      Number.isNaN(numberElement3) ||
      Number.isNaN(numberElement4) ||
      Number.isNaN(numberElement5) ||
      Number.isNaN(numberElement6) ||
      Number.isNaN(numberElement7) ||
      Number.isNaN(numberElement8) ||
      Number.isNaN(numberElement9)
    ) {
      console.log(`Uno o más valores ingresados no son números.`);
      continue;
    }

    // Operacion horizontal primera linea, operando id=2, 4
    switch (operandoElement1.textContent) {
      case "+":
        operacionResultante1 = numberElement1 + numberElement2;
        break;
      case "-":
        operacionResultante1 = numberElement1 - numberElement2;
        break;
      case "*":
        operacionResultante1 = numberElement1 * numberElement2;
        break;
      case "/":
        operacionResultante1 = numberElement1 / numberElement2;
        break;
      default:
        throw new Error("Operando invalido!");
    }

    switch (operandoElement2.textContent) {
      case "+":
        operacionResultante1 += numberElement3;
        break;
      case "-":
        operacionResultante1 -= numberElement3;
        break;
      case "*":
        operacionResultante1 *= numberElement3;
        break;
      case "/":
        operacionResultante1 /= numberElement3;
        break;
      default:
        throw new Error("Operador invalido!");
    }

    if(operacionResultante1 === parseInt(resultadoElement1.textContent)) {
      resultadoElement1.classList.add("resultado-correcto");
      resultadoElement1.classList.remove("resultado-incorrecto");
    } else {
      resultadoElement1.classList.add("resultado-incorrecto");
      resultadoElement1.classList.remove("resultado-correcto");
    }

    // Operacion horizontal segunda linea, operando id=14, 16
    switch (operandoElement6.textContent) {
      case "+":
        operacionResultante2 = numberElement4 + numberElement5;
        break;
      case "-":
        operacionResultante2 = numberElement4 - numberElement5;
        break;
      case "*":
        operacionResultante2 = numberElement4 * numberElement5;
        break;
      case "/":
        operacionResultante2 = numberElement4 / numberElement5;
        break;
      default:
        throw new Error("Operando invalido!");
    }

    switch (operandoElement7.textContent) {
      case "+":
        operacionResultante2 += numberElement6;
        break;
      case "-":
        operacionResultante2 -= numberElement6;
        break;
      case "*":
        operacionResultante2 *= numberElement6;
        break;
      case "/":
        operacionResultante2 /= numberElement6;
        break;
      default:
        throw new Error("Operador invalido!");
    }

    if(operacionResultante2 === parseInt(resultadoElement2.textContent)) {
      resultadoElement2.classList.add("resultado-correcto");
      resultadoElement2.classList.remove("resultado-incorrecto");
    } else {
      resultadoElement2.classList.add("resultado-incorrecto");
      resultadoElement2.classList.remove("resultado-correcto");
    }

    // Operacion horizontal tercera linea, operando id=26, 28
    switch (operandoElement11.textContent) {
      case "+":
        operacionResultante3 = numberElement7 + numberElement8;
        break;
      case "-":
        operacionResultante3 = numberElement7 - numberElement8;
        break;
      case "*":
        operacionResultante3 = numberElement7 * numberElement8;
        break;
      case "/":
        operacionResultante3 = numberElement7 / numberElement8;
        break;
      default:
        throw new Error("Operando invalido!");
    }

    switch (operandoElement12.textContent) {
      case "+":
        operacionResultante3 += numberElement9;
        break;
      case "-":
        operacionResultante3 -= numberElement9;
        break;
      case "*":
        operacionResultante3 *= numberElement9;
        break;
      case "/":
        operacionResultante3 /= numberElement9;
        break;
      default:
        throw new Error("Operador invalido!");
    }

    if(operacionResultante3 === parseInt(resultadoElement3.textContent)) {
      resultadoElement3.classList.add("resultado-correcto");
      resultadoElement3.classList.remove("resultado-incorrecto");
    } else {
      resultadoElement3.classList.add("resultado-incorrecto");
      resultadoElement3.classList.remove("resultado-correcto");4
    }

    // Operacion vertical primera linea, operando id=7, 19
    switch (operandoElement3.textContent) {
      case "+":
        operacionResultante4 = numberElement1 + numberElement4;
        break;
      case "-":
        operacionResultante4 = numberElement1 - numberElement4;
        break;
      case "*":
        operacionResultante4 = numberElement1 * numberElement4;
        break;
      case "/":
        operacionResultante4 = numberElement1 / numberElement4;
        break;
      default:
        throw new Error("Operando invalido!");
    }

    switch (operandoElement8.textContent) {
      case "+":
        operacionResultante4 += numberElement7;
        break;
      case "-":
        operacionResultante4 -= numberElement7;
        break;
      case "*":
        operacionResultante4 *= numberElement7;
        break;
      case "/":
        operacionResultante4 /= numberElement7;
        break;
      default:
        throw new Error("Operador invalido!");
    }

    if(operacionResultante4 === parseInt(resultadoElement4.textContent)) {
      resultadoElement4.classList.add("resultado-correcto");
      resultadoElement4.classList.remove("resultado-incorrecto");
    } else {
      resultadoElement4.classList.add("resultado-incorrecto");
      resultadoElement4.classList.remove("resultado-correcto");
    }

    // Operacion vertical segunda linea, operando id=9, 21
    switch (operandoElement4.textContent) {
      case "+":
        operacionResultante5 = numberElement2 + numberElement5;
        break;
      case "-":
        operacionResultante5 = numberElement2 - numberElement5;
        break;
      case "*":
        operacionResultante5 = numberElement2 * numberElement5;
        break;
      case "/":
        operacionResultante5 = numberElement2 / numberElement5;
        break;
      default:
        throw new Error("Operando invalido!");
    }

    switch (operandoElement9.textContent) {
      case "+":
        operacionResultante5 += numberElement8;
        break;
      case "-":
        operacionResultante5 -= numberElement8;
        break;
      case "*":
        operacionResultante5 *= numberElement8;
        break;
      case "/":
        operacionResultante5 /= numberElement8;
        break;
      default:
        throw new Error("Operador invalido!");
    }

    if(operacionResultante5 === parseInt(resultadoElement5.textContent)) {
      resultadoElement5.classList.add("resultado-correcto");
      resultadoElement5.classList.remove("resultado-incorrecto");
    } else {
      resultadoElement5.classList.add("resultado-incorrecto");
      resultadoElement5.classList.remove("resultado-correcto");
    }

    // Operacion vertical tercera linea, operando id=11, 23
    switch (operandoElement5.textContent) {
      case "+":
        operacionResultante6 = numberElement3 + numberElement6;
        break;
      case "-":
        operacionResultante6 = numberElement3 - numberElement6;
        break;
      case "*":
        operacionResultante6 = numberElement3 * numberElement6;
        break;
      case "/":
        operacionResultante6 = numberElement3 / numberElement6;
        break;
      default:
        throw new Error("Operando invalido!");
    }

    switch (operandoElement10.textContent) {
      case "+":
        operacionResultante6 += numberElement9;
        break;
      case "-":
        operacionResultante6 -= numberElement9;
        break;
      case "*":
        operacionResultante6 *= numberElement9;
        break;
      case "/":
        operacionResultante6 /= numberElement9;
        break;
      default:
        throw new Error("Operador invalido!");
    }

    if(operacionResultante6 === parseInt(resultadoElement6.textContent)) {
      resultadoElement6.classList.add("resultado-correcto");
      resultadoElement6.classList.remove("resultado-incorrecto");
    } else {
      resultadoElement6.classList.add("resultado-incorrecto");
      resultadoElement6.classList.remove("resultado-correcto");
    }
  }
}

// Funcion para crear la tabla de juego de 6x6
function crearDivs() {
  for (let i = 1; i <= 36; i++) {
    const div = document.createElement("div");
    div.classList.add("box");

    if ([1, 3, 5, 13, 15, 17, 25, 27, 29].includes(i)) {
      div.classList.add("number");
      crearInput(div);
    } else if ([6, 18, 30, 31, 33, 35].includes(i)) {
      div.classList.add("resultado");
    } else if ([2, 4, 7, 9, 11, 14, 16, 19, 21, 23, 26, 28].includes(i)) {
      div.classList.add("operando");
    } else if ([8, 10, 12, 20, 22, 24, 32, 34, 36].includes(i)) {
      div.classList.add("black");
    }

    div.id = "div" + i;
    contenedor.appendChild(div);
  }
}

crearDivs();
asignarOperadoresAleatorios();