
document.getElementById('scrollLeft').addEventListener('click', function () {
    document.querySelector('.imagenes').scrollBy(-300, 0);
});

document.getElementById('scrollRight').addEventListener('click', function () {
    document.querySelector('.imagenes').scrollBy(300, 0);
});
document.getElementById('button-submit').addEventListener('click', function () {
    alert("Mensaje Enviado");
});