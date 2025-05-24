let productImg = document.getElementById("productImg");
let btn = document.getElementsByClassName("btn");

btn[0].onclick = function () {
  productImg.src = "images/pic.1.avif";
  for (bt of btn) bt.classList.remove("active");
  this.classList.add("active");
};
btn[1].onclick = function () {
  productImg.src = "images/pic.2.avif";
  for (bt of btn) bt.classList.remove("active");
  this.classList.add("active");
};
btn[2].onclick = function () {
  productImg.src = "images/pic.3.webp";
  for (bt of btn) bt.classList.remove("active");
  this.classList.add("active");
};

document.getElementById("buyBtn").onclick = function () {
  const msg = document.getElementById("successMessage");
  msg.innerText = "✅ Product added successfully!";
  setTimeout(() => {
    msg.innerText = "";
  }, 3000);
};

let countdownElement = document.getElementById("countdown");
let timeLeft = 60 * 5;

function updateCountdown() {
  let minutes = Math.floor(timeLeft / 60);
  let seconds = timeLeft % 60;
  seconds = seconds < 10 ? "0" + seconds : seconds;
  countdownElement.innerText = `${minutes}:${seconds}`;
  if (timeLeft > 0) timeLeft--;
  else countdownElement.innerText = "Expired";
}
setInterval(updateCountdown, 1000);
