
function chargeBattery() {
    var loader = document.querySelectorAll(".load");
    var smallLoader = document.querySelector(".small_load")
    for (let i = 0; i < loader.length; i++) {
      setTimeout(function() {
        loader[i].style.display = 'block'
      }, (i + 1) * 1000)
    }
    setTimeout(function() {
      smallLoader.style.display = 'block'
    }, 4000)
    for (let j = 0; j < loader.length; j++) {
      loader[j].style.display = 'none'
      smallLoader.style.display = 'none'
    }
  
  }
  chargeBattery()
  setInterval(chargeBattery, 5000)