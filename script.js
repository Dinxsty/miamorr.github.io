function irASalir() {
    window.location.href = "teamo.html"; // Redirigir a la página salir.html
}

function moverNo() {
    var buttonNo = document.querySelector('button:nth-child(2)');
    var randomX = Math.random() * (window.innerWidth - buttonNo.offsetWidth);
    var randomY = Math.random() * (window.innerHeight - buttonNo.offsetHeight);

    buttonNo.style.position = 'absolute';
    buttonNo.style.left = randomX + 'px';
    buttonNo.style.top = randomY + 'px';
}
