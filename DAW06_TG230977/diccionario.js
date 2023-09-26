document.addEventListener("DOMContentLoaded", function () {
    var listaPalabras = document.getElementById("listaPalabras");
    var entradaBusqueda = document.getElementById("entradaBusqueda");
    var botonMostrarDefinicion = document.getElementById("botonMostrarDefinicion");
    var textoDefinicion = document.getElementById("textoDefinicion");

    var diccionario = {
        'Aerobic': 'Definición de Aerobic...',
        'Ajedrez': 'Definición de Ajedrez...',
        'Atletismo': 'Definición de Atletismo...',
    };

    for (var palabra in diccionario) {
        listaPalabras.options[listaPalabras.options.length] = new Option(palabra);
    }

    listaPalabras.addEventListener("dblclick", function () {
        var palabraSeleccionada = listaPalabras.value;
        var definicion = diccionario[palabraSeleccionada];

        if (definicion) {
            textoDefinicion.textContent = definicion;
        } else {
            textoDefinicion.textContent = "No se encontró una definición para esta palabra.";
        }
    });

    botonMostrarDefinicion.addEventListener("click", function () {
        var palabraSeleccionada = listaPalabras.value;
        var definicion = diccionario[palabraSeleccionada];

        if (definicion) {
            textoDefinicion.textContent = definicion;
        } else {
            textoDefinicion.textContent = "No se encontró una definición para esta palabra.";
        }
    });

    entradaBusqueda.addEventListener("keyup", function () {
        var textoBusqueda = entradaBusqueda.value.trim().toLowerCase();

        listaPalabras.options.length = 0; 

        if (textoBusqueda === "") {
            for (var palabra in diccionario) {
                listaPalabras.options[listaPalabras.options.length] = new Option(palabra);
            }
        } else {
            for (var palabra in diccionario) {
                if (palabra.toLowerCase().includes(textoBusqueda)) {
                    listaPalabras.options[listaPalabras.options.length] = new Option(palabra);
                }
            }
        }
    });
});
