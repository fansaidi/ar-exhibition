document.addEventListener("DOMContentLoaded", function () {
    const sceneEl = document.querySelector('a-scene');
    let arSystem;
    sceneEl.addEventListener('loaded', function () {
        arSystem = sceneEl.systems["mindar-image-system"];
    });
    const arTarget = document.querySelector('#arTarget');
    // arReady event triggered when ready
    sceneEl.addEventListener("arReady", (event) => {
        // console.log("MindAR is ready")
    });
    // arError event triggered when something went wrong. Mostly browser compatbility issue
    sceneEl.addEventListener("arError", (event) => {
        // console.log("MindAR failed to start")
    });
    // detect target found
    arTarget.addEventListener("targetFound", event => {
        console.log("target found");
        document.querySelector('#fasaKariesGigi').play();
    });
    // detect target lost
    arTarget.addEventListener("targetLost", event => {
        console.log("target lost");
        document.querySelector('#fasaKariesGigi').pause();
    });
});