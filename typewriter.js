const sentence = "hello there from lighthouse labs \n";
let time = 100
for (const char of sentence) {
  setTimeout(() => {
    process.stdout.write(char);
  }, time += 50);
}
