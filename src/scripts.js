document.addEventListener("DOMContentLoaded", () => {
    const sceneEl = document.querySelector('a-scene');
    const arTarget = document.querySelector('#arTarget');
    const audioBtn = document.querySelector('#button-1');
    let arSystem;

    const updateAudioIcon = (isMuted) => {
        audioBtn.innerHTML = isMuted
            ? "<span class='material-symbols-outlined'>volume_off</span>"
            : "<span class='material-symbols-outlined'>volume_up</span>";
    };

    const toggleAudioMute = () => {
        const fasaKariesGigi = document.querySelector('#fasaKariesGigi');
        fasaKariesGigi.muted = !fasaKariesGigi.muted;
        updateAudioIcon(fasaKariesGigi.muted);
    };

    sceneEl.addEventListener('loaded', () => {
        arSystem = sceneEl.systems["mindar-image-system"];
    });

    arTarget.addEventListener("targetFound", () => {
        console.log("Target found");
        const fasaKariesGigi = document.querySelector('#fasaKariesGigi');
        fasaKariesGigi.play();
    });

    arTarget.addEventListener("targetLost", () => {
        console.log("Target lost");
        const fasaKariesGigi = document.querySelector('#fasaKariesGigi');
        fasaKariesGigi.pause();
    });

    audioBtn.addEventListener("click", toggleAudioMute);

    const fasaKariesGigi = document.querySelector('#fasaKariesGigi');
    fasaKariesGigi.addEventListener('loadedmetadata', () => {
        updateAudioIcon(fasaKariesGigi.muted);
    });
});
