const dias = document.querySelectorAll(".dia");

window.addEventListener("scroll", () => {
  const alturaJanela = window.innerHeight;
  dias.forEach(dia => {
    const alturaTopo = dia.getBoundingClientRect().top;
    if (alturaTopo < alturaJanela * 0.75) {
      dia.classList.add("aparecer");
    }
  });
});
