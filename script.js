const adviceNum = document.querySelector(".advice-num");
const advice = document.querySelector(".advice");
const dice = document.querySelector(".dice-container");

const getAdvice = async function () {
  const response = await fetch("https://api.adviceslip.com/advice").then(
    (data) => data.json()
  );
  let adviceRes = response.slip;

  adviceNum.innerHTML = `ADVICE # ${adviceRes.id}`;
  advice.innerHTML = adviceRes.advice;
};
getAdvice();
dice.addEventListener("click", getAdvice);
