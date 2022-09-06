const adviceNum = document.querySelector(".advice-num");
const advice = document.querySelector(".advice");
const button = document.querySelector("button");

const getAdvice = async function () {
  const response = await fetch("https://api.adviceslip.com/advice").then(
    (data) => data.json()
  );
  console.log(response.slip);
  return response.slip;
};

button.addEventListener("click", function () {
  let advice = getAdvice();
});
