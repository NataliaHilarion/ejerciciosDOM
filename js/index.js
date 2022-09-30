var $modal = document.getElementById("myModal");
var $btn = document.getElementById("myBtn")
var $span = document.querySelector(".close");

$btn.addEventListener("click", ()=> {
  $modal.style.display = "block"
})

$span.addEventListener("click", ()=>{
  $modal.style.display = "none"
})