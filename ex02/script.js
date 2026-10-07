const title = document.getElementById("title");
const message = document.querySelector(".message");

title.textContent = "Updated Title";
message.textContent = "The message was changed by JavaScript.";

title.style.color = "blue";

message.classList.add("active");