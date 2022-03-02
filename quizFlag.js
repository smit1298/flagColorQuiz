const flagGenerator = document.querySelector("button");
const allInputs = document.querySelectorAll("input");
let scoreRight = document.getElementById("right");
let scoreWrong = document.getElementById("wrong");
let name0 = "";


window.addEventListener('load', ()=>{
  populateQuiz()
})


flagGenerator.addEventListener("click", function (e) {
  location.reload();
});


function populateQuiz (){
  const imagePicker = Math.floor(Math.random() * countryWithImages.length);

  const selectedCountryImage = countryWithImages[imagePicker];

  document
    .querySelector("img")
    .setAttribute("src", `https:${selectedCountryImage.file_url}`);

  //   question for flag selection
  const question = document.querySelector("p");
  question.textContent = `What is the name of the country depicted above ${"?"}`;

  const allLabels = document.querySelectorAll("label");

  for (let i = 0; i < allLabels.length; i++) {
    let selectName =  countryWithImages[
      Math.floor(Math.random() * countryWithImages.length)
    ].name;
    allLabels[i].textContent = selectName;
    allInputs[i].setAttribute("value", selectName)
     
  }

  name0 = selectedCountryImage.name;
  const answerIndex = Math.floor(Math.random() * allLabels.length);
  allLabels[answerIndex].textContent = name0;
  allInputs[answerIndex].setAttribute("value", name0);
}

for (let i = 0; i < allInputs.length; i++) {
  allInputs[i].addEventListener("click", function (e) {
    if (e.currentTarget.value === name0) {
      scoreRight.textContent = "RIGHT";
      scoreRight.style.color = "green";
    } else {
      scoreWrong.textContent = "WRONG";
      scoreWrong.style.color = "red";
    }
  });
}

