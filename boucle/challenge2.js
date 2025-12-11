const prompt = require("prompt-sync")();

let N = prompt(" entrer le nombre: ");

let prime = true;

for (let i = 2; i < N; i++) {
  if (N % i == 0) {
    prime = false;
  }
}
if (N <= 1) {
  console.log(" non premie");
} else if (prime) {
  console.log(N, "premier");
} else {
  console.log(N, "non premier");
}
