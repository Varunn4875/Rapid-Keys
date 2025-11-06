const sentences = [
    "The quick brown fox jumps over the lazy dog.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia atque perspiciatis impedit recusandae soluta error fugiat labore, omnis vero eligendi laborum tempora harum incidunt aspernatur quibusdam odit iusto nam ipsum.",
    "Reading is a truly magical escape, a journey into endless possibilities without ever leaving your chair. Through the pages of a book, one can explore ancient ruins, fly through space, or solve gripping mysteries. It expands the mind, builds vocabulary, and offers different perspectives on life's complex challenges. This simple act provides a quiet comfort and a boundless source of adventure, making it one of the most rewarding pastimes available to everyone.",
    "My best friend and I have been inseparable since kindergarten. We live close by, so we often travel to school together on the bus. She has a sweet nature and is always ready to help. We enjoy everything together: studying, playing games, and eating lunch. When I'm feeling down, she knows exactly how to make me smile again. Our shared experiences and mutual support have built a truly special and lasting friendship.",
    "The beach is my favorite place to visit. The moment I feel the sand between my toes and hear the waves crash, I am filled with joy. The sun's rays provide warmth and a healthy dose of vitamin D. My family and I enjoy many activities there, like building intricate sandcastles and playing beach volleyball. Collecting seashells is another favorite pastime. It is wonderful to share these fun, relaxing moments with my loved ones by the sea.",
    "My village is a peaceful escape from the hustle and bustle of city life, far removed from pollution and noise. The connection to the soil and the abundant greenery provides a sense of calm. The air is fresh and revitalizing, even after just a few hours of sleep. While once dominated by traditional mud houses, the landscape now features more modern concrete homes. The people are incredibly friendly, making every visit a truly refreshing and welcoming experience.",
    "Discipline is crucial for a productive and successful life. It involves a set of rules and behavioral patterns that guide our actions and decisions. It helps us stay focused on our goals, whether in school, at work, or in personal development. Following discipline makes us consistent, punctual, and obedient, which in turn helps us become better individuals. Teachers and parents often instill these values early, understanding that a disciplined approach is key to achieving one's full potential.",
    "A paragraph is a group of sentences that are connected and make absolute sense. While writing a long essay or letter, we break them into paragraphs for better understanding and to make a well-structured writing piece. Paragraph writing topics is not only about expressing your thoughts on the given subject. However, it is also about framing ideas about the topic and making it convenient for the readers to follow it. So, in English paragraph writing, it is important to focus on the writing style. Thus, the flow and connection between sentences must be good",
    "Rainy days bring a special joy and freshness to the environment. The air becomes cool, the trees look greener, and everything feels alive. One day, I was on my way to school when the sky suddenly became overcast with dark clouds, and raindrops started falling. I didn't have an umbrella. After an hour, our principal declared a holiday. I returned home and later, my mother served us hot pakoras. I loved floating paper boats with my friends in the running water.",
    "Reading books is a wonderful habit that can increase our knowledge and imagination. Books are a source of immense joy and information. They help us understand the difference between right and wrong, and sometimes even help us accept people and things for their true nature. Reading allows us to learn about different places, cultures, and historical events without leaving our homes. It builds our vocabulary and improves our concentration. Thus, everyone should make reading a regular habit.",
    "My favorite hobby is playing badminton in the evenings with my friends. It is an excellent way to relax after a long day of studying and helps me stay physically fit and active. My friend and I play every day at a nearby court. This hobby not only improves my hand-eye coordination but also teaches me about teamwork and sportsmanship. It is a fun activity that keeps me healthy and happy, and I always look forward to it.",
    "India is a diverse and vibrant country with a rich history and heritage. It's the seventh-largest country by area and a land of unity in diversity, with various cultures and languages coexisting peacefully. The national flag, the Tiranga, symbolizes this diversity with its saffron, white, and green colors and the Ashoka Chakra in the center. Festivals, traditions, and the spirit of patriotism are celebrated with great enthusiasm throughout the nation. ",
];  

let randomNum = Math.floor(Math.random() * 10) + 1;
console.log(randomNum);
const sentencez=sentences[randomNum]



document.getElementById("sentence").innerText = [...sentencez.split(",")];
console.log([...sentencez])
document.getElementById("input").disabled = true;

function score() {
 const ipvalue = document.getElementById("input").value;
const ref = sentencez;

let correct = 0;
const minLength = Math.min(ipvalue.length, ref.length);

for (let i = 0; i < minLength; i++) {
  console.log(ipvalue[i], ref[i]);
  if (ipvalue[i] === ref[i]) correct++;
}


  // Accuracy relative to full reference length
  const accuracy = Math.round((correct / ref.length) * 100);
  document.getElementById("accuracy").innerText = `${accuracy}`;
  console.log("Correct chars:", correct, "of", ref.length, "=>", accuracy);

  // WPM (keep your current logic or use elapsedSeconds)
  const len = ipvalue.split(" ").length;
  const totalSeconds = parseInt(options.value)
//   const totalSeconds = parseInt(options.value) * 5; 
//   const minutes = totalSeconds / 60;
//   const wpm = Math.round((len / 5) / minutes);
  document.getElementById("wpm").innerText = `${len/totalSeconds}`;
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



