const grid = document.getElementById("grid");

// premios posibles
const premios = ["🧸", "🍼", "🎀", "🍭", "💝", "🧁", "🎈", "👶"];

// guardamos cajitas abiertas
let abiertas = JSON.parse(localStorage.getItem("abiertas")) || {};

for (let i = 1; i <= 100; i++) {
  const box = document.createElement("div");
  box.classList.add("box");

  // si ya fue abierta, mostrar premio
  if (abiertas[i]) {
    box.innerText = abiertas[i];
    box.style.background = "#ff4d88";
    box.style.color = "white";
    box.style.pointerEvents = "none";
  } else {
    box.innerText = "🎁";
  }

  box.addEventListener("click", () => {
    if (abiertas[i]) return; // por seguridad

    const premio = premios[Math.floor(Math.random() * premios.length)];

    box.innerText = premio;
    box.style.background = "#ff4d88";
    box.style.color = "white";
    box.style.transform = "scale(1.1)";
    box.style.pointerEvents = "none";

    // guardar en memoria
    abiertas[i] = premio;
    localStorage.setItem("abiertas", JSON.stringify(abiertas));
  });

  grid.appendChild(box);
}
