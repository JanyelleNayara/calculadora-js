function insert(num) {
  let number = document.getElementById('result').innerHTML
  document.getElementById('result').innerHTML = number + num
}

function clean() {
  document.getElementById('result').innerHTML = ''
}

function back() {
  let result = document.getElementById('result').innerHTML
  document.getElementById('result').innerHTML = result.substring(0, result.length - 1)
}

function calcular() {
  let result = document.getElementById('result').innerHTML
  if (result.length < 20 && result.length > 0) {
    document.getElementById('result').innerHTML = eval(result)
  } else {
    document.getElementById('result').innerHTML = 'Inválido'
  }
}

function hello() {
  let result = document.getElementById('result')
  document.getElementById('result').innerHTML = 'HUM??'
}
function bye() {
  let result = document.getElementById('result')
  document.getElementById('result').innerHTML = 'WHAT??'
}