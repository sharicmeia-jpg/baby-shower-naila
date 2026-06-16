const premios = ["🧸", "🍼", "🎀", "🍭", "💝", "🧁", "🎈", "👶"];

box.addEventListener("click", () => {
  const premio = premios[Math.floor(Math.random() * premios.length)];

  box.innerText = premio;
  box.style.background = "#ff4d88";
  box.style.color = "white";
  box.style.transform = "scale(1.1)";
  box.style.transition = "0.3s";
  box.style.pointerEvents = "none";
});
