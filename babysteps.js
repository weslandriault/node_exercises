var sum = 0;

function calculateSum() {
    for (var i=2; i < process.argv.length; i++) {
      sum += Number(process.argv[i])
  }
    return sum
}

console.log(calculateSum());
