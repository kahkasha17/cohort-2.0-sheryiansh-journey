// Typewriter Song: "Tujhe Bulaane Ko..." (Node.js)
// Run: npm install chalk && node index.js

const chalk = require("chalk");
const readline = require("readline");

const lyrics = [
  "Tujhe Bulaane Ko Awaaz Hi Nahin Hai",
  "Tujhe Bataane Ko Alfaaz Hi Nahin Hain",
  "Bujh Rahi Hai Yeh Shamma Mere Haathon Mein",
  "Isse Jalaane Ko Ab Aag Bhi Nahin Hai",
  "",
  "Zindagi Yeh Ab Bezaar Bhi Nahin Hai",
  "Meri Aankhon Mein Toh Pyaar Hi Nahin Hai",
  "Dil Yeh Khush Hai Hawaon Se Duaon Se",
  "Abhi Aayi Koi Bahaar Bhi Nahin Hai",
  "",
  "Ab Toh Tera Intezaar Hi Nahin Hai",
  "Ab Toh Tera Intezaar Hi Nahin Hai",
  "Tere Jaane Ka Malaal Bhi Nahin Hai",
  "Ab Toh Tera Intezaar Hi Nahin Hai"
];

const typingSpeed = 80;
const lineDelay = 600; 

const sleep = (ms) => new Promise(res => setTimeout(res, ms));

async function typewriter(line, color = chalk.cyanBright) {
  for (const ch of line) {
    process.stdout.write(color(ch));
    await sleep(typingSpeed);
  }
  process.stdout.write("\n");
  await sleep(lineDelay);
}

async function blinkingCursor(text, duration = 1500) {
  const cursor = ["|", " "];
  const start = Date.now();
  let i = 0;
  while (Date.now() - start < duration) {
    readline.cursorTo(process.stdout, text.length);
    process.stdout.write(chalk.green(cursor[i % 2]));
    i++;
    await sleep(400);
  }
  readline.cursorTo(process.stdout, text.length);
  process.stdout.write(" ");
}

async function printLyrics() {
  const title = chalk.magentaBright.bold("🎶  Tujhe Bulaane Ko...  🎶");
  process.stdout.write(title);
  await blinkingCursor(title, 1500);
  console.log("\n");

  for (let i = 0; i < lyrics.length; i++) {
    const color =
      i % 2 === 0 ? chalk.cyanBright : chalk.yellowBright;
    await typewriter(lyrics[i], color);
  }

  console.log(chalk.redBright("\n❤️  End ❤️"));
}

printLyrics();
