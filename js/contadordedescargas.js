document.addEventListener("DOMContentLoaded", function () {
    // Añade un listener para cada enlace de descarga
    document.querySelectorAll(".btns").forEach(function (link) {
        link.addEventListener("click", function () {
            // Obtenemos el nombre del producto desde el atributo data-producto
            var producto = this.getAttribute("data-producto");

            // Obtenemos el contador actual del producto desde localStorage
            var contador =
                parseInt(localStorage.getItem("contador_" + producto)) || 0;

            // Incrementamos el contador
            contador++;

            // Guardamos el nuevo valor del contador en localStorage
            localStorage.setItem("contador_" + producto, contador);

            // Actualizamos el contenido del elemento h2 correspondiente al producto
            document.getElementById(
                "contador" + producto.charAt(0).toUpperCase() + producto.slice(1)
            ).innerText = "Descargas "+contador;
        });
    });
});
