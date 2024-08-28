//mapping the keyword to the corresponding keycode
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
//adding event listener for keydown event on the window
window.addEventListener("keydown", function(event) {
    const key = keyMapping[event.code]; // Get the key code from the keyMapping object based on the pressed key
   
    // Use the key code to select the corresponding audio element in the HTML
    const audio = document.querySelector(`audio[data-key="${key}"]`);
    const data_key = document.querySelector(`.key[data-key="${key}"]`);

    if (!audio) return; // If the audio element doesn't exist, exit the function
    audio.currentTime = 0; // Rewind to the start for quick repeat playing
    audio.play(); // Play the audio
    data_key.classList.add("playing"); // Add the playing class to the pressed key    
    this.setTimeout(() => data_key.classList.remove("playing"), 600);  // Remove the playing class after 10ms
});

