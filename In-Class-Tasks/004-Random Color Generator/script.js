let box = document.querySelector("#box");
let btn = document.querySelector("button");
let span = document.querySelector("span");
let icon = document.querySelector("i");

var colorCode;

btn.addEventListener("click", function () {
  let c1 = Math.floor(Math.random() * 256);
  let c2 = Math.floor(Math.random() * 256);
  let c3 = Math.floor(Math.random() * 256);

  colorCode = `rgb(${c1},${c2},${c3})`;

  box.style.backgroundColor = colorCode;
  span.innerHTML = colorCode;
});

icon.addEventListener("click", function () {


    // let color = span.innerText;     
    // navigator.clipboard.writeText(color); 
    // alert("Color Copied!");  
  navigator.clipboard
    .writeText(span.innerText)
    .then(() => {
      icon.style.color = "green";
      icon.style.transform = "scale(1.2)";

      setTimeout(() => {
        icon.style.color = "black";
        icon.style.transform = "scale(1)";
      }, 800);
    })
    .catch((err) => {
      console.error("Copy failed:", err);
    });
});
