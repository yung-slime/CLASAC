const messageEl = document.querySelector("#output")


function onScanSuccess(decodedText, decodedResult) {
  console.log(`Code matched = ${decodedText}`, decodedResult);
  window.location.href = decodedResult;

  messageEl.textContent = "success";

}

function onScanFailure(error) {

  console.warn(`Code scan error = ${error}`);
  messageEl.textContent = "error occured.";
}


// let html5QrcodeScanner = new Html5QrcodeScanner(
//   "reader",
//   { fps: 30, qrbox: { width: 250, height: 250 } },
//   /* verbose= */ false);
// html5QrcodeScanner.render(onScanSuccess, onScanFailure);


// code to design ui by ourselves. le ggo.

// the constructor 
Html5Qrcode.getCameras().then(devices => {
  // Use the ID of the first camera in the list
  const cameraId = devices;
  messageEl.textContent = `Camera ID: ${cameraId}`

}).catch(err => {

  messageEl.textContent = "error";

});


// const scannerObj = new Html5Qrcode("reader", true)

// scannerObj.start(
//   "facing back", 
//   { fps: 30, qrbox: { width: 250, height: 250 } },
//   onScanSuccess,
//   onScanFailure
// ).then(
//   () => {
//     messageEl.textContent = "success";
//   }
// ).catch(
//   () => {
//     messageEl.textContent = "error occured.";
//   }
// )


