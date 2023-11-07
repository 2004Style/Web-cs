window.addEventListener('DOMContentLoaded', event => {

    // Toggle the side navigation
    const sidebarToggle = document.body.querySelector('#sidebarToggle');
    if (sidebarToggle) {
        // Uncomment Below to persist sidebar toggle between refreshes
        // if (localStorage.getItem('sb|sidebar-toggle') === 'true') {
        //     document.body.classList.toggle('sb-sidenav-toggled');
        // }
        sidebarToggle.addEventListener('click', event => {
            event.preventDefault();
            document.body.classList.toggle('sb-sidenav-toggled');
            localStorage.setItem('sb|sidebar-toggle', document.body.classList.contains('sb-sidenav-toggled'));
        });
    }

});


window.onload = function () {
    Particles.init({
      selector: ".background",
      color: ["#00C4FF", "#00C4FF", "#000000"],
      connectParticles: true,
      responsive: [
        {
          breakpoint: 768,
          options: {
            color: ["#00C4FF", "#00C4FF", "#00C4FF"],
            maxParticles: 43,
            connectParticles: false
          }
        }
      ]
    });
  
    const textElement = document.querySelector(".loader"); // Selecciona el elemento h3
    const words = ["PAGINAS WEB", "APPS DE ESCRITORIO", "APPS DE CONSOLA"]; // Palabras a escribir
    let wordIndex = 0;
    let letterIndex = 0;
    let isTyping = true;
  
    function typeText() {
      if (isTyping) {
        textElement.textContent += words[wordIndex][letterIndex];
        letterIndex++;
        if (letterIndex >= words[wordIndex].length) {
          isTyping = false;
          setTimeout(typeText, 1000); // Espera antes de borrar
        } else {
          setTimeout(typeText, 150); // Velocidad de escritura
        }
      } else {
        textElement.textContent = textElement.textContent.slice(0, -1);
        if (textElement.textContent.length === 0) {
          isTyping = true;
          letterIndex = 0;
          wordIndex = (wordIndex + 1) % words.length; // Cambia a la siguiente palabra
        }
        setTimeout(typeText, 90); // Velocidad de borrado
      }
    }
  
    typeText(); // Comienza el proceso
  };

  