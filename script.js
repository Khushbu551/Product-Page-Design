let productImg = document.getElementById("productImg");
let btn = document.getElementsByClassName("btn");

btn[0].onclick = function () {
  productImg.src = "images/pic.1.avif";

  for (bt of btn) {
    bt.classList.remove("active");
  }
  this.classList.add("active");
};

btn[1].onclick = function () {
  productImg.src = "images/pic.2.avif";
  for (bt of btn) {
    bt.classList.remove("active");
  }
  this.classList.add("active");
};

btn[2].onclick = function () {
  productImg.src = "images/pic.3.webp";
  for (bt of btn) {
    bt.classList.remove("active");
  }
  this.classList.add("active");
};
