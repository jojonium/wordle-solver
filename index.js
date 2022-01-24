const fs = require('fs');

const main = async () => {
  const words = (await fs.promises.readFile('word-list.txt'))
    .toString()
    .trim()
    .split('\n');
  const startDate = new Date(2021, 5, 19, 0, 0, 0, 0);
  const targetDate = new Date(process.argv[2] || new Date());
  const t = targetDate.setHours(0, 0, 0, 0) - startDate.setHours(0, 0, 0, 0);
  const wordleNum = Math.round(t / 864e5);
  console.log(`Wordle ${wordleNum}: ${words[wordleNum]}`);
};

main();
