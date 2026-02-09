//
// For guidance on how to add JavaScript see:
// https://prototype-kit.service.gov.uk/docs/adding-css-javascript-and-images
//

// import HMRCFrontend from "hmrc-frontend"; document.addEventListener('DOMContentLoaded', () => { HMRCFrontend.initAll(); });

import HMRCFrontend from "hmrc-frontend";

window.GOVUKPrototypeKit.documentReady(() => {
  HMRCFrontend.initAll();
})