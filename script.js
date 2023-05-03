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

// const camera = document.querySelector(".camera");
// function pullQrScanner() {

//   //gon put a div with id:"reader" only if aint got one.
//   if (!document.querySelector("#reader")) {
//     const mainEl = document.querySelector("main");
//     const QrScannerDiv = document.createElement("div");
//     QrScannerDiv.setAttribute("id", "reader");
//     mainEl.appendChild(QrScannerDiv);
//     const scannerScriptEl = document.querySelector('.scannerScript')
//     scannerScriptEl.setAttribute("src", "https://unpkg.com/html5-qrcode")
//   }
// }

// camera.addEventListener("click", pullQrScanner);

