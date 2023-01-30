let o = { frequency: { value: 0 } };
let playing = false;
let freqs = new Array(8);
const music = () => {
  let playButton = document.getElementById("start-button");
  if (!playing) {
    var context = new AudioContext();
    o = context.createOscillator();
    o.type = "sine";
    o.frequency.value = 1000 * Math.random();
    o.connect(context.destination);
    o.start();
    freqs = Array.from({ length: 8 }, () => Math.floor(Math.random() * 1000));
    playButton.textContent = "Stop me baby";
  } else {
    o.stop();
    playButton.textContent = "Click me baby";
  }
  playing = !playing;
};
console.log("Freqs:" + freqs);
let i = 0;
setInterval(() => {
  o.frequency.value = freqs[i % 8];
  i++;
}, 100);
