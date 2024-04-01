window.addEventListener("DOMContentLoaded", (event) => {
  // Toggle the side navigation
  const sidebarToggle = document.body.querySelector("#sidebarToggle");
  if (sidebarToggle) {
    sidebarToggle.addEventListener("click", (event) => {
      event.preventDefault();
      document.body.classList.toggle("sb-sidenav-toggled");
      localStorage.setItem(
        "sb|sidebar-toggle",
        document.body.classList.contains("sb-sidenav-toggled")
      );
    });
  }
});

window.onload = function () {
  Particles.init({
    selector: ".background",
    color: ["#00fc37", "#00fc37", "#000000"],
    connectParticles: true,
    responsive: [
      {
        breakpoint: 768,
        options: {
          color: ["#00fc37", "#00fc37", "#00fc37"],
          maxParticles: 43,
          connectParticles: false,
        },
      },
    ],
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

//automatizacion de la marca para colocar el copiryng y tambien para modificar la marca en todos lados desde aca
// Función para obtener el año actual
function getCurrentYear() {
  return new Date().getFullYear();
}

// Variables
var marca = "ConvertSystems";
var year = getCurrentYear();

var tiktok = "https://www.tiktok.com/@codecrafter_dev?_t=8f9FNxzEUx3&_r=1/";
var instagram =
  "https://instagram.com/2004_style?utm_source=qr&igshid=MzNlNGNkZWQ4Mg%3D%3D/";
var discord = "https://discord.gg/WmKp5A4nCS";
var facebook =
  "https://www.facebook.com/profile.php?id=100038997457332&mibextid=ZbWKwL";
//var whatsapp = ;
//var tiwter = ;
//var replit = ;

// Obtén el elemento h1 con la clase "empresa"
// Obtén los elementos de anclaje por su ID "copyright"
var marcalista = document.getElementById("marca");
var copyrightElement = document.getElementById("copyright");

var enlaceTikTok = document.getElementById("enlaceTikTok");
var enlaceInstagram = document.getElementById("enlaceInstagram");
var enlaceDiscord = document.getElementById("enlaceDiscord");
var enlaceFaceboock = document.getElementById("enlaceFaceboock");

// Cambia el texto dentro del elemento
marcalista.textContent = marca;
copyrightElement.innerHTML = `Copyright &copy; ${marca} ${year}`;

enlaceTikTok.href = tiktok;
enlaceInstagram.href = instagram;
enlaceDiscord.href = discord;
enlaceFaceboock.href = facebook;

//inicio
var marca_inicio = document.getElementsByClassName("empresa");
// Recorre todos los elementos y cambia su texto
for (var i = 0; i < marca_inicio.length; i++) {
  marca_inicio[i].textContent = marca;
}

//anuncios
var texto_funcionamiento_producto = "VER EL FUNCIONAMIENTO";
var elementos_anuncios = document.getElementsByClassName("titlePRODUCT");
// Recorre todos los elementos y cambia su texto
for (var i = 0; i < elementos_anuncios.length; i++) {
  elementos_anuncios[i].textContent = texto_funcionamiento_producto;
}

//anuncios icono
var img_logo = "./imagenes/logo_convertsystemsfondoblanco-01.jpg";
var img_logo_fondo = document.getElementsByClassName("logo");
// Recorre todos los elementos y cambia el atributo src
for (var i = 0; i < img_logo_fondo.length; i++) {
  img_logo_fondo[i].setAttribute("src", img_logo);
}

//productos para descargar
var img_product = "./imagenes/logo.jpg";
var img_product_fondo = document.getElementsByClassName("cardimg");
// Recorre todos los elementos y cambia el atributo src
for (var i = 0; i < img_product_fondo.length; i++) {
  img_product_fondo[i].setAttribute("src", img_product);
}