
document.getElementById('scrollLeft').addEventListener('click', function () {
    document.querySelector('.imagenes').scrollBy(-300, 0);
});

document.getElementById('scrollRight').addEventListener('click', function () {
    document.querySelector('.imagenes').scrollBy(300, 0);
});
