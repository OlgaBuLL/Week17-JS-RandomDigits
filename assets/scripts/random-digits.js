function generateNumbers() {
  let min = -10;
  let max = 10;
  let minimalNumber = 0;
  let maximalNumber = 0;
  let summ = 0;
  let multiply = 1;
  let average = 0;
  let numbersArray = [];
  for (let i = 0; i < 10; i++) {
    numbersArray[i] = Math.round(Math.random() * (max - min) + min);
    summ += numbersArray[i];
    multiply *= numbersArray[i];

    minimalNumber = Math.min.apply(null, numbersArray);
    maximalNumber = Math.max.apply(null, numbersArray);
  }

  console.log("Сгенерированный массив: " + numbersArray);
  document.getElementById("generated").innerHTML =
    "Generated array  :   " + numbersArray;

  console.log("Минимальное значение: " + minimalNumber);
  document.getElementById("minimal").innerHTML =
    "Minimal number  :   " + minimalNumber;

  console.log("Максимальное значение: " + maximalNumber);
  document.getElementById("maximal").innerHTML =
    "Maximal number  :   " + maximalNumber;

  average = summ / 10;
  console.log("Среднее арифметическое: " + average);
  document.getElementById("average").innerHTML = "Average  :   " + average;

  console.log("Сумма чисел массива: " + summ);
  document.getElementById("summ").innerHTML = "Sum  :   " + summ;

  console.log("Произведение чисел массива: " + multiply);
  document.getElementById("product").innerHTML =
    "Multiplication  :   " + multiply;
}
