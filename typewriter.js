const sentence = "hello there from lighthouse labs";
let delay = 0;
let increment = 50;
for (const char of sentence) {
  setTimeout(() => {
    process.stdout.write(char);
  }, delay);
  delay += increment;
}
process.stdout.write("\n");
