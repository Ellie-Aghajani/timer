process.stdout.write('\x07');
let times = process.argv.slice(2);
timesNumbers = times

  .filter((time) => !isNaN(time))
  .filter((time) => time >= 0)
  .map((el) => +el);

for (const time of timesNumbers) {
  console.log(time);
  setTimeout(() => {
    process.stdout.write("\x07");
  }, time * 1000);
}
