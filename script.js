const adviceNum = document.querySelector(".advice-num");
const advice = document.querySelector(".advice");
const button = document.querySelector("button");

const getAdvice = async function () {
  const response = await fetch("https://api.adviceslip.com/advice").then(
    (data) => data.json()
  );
  let adviceRes = response.slip;

  adviceNum.innerHTML = `ADVICE # ${adviceRes.id}`;
  advice.innerHTML = adviceRes.advice;
};
getAdvice();
button.addEventListener("click", getAdvice);
