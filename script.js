const message = document.getElementById("message");
const button = document.getElementById("changeButton");

button.addEventListener("click", function () {
    message.textContent = "You clicked the button!";
});