import { BrowserQRCodeReader } from "./node_modules/@zxing/browser";

const codeReader = new BrowserQRCodeReader();

const videoInputDevices = await ZXingBrowser.BrowserCodeReader.listVideoInputDevices();
console.log(`videoInputDevices: ${videoInputDevices}`);

const selectedDeviceId = videoInputDevices[0].deviceId;


console.log(`Started decode from camera with id ${selectedDeviceId}`);

const previewElem = document.querySelector('#camFeed');

const controls = await codeReader.decodeFromVideoDevice(selectedDeviceId, previewElem, (result, error, controls) => {
  console.log(`this is the decoded result: ${result}`);
  console.log(controls);
});


