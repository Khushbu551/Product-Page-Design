let productImg = document.getElementById("productImg");
let btn = document.getElementsByClassName("btn");

// Image switcher buttons
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

//  Buy Now success message
document.getElementById("buyBtn").onclick = function () {
  document.getElementById("successMessage").innerText =
    "Product added successfully!";
  setTimeout(() => {
    document.getElementById("successMessage").innerText = "";
  }, 3000);
};

//  Countdown Timer for Discount
let countdownElement = document.getElementById("countdown");
let timeLeft = 60 * 5; // 5 minutes

function updateCountdown() {
  let minutes = Math.floor(timeLeft / 60);
  let seconds = timeLeft % 60;
  seconds = seconds < 10 ? "0" + seconds : seconds;
  countdownElement.innerText = `${minutes}:${seconds}`;
  if (timeLeft > 0) timeLeft--;
  else countdownElement.innerText = "Expired";
}
setInterval(updateCountdown, 1000);
