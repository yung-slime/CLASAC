const listItems = document.querySelectorAll(".navbar-item");

function activate() {
  listItems.forEach((listItem) => {
    listItem.classList.remove("active");
    this.classList.add("active");
  });
}

listItems.forEach((listItem) => {
  listItem.addEventListener("click", activate);
});



