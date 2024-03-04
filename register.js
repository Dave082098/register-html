let txtUsername =document.querySelector("#txtUsername");
let btnRegister =document.querySelector("#btnRegister");

btnRegister.onclick = function () {
    Register(txtUsername.value)
}

function register (username) {
    console.log(username)
}