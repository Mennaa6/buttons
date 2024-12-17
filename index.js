let buttons = document.querySelectorAll("button");
let body = document.querySelector("body");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    let color = button.innerHTML;
    console.log(color);
    if (color === "remove") {
      body.style.backgroundColor = "white";
    } else {
      body.style.backgroundColor = color;
    }
  });
});
