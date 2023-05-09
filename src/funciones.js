const resultado = document.getElementsByClassName("resultado")[0];
const botonSumar = document.querySelector(".botonSumar");
const botonRestar = document.querySelector(".botonRestar");
const botonReset = document.querySelector(".botonReset");

const sumarContador = () => {
  let cantidad = parseInt(resultado.innerText);
  resultado.innerText = cantidad + 1;
};

const restarContador = () => {
  let cantidad = parseInt(resultado.innerText);
  if (cantidad > 0) {
    resultado.innerText = cantidad - 1;
  }
};

const resetContador = () => {
  resultado.innerText = 0;
};

botonSumar.addEventListener("click", sumarContador);
botonRestar.addEventListener("click", restarContador);
botonReset.addEventListener("click", resetContador);
