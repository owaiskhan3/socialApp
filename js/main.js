if ("serviceWorker" in navigator) {
  navigator.serviceWorker
    .register("/sw.js")
    .then(res => console.log("service worker is registred =>", res))
    .catch(err => console.log("error registering service worker =>", err));
}
