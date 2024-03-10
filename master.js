// Check if there localStorage
function checkLocalStorage(e) {
  if (localStorage.getItem("class") !== null) {
    document.querySelectorAll(".links li a").forEach((ele) => {
      ele.classList.remove("active");
      if (ele.dataset.class === localStorage.getItem("class")) {
        ele.classList.add("active");
      }
    });
  }
}
checkLocalStorage();
//
function showNavbar() {
  document.querySelector(".bars-icon").onclick = (e) => {
    document.querySelector("nav").classList.toggle("show");
  };
}
showNavbar();
// Start Coding ul links
function links() {
  document.querySelectorAll(".links li a");
  console.log(document.querySelectorAll(".links li a"));
  // start remove class active
  document.querySelectorAll(".links li a").forEach((li) => {
    li.addEventListener("click", (e) => {
      document.querySelectorAll(".links li a").forEach((li) => {
        li.classList.remove("active");
        e.currentTarget.classList.add("active");
        localStorage.setItem("class", e.target.dataset.class);
      });
    });
  });
}
links();
