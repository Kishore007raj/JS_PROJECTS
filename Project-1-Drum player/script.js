const keyMapping = {
    "KeyQ": 81,
    "KeyW": 87,
    "KeyE": 69,
    "KeyR": 82,
    "KeyT": 84,
    "KeyY": 89,
    "KeyU": 85,
    "KeyI": 73,
    "KeyS": 83
};

window.addEventListener("keydown", function (event) {
    const key = keyMapping[event.code]; // Get the numeric data-key from the mapping
    const audio = document.querySelector(`audio[data-key="${key}"]`);
    if (audio) {
        audio.currentTime = 0; // Rewind to the start
        audio.play(); // Play the sound
    }
});
