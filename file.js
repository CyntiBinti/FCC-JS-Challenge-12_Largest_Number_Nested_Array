function largestOfFour(arr) {
   let results = [];
   for (let i = 0; i < arr.length; i++) {
     for (let j = 0; j < arr[j].length; j++) {
       let largestNumber = math.max(...arr[i][j]);
        return results.push(largestNumber);
     }
   }
    return results;
  }

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
