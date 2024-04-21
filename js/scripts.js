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


//calculadora
// Agrega un evento de escucha al campo de entrada (input)
        document.getElementById("number").addEventListener("keyup", function (event) {
            // Verifica si la tecla presionada es "Enter"
            if (event.key === "Enter") {
                // Llama a la función convertir() si se presiona "Enter"
                convertir();
            }
        });
        function convertir() {
            var numero = parseInt(document.getElementById("number").value);

            // Formato de enteros sin signo
            var enterossinsigno = "";

            // variable para almacenar el numero decimal
            var absNumero = Math.abs(numero);
            if (numero >= 0) {
                if (numero <= 255) {
                    var binario8 = numero.toString(2).padStart(8, '0');
                    enterossinsigno += "Binario (8 bits): " + binario8 + "<br>";
                }
                if (numero <= 65535) {
                    var binario16 = numero.toString(2).padStart(16, '0');
                    enterossinsigno += "Binario (16 bits): " + binario16 + "<br>";
                }
                if (numero <= 4294967295) {
                    var binario32 = numero.toString(2).padStart(32, '0');
                    enterossinsigno += "Binario (32 bits): " + binario32 + "<br>";
                }
                document.getElementById("h4enterossinsigno").innerHTML = "<h4>Formato de enteros sin signo ( decimal = " + absNumero + " )</h4>";
                document.getElementById("enterossinsigno").innerHTML = enterossinsigno;
            } else {
                if (absNumero <= 255) {
                    var binario8 = absNumero.toString(2).padStart(8, '0');
                    enterossinsigno += "Binario (8 bits): " + binario8 + "<br>";
                }
                if (absNumero <= 65535) {
                    var binario16 = absNumero.toString(2).padStart(16, '0');
                    enterossinsigno += "Binario (16 bits): " + binario16 + "<br>";
                }
                if (absNumero <= 4294967295) {
                    var binario32 = absNumero.toString(2).padStart(32, '0');
                    enterossinsigno += "Binario (32 bits): " + binario32 + "<br>";
                }
                document.getElementById("h4enterossinsigno").innerHTML = "<h4>Formato de enteros sin signo ( decimal = " + absNumero + " )</h4>";
                document.getElementById("enterossinsigno").innerHTML = enterossinsigno;
            }


            // Formato signo y magnitud
            var signoymagnitud = "";
            if (numero >= -127 && numero <= 127) {
                signoymagnitud += "Binario (8 bits): " + ((numero < 0) ? "1" : "0") + Math.abs(numero).toString(2).padStart(7, '0') + "<br>";
            }
            if (numero >= -32767 && numero <= 32767) {
                signoymagnitud += "Binario (16 bits): " + ((numero < 0) ? "1" : "0") + Math.abs(numero).toString(2).padStart(15, '0') + "<br>";
            }
            if (numero >= -2147483647 && numero <= 2147483647) {
                signoymagnitud += "Binario (32 bits): " + ((numero < 0) ? "1" : "0") + Math.abs(numero).toString(2).padStart(31, '0') + "<br>";
            }
            if (numero < -2147483647 || numero > 2147483647) {
                signoymagnitud += "Desbordamiento: El número ingresado está fuera del rango permitido para el formato signo y magnitud.<br>";
            }
            document.getElementById("signoymagnitud").innerHTML = signoymagnitud;

            // Formato de complemento a 1
            var cde1 = "";
            var binarioComplemento1 = '';
            if (numero >= -127 && numero <= 127) {
                if (numero < 0) {
                    // Convertir a binario ignorando el signo
                    var binario = Math.abs(numero).toString(2).padStart(8, '0');
                    // Complemento a uno
                    binarioComplemento1 = binario.split('').map(bit => (bit === '0' ? '1' : '0')).join('');
                } else {
                    binarioComplemento1 = binario8;
                }
                cde1 += "Binario (8 bits): " + binarioComplemento1 + "<br>";
            }
            if (numero >= -32767 && numero <= 32767) {
                if (numero < 0) {
                    var binario = Math.abs(numero).toString(2).padStart(16, '0');
                    binarioComplemento1 = binario.split('').map(bit => (bit === '0' ? '1' : '0')).join('');
                } else {
                    binarioComplemento1 = binario16;
                }
                cde1 += "Binario (16 bits): " + binarioComplemento1 + "<br>";
            }
            if (numero >= -2147483647 && numero <= 2147483647) {
                if (numero < 0) {
                    var binario = Math.abs(numero).toString(2).padStart(32, '0');
                    binarioComplemento1 = binario.split('').map(bit => (bit === '0' ? '1' : '0')).join('');
                } else {
                    binarioComplemento1 = binario32;
                }
                cde1 += "Binario (32 bits): " + binarioComplemento1 + "<br>";
            }
            if (numero < -2147483647 || numero > 2147483647) {
                cde1 += "Desbordamiento: El número ingresado está fuera del rango permitido para el formato de complemento a uno.<br>";
            }
            document.getElementById("cde1").innerHTML = cde1;

            // Formato de complemento a 2
            var cd2 = "";
            var binarioComplemento2 = '';
            if (numero >= -127 && numero <= 127) {
                if (numero < 0) {
                    // Convertir a binario ignorando el signo
                    var binario = Math.abs(numero).toString(2).padStart(8, '0');
                    // Complemento a dos
                    var complemento1 = binario.split('').map(bit => (bit === '0' ? '1' : '0')).join('');
                    var complemento2 = (parseInt(complemento1, 2) + 1).toString(2).padStart(8, '0');
                    binarioComplemento2 = complemento2;
                } else {
                    binarioComplemento2 = binario8;
                }
                cd2 += "Binario (8 bits): " + binarioComplemento2 + "<br>";
            }
            if (numero >= -32767 && numero <= 32767) {
                if (numero < 0) {
                    var binario = Math.abs(numero).toString(2).padStart(16, '0');
                    var complemento1 = binario.split('').map(bit => (bit === '0' ? '1' : '0')).join('');
                    var complemento2 = (parseInt(complemento1, 2) + 1).toString(2).padStart(16, '0');
                    binarioComplemento2 = complemento2;
                } else {
                    binarioComplemento2 = binario16;
                }
                cd2 += "Binario (16 bits): " + binarioComplemento2 + "<br>";
            }
            if (numero >= -2147483647 && numero <= 2147483647) {
                if (numero < 0) {
                    var binario = Math.abs(numero).toString(2).padStart(32, '0');
                    var complemento1 = binario.split('').map(bit => (bit === '0' ? '1' : '0')).join('');
                    var complemento2 = (BigInt('0b' + complemento1) + BigInt(1)).toString(2).padStart(32, '0');
                    binarioComplemento2 = complemento2;
                } else {
                    binarioComplemento2 = binario32;
                }
                cd2 += "Binario (32 bits): " + binarioComplemento2 + "<br>";
            }
            if (numero < -2147483647 || numero > 2147483647) {
                cd2 += "Desbordamiento: El número ingresado está fuera del rango permitido para el formato de complemento a dos.<br>";
            }
            document.getElementById("cd2").innerHTML = cd2;
            //hexadecimal y octal

            if (numero >= 0) {
                // Decimal a Hexadecimal
                var hexadecimal = (parseInt(numero, 10)).toString(16).toUpperCase();

                // Decimal a Octal
                var octal = (parseInt(numero, 10)).toString(8);

                document.getElementById("resultado").innerHTML = "Hexadecimal: " + hexadecimal + "<br>"
                    + "Octal: " + octal;
            }
            else {
                document.getElementById("resultado").innerHTML = "";
            }
        }