
document.getElementById('scrollLeft').addEventListener('click', function () {
    document.querySelector('.imagenes').scrollBy(-300, 0);
});

document.getElementById('scrollRight').addEventListener('click', function () {
    document.querySelector('.imagenes').scrollBy(300, 0);
});
// document.getElementById('button-submit').addEventListener('click', function () {
//     let name = document.getElementById("name").value;
//     let email = document.getElementById("email").value;
//     let phone = document.getElementById("phone").value;
//     if (name === "" || email === "" || phone === "") {
//         alert("Por favor llena los campos correctamente");
//     }
// });
document.getElementById('myForm').addEventListener('submit', function (e) {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let phone = document.getElementById("phone").value;
    if (name === "" || email === "" || phone === "") {
        alert("Por favor llena los campos correctamente");
        e.preventDefault();
    }
});