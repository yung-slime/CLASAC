
function onScanSuccess(decodedText, decodedResult) {
  console.log(`Code matched = ${decodedText}`, decodedResult);
  window.location.href = decodedResult;

}

function onScanFailure(error) {

  console.warn(`Code scan error = ${error}`);
}


// let html5QrcodeScanner = new Html5QrcodeScanner(
//   "reader",
//   { fps: 30, qrbox: { width: 250, height: 250 } },
//   /* verbose= */ false);
// html5QrcodeScanner.render(onScanSuccess, onScanFailure);


// code to design ui by ourselves. le ggo.

// the constructor 
const scannerObj = new Html5Qrcode("reader", true)
scannerObj.start(
  "facing back", 
  { fps: 30, qrbox: { width: 250, height: 250 } },
  onScanSuccess,
  onScanFailure
)
