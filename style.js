function greet() {
    document.getElementById("greet").innerHTML = document.getElementById('uName').value;
}

var input = document.getElementById("uName");
input.addEventListener("keyup", function(event) {
    if (event.keyCode === 13) {
        event.preventDefault();
        document.getElementById("submitGreet").click();
    }
});