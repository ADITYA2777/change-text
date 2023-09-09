

const heading = document.querySelector("#heading");
const changetextbtn = document.querySelector("#text-changer");

changetextbtn.addEventListener("click", () => {
  if (heading.textContent === "The most affordable learning platfrom") {
    heading.textContent = "Pw Skills";
  } else {
    heading.textContent =="The most affordable learning platfrom";
    }
});