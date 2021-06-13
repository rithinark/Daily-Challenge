var time = 56655;


const numPad = (num, size) => {
  var s = String(num);
  while (s.length < (size || 2)) {
    s = "0" + s;
  }
  return s;
};
function secParser(seconds) {
  let days = Math.floor(seconds / (3600 * 24));
  seconds -= days * 3600 * 24;
  let hours = Math.floor(seconds / 3600);
  seconds -= hours * 3600;
  let minutes = Math.floor(seconds / 60);
  seconds -= minutes * 60;

  return [days, hours, minutes, seconds];
}
function flipper(elements, data) {
  if (time === -1) clearInterval(id);
  for (let element in elements) {
    const flipCard = elements[element].previousSibling.previousSibling;
    if (elements[element].innerText != data[element]) {
      flipCard.setAttribute("style", "display: block;");
      elements[element].innerText = numPad(data[element], 2);
      console.log(elements[element].innerText, data[element]);
    }
    setTimeout(() => {
      flipCard.setAttribute("style", "display: none;");
    }, 280);
  }
}

const day = document.getElementById("day-counter");
const hour = document.getElementById("hour-counter");
const minute = document.getElementById("minute-counter");
const seconds = document.getElementById("second-counter");

const id = setInterval(() => {
  if (time === 0) console.log(45);
  flipper([day, hour, minute, seconds], secParser(time--));
}, 1000);
