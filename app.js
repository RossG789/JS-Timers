const clickBtn = document.getElementById("btn");

setInterval(function goAway() {
  let x = document.getElementById("msg");
  if (x.style.display === "block") {
    x.style.display = "none";
  }
}, 5000);

function displayBtn() {
  let x = document.getElementById("msg");
  x.style.display = "block";
}

clickBtn.addEventListener("click", displayBtn);

console.log();
