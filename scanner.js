function onSuccessCallback(result) {
  console.log(`here's the result: ${result}.`);
}

function onErrorCallback(error) {
  console.error(`here's the error: ${error}.`);
}
const scanConfig = {
  fps: 20,
  qrbox: {
    width: 250,
    height: 250,
  },
}

const scanSetupConfig = {
  formatsToSupport: [Html5QrcodeSupportedFormats.QR_CODE],
  useBarcodeDetectorIfSupported: false,
  verbose: true,
}

// first lets get camera device Id of the 1st cameraDevice access permissions

async function getCameraId() {
  try {
    const cameraDevices = await Html5Qrcode.getCameras();
    console.log(cameraDevices);
    // cameraDevices: CameraDevice[];

    if (cameraDevices && cameraDevices.length) {
      const selectedCameraDeviceId = cameraDevices[0].id;
      return selectedCameraDeviceId;
    }
    else {
      console.error("no camera device found! occured while tryna access to the camera device.")
    }
  }
  catch (error) {
    console.log(`error logged in while tryna get access to the camera device.\ndescription: ${error}.`)
  }
}

// this is an event handler. invoked when scanBtn is clicked.
async function startScanner() {
  try {
    const scanner = new Html5Qrcode("scanner", scanSetupConfig);
    const activeCameraDeviceId = await getCameraId();
    scanner.start(activeCameraDeviceId, scanConfig, onSuccessCallback, onErrorCallback);
  }
  catch (error) {
    console.error(`error occured while starting scanner. error: ${error}.`)
  }
}


const scanBtn = document.querySelector(".camera");
scanBtn.addEventListener('click', startScanner);



