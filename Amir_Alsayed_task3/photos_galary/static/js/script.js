const mainPhoto = document.getElementById("mainPhoto");
const buttonOne = document.getElementById("imgOne");
const buttonTwo = document.getElementById("imgTwo");
const buttonThree = document.getElementById("imgThree");
const buttonFour = document.getElementById("imgFour");
const buttonFive = document.getElementById("imgFive");
const buttonSix = document.getElementById("imgSix");

const bickName = document.getElementById("name");
const bickPrice = document.getElementById("price");

buttonOne.addEventListener("click", () => {
    mainPhoto.src = "../static/images/1.png";
    bickName.textContent = "Norco Sight C2";
    bickPrice.textContent = "$4,000";
});

buttonTwo.addEventListener("click", () => {
    mainPhoto.src = "../static/images/2.png";
    bickName.textContent = "Trek Fuel EX 9.8";
    bickPrice.textContent = "$6,999";
});

buttonThree.addEventListener("click", () => {
    mainPhoto.src = "../static/images/3.png";
    bickName.textContent = "Yeti SB130";
    bickPrice.textContent = "$6,200";
});

buttonFour.addEventListener("click", () => {
    mainPhoto.src = "../static/images/4.png";
    bickName.textContent = "Pivot Mach 5.5";
    bickPrice.textContent = "$6,700";
});
