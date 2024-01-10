document.getElementById('myForm').addEventListener('submit', function () {
    preventDefault();

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let phone = document.getElementById("phone").value;

    if (name === "" || email === "" || phone === "") {
        alert("Por favor llena los campos correctamente")
    } else (
        document.getElementById("button-submit").addEventListener("click", function () { alert("enviado") })
    )
});