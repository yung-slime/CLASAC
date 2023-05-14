const messageEl = document.querySelector("#output");
const camera = document.querySelector(".camera");

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
camera.addEventListener("click", () => {
  Html5Qrcode.getCameras().then(cameras => {
    const rearCameras = cameras.filter(camera => camera.label.toLowerCase().includes('back'));
    if (rearCameras.length > 0) {
      const scannerObj = new Html5Qrcode("reader", true);
      scannerObj.start(rearCameras[0].id, {
        fps: 30,
        qrbox: 200,
        // aspectRatio: 1.7778 // 16:9 aspect ratio
      }, onScanSuccess, onScanFailure);
    } else {
      messageEl.textContent = 'No rear camera found';
    }
  }).catch(err => {
    messageEl.textContent = err;
  });
})



