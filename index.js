const fs = require('fs');

const main = async () => {
  let source = 'ny-times-word-list.txt';
  if (process.argv.includes('-o') || process.argv.includes('--old')) {
    console.log('Using original powerlanguage.co.uk word list');
    source = 'old-word-list.txt';
  }
  const words = (await fs.promises.readFile(source))
    .toString()
    .trim()
    .split('\n');
  const argv = process.argv.filter((val, i) => i >= 2 && !val.startsWith('-'));
  const startDate = new Date(2021, 5, 19, 0, 0, 0, 0);
  const targetDate = new Date(argv[0] || new Date());
  const t = targetDate.setHours(0, 0, 0, 0) - startDate.setHours(0, 0, 0, 0);
  const wordleNum = Math.round(t / 864e5);
  console.log(`Wordle ${wordleNum}: ${words[wordleNum]}`);
};

main();
