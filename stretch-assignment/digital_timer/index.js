const secondsTens = document.querySelector("#secondTens");
const secondsOnes = document.querySelector("#secondOnes");

const msHundreds = document.querySelector("#msHundreds");
const msTens = document.querySelector("#msTens");

const button = document.querySelector("button");

button.addEventListener("click", function() {
  let started = Date.now();

  let timer = setInterval(function() {
    let ellapsed = Date.now() - started;
    if (ellapsed >= 10000) {
      clearTimeout(timer);
      [secondsOnes, secondsTens, msHundreds, msTens].forEach(item =>
        item.classList.add("redDigit")
      );
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
