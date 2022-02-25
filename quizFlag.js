const flagGenerator = document.querySelector("button");
flagGenerator.addEventListener("click", function (e) {
  const imagePicker = Math.floor(Math.random() * countryWithImages.length);

  const selectedCountryImage = countryWithImages[imagePicker];

  document
    .querySelector("img")
    .setAttribute("src", `https:${selectedCountryImage.file_url}`);

  let countryName1 = document.getElementById("countryOne");
  countryName1.textContent = selectedCountryImage.name;

  //   question
  const question = document.querySelector("p");
  question.textContent = `What is the name of the country depicted above ${"&quest;"}`;

  // generating second random option for country in the second radio

  let randomOption1 = countryWithImages[Math.floor(imagePicker * (2 - 1.6))];

  let countryName2 = document.getElementById("countryTwo");
  countryName2.textContent = randomOption1.name;

  // generating third random option for country in the third radio
  let randomOption2 = countryWithImages[Math.floor(imagePicker + 7)];
  let countryName3 = document.getElementById("countryThree");
  countryName3.textContent = randomOption2.name;
});
