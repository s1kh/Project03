const title = document.getElementById("title");
const message = document.querySelector(".message");
const button = document.getElementById("changeButton");

button.addEventListener("click", function () {
    title.textContent = "Updated Title";
    message.textContent = "The DOM was changed!";
    title.style.color = "blue";
    message.classList.add("active");
});