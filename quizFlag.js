const flagGenerator = document.querySelector("button");
flagGenerator.addEventListener("click", function (e) {
  const imagePicker = Math.floor(Math.random() * countryWithImages.length);

  const selectedCountryImage = countryWithImages[imagePicker];

  document
    .querySelector("img")
    .setAttribute("src", `https:${selectedCountryImage.file_url}`);

  // let countryName1 = document.getElementById("countryOne");
  // countryName1.textContent = selectedCountryImage.name;


  const allLabels = document.querySelectorAll("label")
  allLabels[0].textContent = selectedCountryImage.name;
  allLabels[1].textContent = countryWithImages[Math.floor(Math.random() * countryWithImages.length)].name
  allLabels[2].textContent = countryWithImages[Math.floor(Math.random() * countryWithImages.length)].name
  allLabels[3].textContent = countryWithImages[Math.floor(Math.random() * countryWithImages.length)].name
  
  
  //   question for flag selection
  const question = document.querySelector("p");
  question.textContent = `What is the name of the country depicted above ${"?"}`;

  // // generating second random option for country in the second radio

  // let randomOption1 = countryWithImages[Math.floor(Math.random() * countryWithImages.length)];

  // let countryName2 = document.getElementById("countryTwo");
  // countryName2.textContent = randomOption1.name;

  // // generating third random option for country in the third radio
  // let randomOption2 = countryWithImages[Math.floor(Math.random() * countryWithImages.length)];
  // let countryName3 = document.getElementById("countryThree");
  // countryName3.textContent = randomOption2.name;

  // // generating fourth random option for country in the fourth radio

  //  let randomOption3 = countryWithImages[Math.floor(Math.random() * countryWithImages.length)];
  //  let countryName4 = document.getElementById("countryFour");
  //  countryName4.textContent = randomOption3.name;
});
