const sentences = [
    "The quick brown fox jumps over the lazy dog.",
    "JavaScript makes web pages interactive and dynamic.",
    "Coding is like solving a puzzle with logic and patience.",
    "The quick brown fox jumps over the lazy dog.",
    "JavaScript makes web pages interactive and dynamic.",
    "Coding is like solving a puzzle with logic and patience.",
    "The quick brown fox jumps over the lazy dog.",
    "JavaScript makes web pages interactive and dynamic.",
    "Coding is like solving a puzzle with logic and patience.",
    "The quick brown fox jumps over the lazy dog.",
    "JavaScript makes web pages interactive and dynamic.",
    "Coding is like solving a puzzle with logic and patience.",
    "The quick brown fox jumps over the lazy dog.",
    "JavaScript makes web pages interactive and dynamic.",
    "Coding is like solving a puzzle with logic and patience.",
    "The quick brown fox jumps over the lazy dog.",
    "JavaScript makes web pages interactive and dynamic.",
    "Coding is like solving a puzzle with logic and patience.",
];
document.getElementById("sentence").innerText = sentences;
document.getElementById("input").disabled = true;

function score() {
    const ipvalue = document.getElementById("input").value.trim();
    let accurate = 0;

    const sentence = sentences.join(" "); // join sentences with spaces
    console.log("Full sentence:", sentence);

    const minLength = Math.min(ipvalue.length, sentence.length);

    for (let i = 0; i < minLength; i++) {
        if (ipvalue[i] === sentence[i]) {
            accurate++;
        }
    }

    const accuracy = Math.round((accurate / sentence.length) * 100);
    document.getElementById("accuracy").innerText = `${accuracy}`;
    console.log("Accuracy:", accuracy);

    const len = ipvalue.length;
    const totalSeconds = parseInt(options.value) * 5; // each round = 5 seconds
    const minutes = totalSeconds / 60;
    const wpm = Math.round((len / 5) / minutes);

    document.getElementById("wpm").innerText = `Speed: ${wpm} `;

}



let options = document.getElementById("fruits")
function startGame() {
    document.getElementById("input").disabled = false;
    document.getElementById("input").value = "";
    document.getElementById("startBtn").disabled = true;


    let sec = 60; // seconds per round
    let optionsValue = parseInt(options.value)-1 ; // total rounds

    const timing = setInterval(() => {
        document.getElementById("time").innerHTML = `${optionsValue}: ${sec}`;
        sec--;

        if (sec < 0) {
            optionsValue--; // next round
            if (optionsValue < 0) {
                clearInterval(timing); // stop timer exactly
                document.getElementById("time").innerHTML = `Time's up!`;

                // call score after timer completes
                score();
                document.getElementById("input").disabled = true;
                document.getElementById("startBtn").disabled = false;

            }
            sec = 60; 
        }
    }, 1000);
}



