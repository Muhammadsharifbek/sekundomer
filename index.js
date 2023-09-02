const elCount = document.getElementById("counter");
const elStart = document.getElementById("start-btn");
const elPouse = document.getElementById("stop-btn");

let counter = 0;
let counterInterval;
let count = true;

function start() {
  if (count) {
    counterInterval = setInterval(() => {
      counter++;
      elCount.textContent = counter;
    }, 1000);
    count = !count;
  }
}

function pouse() {
  clearInterval(counterInterval);
  count = !count;
}

elStart.addEventListener("click", start);
elPouse.addEventListener("click", pouse);
