const messageEl = document.querySelector("#output");
const reader = document.querySelector("#reader");


const camera = document.querySelector(".camera");
const home = document.querySelector(".home")
const download = document.querySelector(".download")
const profile = document.querySelector(".profile")


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
        aspectRatio: 0.5625 // 16:9 aspect ratio
      }, onScanSuccess, onScanFailure);
    } else {
      messageEl.textContent = 'No rear camera found';
    }
  }).catch(err => {
    messageEl.textContent = err;
  });
})

home.addEventListener("click", () => {
  Html5Qrcode.stop().then((ignore) => {
    // QR Code scanning is stopped.
    messageEl.textContent = ignore
  }).catch((err) => {
    // Stop failed, handle it.
    messageEl.textContent = err
  });
})

profile.addEventListener("click", () => {
  Html5Qrcode.stop().then((ignore) => {
    // QR Code scanning is stopped.
    messageEl.textContent = ignore
  }).catch((err) => {
    // Stop failed, handle it.
    messageEl.textContent = err
  });
})

download.addEventListener("click", () => {
  Html5Qrcode.stop().then((ignore) => {
    // QR Code scanning is stopped.
    messageEl.textContent = ignore
  }).catch((err) => {
    // Stop failed, handle it.
    messageEl.textContent = err
  });
})

