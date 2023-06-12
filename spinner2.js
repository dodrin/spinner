const spinnerParts = ["\r|", "\r/", "\r/", "\r-", "\r\\"];
//iterate over spinnerParts array twice to spine twice
let delay = 0;
spinnerParts.forEach((part1) => {
  spinnerParts.forEach((part2) => {
    setTimeout(() => {
      process.stdout.write(part2);
    }, (delay += 200));
  });
});

setTimeout(() => {
  console.log("\r|    \n");
}, delay);