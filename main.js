const multText = document.getElementById('numberMult')
let multiplicador = 2
let canvas = document.getElementById('canv')
let ctx = canvas.getContext('2d')

guardarClick = document.getElementById('clickEvent')
clicks = 0
moeda = 0
maxClicks = 10

guardarClick.addEventListener('click', evt => {
  clickSet()
  document.getElementById('numberScore').innerText = moeda
  console.log(clicks)


})

function clickSet() {
  clicks += 1
  if (clicks >= maxClicks) {
    maxClicks += 10
    moeda++
    //multiplicadores
  } else if (multiplicador == 1) {
    moeda += 10
  } else if (multiplicador == 2) {
    moeda += 53
  } else if (multiplicador == 3) {
    moeda += 100
  }
}

document.getElementById('numberMult').innerText = multiplicador


//canvas
