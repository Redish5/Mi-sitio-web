function mostrarArticulo(elemento) {
    var titulo = elemento.querySelector('h3').innerText;
    var contenido = elemento.querySelector('p').innerText;
    var imagenSrc = elemento.querySelector('img').src;
    
    document.getElementById('modal-titulo').innerText = titulo;
    document.getElementById('modal-contenido').innerText = contenido;
    document.getElementById('modal-imagen').src = imagenSrc;
    
    document.getElementById('modal').style.display = 'block';
}

function cerrarModal() {
    document.getElementById('modal').style.display = 'none';
}
