function calculateStandardDeviation() {
      // Step 1: Get the input value
      const inputElement = document.getElementById('floatingInput');
      const inputNumbers = inputElement.value;

      // Step 2: Convert the input string to an array of numbers
      const numbers = inputNumbers.split(',').map(Number);

      // Step 3: Calculate the standard deviation
      const mean = numbers.reduce((acc, val) => acc + val, 0) / numbers.length;
      const squaredDifferences = numbers.map(num => Math.pow(num - mean, 2));
      const meanOfSquaredDifferences = squaredDifferences.reduce((acc, val) => acc + val, 0) / numbers.length;
      const standardDeviation = Math.sqrt(meanOfSquaredDifferences);

      // Step 4: Display the result
      const mean1 = document.getElementById('mean');
      mean1.value = `MEAN: ${mean}`;

const std = document.getElementById('standard');
      std.value = `Standard Deviation: ${standardDeviation}`;
    }


