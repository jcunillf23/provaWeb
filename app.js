// Funcion para cargar un contenido en un div
function cargarContenido(pagina) {
    // cargamos la pagina pagina.html en el div contenido
    w3_close();
    $("#contenido").load(pagina);
}
// Funcion para cargar un contenido en un div mostrando un reloj de arena
function cargarContenidoReloj(pagina) {
    // cargamos el icono en el div donde ira el contenido
    $("#contenido").html("<img src='clock.gif' class='clock' border='0' />");
    // cargamos la pagina pagina3.php en el div contenido
    $("#contenido").load(pagina);
}

function onClick(element) {
    document.getElementById("img01").src = element.src;
    document.getElementById("modal01").style.display = "block";
    var captionText = document.getElementById("caption");
    captionText.innerHTML = element.alt;
}


// Toggle between showing and hiding the sidebar when clicking the menu icon
var mySidebar = document.getElementById("mySidebar");

function w3_open() {
    if (mySidebar.style.display === 'block') {
        mySidebar.style.display = 'none';
    } else {
        mySidebar.style.display = 'block';
    }
}

// Close the sidebar with the close button
function w3_close() {
    mySidebar.style.display = "none";
}