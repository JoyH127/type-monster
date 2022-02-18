//set
const userInput = document.querySelector("input");
const startBtn = document.querySelector("#start");
const level = document.querySelector("#level_cate");
const playground = document.querySelector(".playground");
const wordList = document.createElement("div");
wordList.classList.add("words");
playground.appendChild(wordList);
const BASE_URL = "https://random-word-api.herokuapp.com/";
const score = document.querySelector(".score");
const timer = document.querySelector("#count-down-timer");
const resetbtn = document.querySelector("#reset");

// call api dataset
startBtn.addEventListener("click", async () => {
  const pace = level.value;
  countDown(pace);
  try {
    let response = await axios.get(`${BASE_URL}word?number=50`);
    let wordSet = response.data;
    showWord(wordSet);
  } catch (error) {
    console.log(error);
  }
});
function showWord(word) {
  for (let i = 0; i < word.length; i++) {
    console.log(word[i]);
    wordList.innerHTML += `<p class='hidden'>${word[i]}</p>`;
  }
  console.log(wordList);

  //set interval for fall words
  //   let downInterval = setInterval((i) => {
  //     move();
  //   }, pace);
}

resetbtn.addEventListener("click", () => {
  location.reload();
});

//countDown function
function countDown(pace) {
  let time_minutes = 1;
  let time_seconds = 30;
  let duration = time_minutes * 60 + time_seconds;

  switch (pace) {
    case "800":
      time_minutes = 3;
      time_seconds = 0;
      duration = time_minutes * 60 + time_seconds;
      console.log(duration);
      break;
    case "600":
      time_minutes = 2;
      time_seconds = 30;
      duration = time_minutes * 60 + time_seconds;
      console.log(duration);
      break;
    case "500":
      time_minutes = 1;
      time_seconds = 30;
      duration = time_minutes * 60 + time_seconds;
      console.log(duration);
      break;
    default:
      console.log("no value");
  }
  timer.textContent = `${timerFormat(time_minutes)}:${timerFormat(
    time_seconds
  )}`;
  startCountDown(--duration, timer);
}

//html format to show up timer after start
function timerFormat(num) {
  return num < 10 ? "0" + num : num;
}

function startCountDown(duration, element) {
  let secondsRemaining = duration;
  let min = 0;
  let sec = 0;

  let countInterval = setInterval(function () {
    min = parseInt(secondsRemaining / 60);
    sec = parseInt(secondsRemaining % 60);

    timer.textContent = `${timerFormat(min)}:${timerFormat(sec)}`;

    secondsRemaining = secondsRemaining - 1;
    if (secondsRemaining < 0) {
      clearInterval(countInterval);
    }
  }, 1000);

  // show up some
}

// match the answer

function checkanswer() {}
