const menu = () => {
  const btnNav = document.querySelector(".button__nav");

  btnNav.addEventListener("click", () => {
    btnNav.classList.toggle("open");
    console.log("click");
  });
};
export default menu;
