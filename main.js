
document.getElementById('scrollLeft').addEventListener('click', function () {
    document.querySelector('.imagenes').scrollBy(-300, 0);
});

document.getElementById('scrollRight').addEventListener('click', function () {
    document.querySelector('.imagenes').scrollBy(300, 0);
});
document.getElementById('myForm').addEventListener('submit', function (e) {
    e.preventDefault();

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let phone = document.getElementById("phone").value;

    if (name === "" || email === "" || phone === "") {
        alert("Por favor llena los campos correctamente")
    } else (alert("Mensaje Enviado"))
});