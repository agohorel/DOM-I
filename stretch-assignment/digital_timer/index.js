const secondsTens = document.querySelector("#secondTens");
const secondsOnes = document.querySelector("#secondOnes");

const msHundreds = document.querySelector("#msHundreds");
const msTens = document.querySelector("#msTens");

const start = document.querySelector("#start");
const reset = document.querySelector("#reset");

start.addEventListener("click", function() {
  let started = Date.now();

  let timer = setInterval(function() {
    let ellapsed = Date.now() - started;
    start.disabled = true;

    if (ellapsed >= 10000) {
      clearTimeout(timer);
      [secondsOnes, secondsTens, msHundreds, msTens].forEach(item =>
        item.classList.add("redDigit")
      );
      start.disabled = false;
    }

    secondsTens.textContent = Math.floor(ellapsed / 1000)
      .toString()
      .substring(0, 1);

    secondsOnes.textContent = Math.floor(ellapsed / 100)
      .toString()
      .substring(1, 2);

    msHundreds.textContent = Math.floor(ellapsed / 10)
      .toString()
      .substring(2, 3);

    msTens.textContent = Math.floor(ellapsed)
      .toString()
      .substring(3, 4);
  }, 10);
});

reset.addEventListener("click", function() {
  [secondsOnes, secondsTens, msHundreds, msTens].forEach(item => {
    item.classList.remove("redDigit");
    item.textContent = "0";
  });
});
