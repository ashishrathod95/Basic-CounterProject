var counter = 0;
document.querySelectorAll('.btn').forEach(function(button) {
  button.addEventListener("click", function() {
    if(button.classList.contains('lower')) {
      counter--;
    }
    else if(button.classList.contains('upper')) {
      counter++;
    }

    var count = document.querySelector(".number-container");
    count.innerHTML = counter;
  })
})