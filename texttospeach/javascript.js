let speech = new SpeechSynthesisUtterance();

let voices = [];
let voiceSelect = document.querySelector("select");

// Function to populate the voices
function populateVoices() {
  voices = window.speechSynthesis.getVoices();
  voiceSelect.innerHTML = ""; // Clear any existing options
  voices.forEach((voice, i) => {
    let option = new Option(voice.name + " (" + voice.lang + ")", i);
    voiceSelect.appendChild(option);
  });
  speech.voice = voices[0]; // Set the default voice
}

// Listen for changes in the available voices
window.speechSynthesis.onvoiceschanged = populateVoices;

// Add change event for voice selection
voiceSelect.addEventListener("change", () => {
  speech.voice = voices[voiceSelect.value];
});

// Button click to speak the text
document.querySelector("button").addEventListener("click", () => {
  speech.text = document.querySelector("textarea").value;
  window.speechSynthesis.speak(speech);
});

// Ensure the voices are populated when the page loads
if (window.speechSynthesis.getVoices().length > 0) {
  populateVoices(); // If voices are already available, populate immediately
}
